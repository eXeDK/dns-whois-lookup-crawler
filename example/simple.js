'use strict'
const dnsWhoisCrawler = require('../index')

const recordTypes = [
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

dnsWhoisCrawler('dr.dk', recordTypes)
  .then(results => {
    console.log(JSON.stringify(results, null, '\t'))
  })
