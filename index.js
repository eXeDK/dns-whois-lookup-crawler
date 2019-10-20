'use strict'
const dns = require('dns').promises;
const whoisJson = require('whois-json')
const spfParse = require('spf-parse')

async function parseARecord(record) {
  let parsedRecord = await whoisJson(record)

  return {
    whois: parsedRecord
  }
}

async function parseMXRecord(record) {
  let parsedRecord = await myResolveAny(record.exchange, ['A'])

  return {
    lookup: parsedRecord
  }
}

async function parseNSRecord(record) {
  let parsedRecord = await myResolveAny(record, ['A'])

  return {
    lookup: parsedRecord
  }
}

async function parseSpfRecord(record) {
  let spfParsed = spfParse(record)

  return Promise.all(spfParsed.mechanisms.filter(mechanism => ['ip4', 'ip6'].includes(mechanism.type))
    .map(async mechanism => whoisJson(mechanism.value)))
    .then(whoisLookups => {
      return {
        parsed: spfParsed,
        whois: whoisLookups
      }
    })
}

async function parseTXTRecord(record) {
  let joinedRecord = record.join('')

  if (joinedRecord.includes('spf')) {
    return parseSpfRecord(joinedRecord)
  }

  return ''
}

async function parseRecord(recordType, records) {
  return Promise.all(records.map(async record => {
    let baseResult = {
      original: record
    }
    let parsedResult = {}

    switch (recordType) {
      case 'A':
      case 'AAAA':
        parsedResult = await parseARecord(record)
        break

      case 'MX':
        parsedResult = await parseMXRecord(record)
        break

      case 'NS':
        parsedResult = await parseNSRecord(record)
        break

      case 'TXT':
        parsedResult = await parseTXTRecord(record)
        break
    }

    return Object.assign(baseResult, parsedResult)
  }))
}

async function myResolveAny(hostname, recordTypes) {
  return Promise.all(recordTypes.map(async recordType => {
    return await dns.resolve(hostname, recordType)
      .then(async records => {
        let parsed = await parseRecord(recordType, records)
        return {
          recordType: recordType,
          records: parsed
        }
      })
      .catch(() => {})
  }))
    .then(results => results.filter(element => typeof element != 'undefined'))
}

let recordTypes = [
  'A',
  'AAAA',
  'CNAME',
  'MX',
  'NAPTR',
  'NS',
  'PTR',
  'SOA',
  'SRV',
  'TXT'
]

myResolveAny('danskfolkeparti.dk', recordTypes)
  .then(results => {
    console.log(JSON.stringify(results, null, '\t'))
  })