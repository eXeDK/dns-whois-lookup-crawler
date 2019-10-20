'use strict'
const dns = require('dns').promises
const whoisJson = require('whois-json')
const spfParse = require('spf-parse')

async function parseARecord (record) {
  const parsedRecord = await whoisJson(record)

  return {
    whois: parsedRecord
  }
}

async function parseMXRecord (record) {
  const parsedRecord = await dnsWhoisCrawler(record.exchange, ['A'])

  return {
    lookup: parsedRecord
  }
}

async function parseNSRecord (record) {
  const parsedRecord = await dnsWhoisCrawler(record, ['A'])

  return {
    lookup: parsedRecord
  }
}

async function parseSpfRecord (record) {
  const spfParsed = spfParse(record)

  return Promise.all(spfParsed.mechanisms.filter(mechanism => ['ip4', 'ip6'].includes(mechanism.type))
    .map(async mechanism => whoisJson(mechanism.value)))
    .then(whoisLookups => {
      return {
        parsed: spfParsed,
        whois: whoisLookups
      }
    })
}

async function parseTXTRecord (record) {
  const joinedRecord = record.join('')

  if (joinedRecord.includes('spf')) {
    return parseSpfRecord(joinedRecord)
  }

  return ''
}

async function parseRecord (recordType, records) {
  return Promise.all(records.map(async record => {
    const baseResult = {
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

async function dnsWhoisCrawler (hostname, recordTypes) {
  return Promise.all(recordTypes.map(async recordType => {
    return dns.resolve(hostname, recordType)
      .then(async records => {
        const parsed = await parseRecord(recordType, records)
        return {
          recordType: recordType,
          records: parsed
        }
      })
      .catch(() => {})
  }))
    .then(results => results.filter(element => typeof element !== 'undefined'))
}

module.exports = dnsWhoisCrawler
