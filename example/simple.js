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

/*
[
	{
		"recordType": "A",
		"records": [
			{
				"original": "159.20.6.38",
				"whois": {
					"note": "this output has been filtered.",
					"inetnum": "159.20.6.32 - 159.20.6.47",
					"netname": "DR-WEBSERVICES-NETWORK1",
					"descr": "Danmarks Radio webservices network K Danmarks Radio net",
					"country": "DK",
					"geoloc": "55.658309 12.5902681",
					"adminC": "DRTU-RIPE SEH25-RIPE CL7335-RIPE",
					"techC": "DRTU-RIPE SEH25-RIPE CL7335-RIPE",
					"status": "ASSIGNED PA",
					"mntBy": "DANMARKSRADIO-MNT DANMARKSRADIO-MNT DANMARKSRADIO-MNT",
					"created": "2012-10-08T19:20:48Z 2011-08-22T11:47:00Z 2011-09-28T11:28:46Z",
					"lastModified": "2016-10-12T12:18:44Z 2016-09-29T11:49:17Z 2011-09-28T11:28:46Z",
					"source": "RIPE RIPE # Filtered RIPE",
					"role": "Danmarks Radio TU Infrastruktur",
					"address": "DR Emil Holms Kanal 20 DK-0999 Copenhagen C. Denmark",
					"abuseMailbox": "hostmaster@dr.dk",
					"nicHdl": "DRTU-RIPE",
					"route": "159.20.0.0/21",
					"origin": "AS29266"
				}
			}
		]
	},
	{
		"recordType": "MX",
		"records": [
			{
				"original": {
					"exchange": "dr-dk.mx2.comendosystems.net",
					"priority": 20
				},
				"lookup": [
					{
						"recordType": "A",
						"records": [
							{
								"original": "192.162.217.4",
								"whois": {
									"note": "this output has been filtered.",
									"inetnum": "192.162.216.0 - 192.162.219.255",
									"netname": "J2-IRE-PI",
									"country": "IE",
									"remarks": "rev-srv: ns1.electric.net rev-srv: ns2.electric.net rev-srv: ns3.electric.net",
									"org": "ORG-jGIL1-RIPE",
									"adminC": "RT4320-RIPE RT4320-RIPE CH2951-RIPE JGDA3-RIPE",
									"techC": "RT4320-RIPE JGDA3-RIPE RT4320-RIPE CH2951-RIPE",
									"status": "ASSIGNED PI",
									"mntBy": "RIPE-NCC-END-MNT J2-MNT1 MNT-COMENDO J2-MNT2 J2-MNT1 J2-MNT2 MNT-COMENDO J2-MNT1 J2-MNT2 J2-MNT1 J2-MNT2",
									"mntRoutes": "J2-MNT1 J2-MNT2",
									"mntDomains": "J2-MNT1 J2-MNT2",
									"created": "2011-04-12T10:39:31Z 2011-03-15T18:36:42Z 2011-03-15T18:12:57Z 2014-09-16T21:17:45Z",
									"lastModified": "2019-03-14T09:48:02Z 2019-03-14T10:25:07Z 2015-07-27T23:03:37Z 2014-09-16T21:17:45Z",
									"source": "RIPE # Filtered RIPE # Filtered RIPE # Filtered RIPE",
									"sponsoringOrg": "ORG-TP3-RIPE",
									"organisation": "ORG-jGIL1-RIPE",
									"orgName": "j2 Global Ireland Limited",
									"orgType": "OTHER",
									"address": "Woodford Business Park, Unit-3 Santry, Dublin 17 Ireland Woodford Business Park, Unit-3 Santry, Dublin 17 Ireland",
									"phone": "+353 45 940049 +353 45 940049",
									"abuseC": "AR19310-RIPE",
									"mntRef": "J2-MNT1",
									"person": "Sys Admin",
									"nicHdl": "RT4320-RIPE",
									"route": "192.162.217.0/24",
									"descr": "j2 Global Ireland Limited London network",
									"origin": "AS56638"
								}
							}
						]
					}
				]
			},
			{
				"original": {
					"exchange": "dr-dk.mx1.comendosystems.com",
					"priority": 10
				},
				"lookup": [
					{
						"recordType": "A",
						"records": [
							{
								"original": "89.104.206.4",
								"whois": {
									"note": "this output has been filtered.",
									"inetnum": "89.104.206.0 - 89.104.206.255",
									"netname": "J2-Global-Denmark-A",
									"descr": "J2 Global Denmark A",
									"country": "DK",
									"geoloc": "55.66519318443606 12.568359375",
									"language": "DA",
									"adminC": "JGDA3-RIPE LH1201-RIPE",
									"techC": "JGDA3-RIPE LH1201-RIPE",
									"status": "ASSIGNED PA",
									"mntBy": "MNT-COMENDO MNT-COMENDO MNT-COMENDO",
									"mntRoutes": "MNT-COMENDO",
									"created": "2015-04-22T12:42:49Z 2018-10-25T14:52:27Z 2018-07-03T05:32:34Z",
									"lastModified": "2018-10-25T14:54:07Z 2019-03-21T08:29:45Z 2018-07-03T05:32:34Z",
									"source": "RIPE RIPE # Filtered RIPE",
									"role": "J2 Global Denmark A/S",
									"address": "Fusemail/Vipre EU Operations Spotorno All� 12,1",
									"abuseMailbox": "sysadmin@electricmail.com",
									"nicHdl": "JGDA3-RIPE",
									"route": "89.104.206.0/24",
									"origin": "AS34848"
								}
							}
						]
					}
				]
			}
		]
	},
	{
		"recordType": "NS",
		"records": [
			{
				"original": "a28-65.akam.net",
				"lookup": [
					{
						"recordType": "A",
						"records": [
							{
								"original": "95.100.173.65",
								"whois": {
									"note": "this output has been filtered.",
									"inetnum": "95.100.168.0 - 95.100.175.255",
									"netname": "AKAMAI-PA",
									"descr": "Akamai Technologies Akamai Technologies",
									"country": "EU",
									"adminC": "NARA1-RIPE NF1714-RIPE CKAK-RIPE",
									"techC": "NARA1-RIPE NF1714-RIPE JP1944-RIPE APB15-RIPE CKAK-RIPE TBAK-RIPE NB782-RIPE RM4844-RIPE AKAY-RIPE",
									"status": "ASSIGNED PA",
									"mntBy": "AKAM1-RIPE-MNT AKAM1-RIPE-MNT AKAM1-RIPE-MNT",
									"mntRoutes": "AKAM1-RIPE-MNT",
									"created": "2010-07-23T11:29:10Z 2002-03-06T09:02:17Z 2014-05-09T14:50:10Z",
									"lastModified": "2010-07-23T11:29:10Z 2019-04-15T17:17:53Z 2014-05-09T14:50:10Z",
									"source": "RIPE RIPE # Filtered RIPE",
									"role": "Network Architecture Role Account",
									"address": "Akamai Technologies 8 Cambridge Center Cambridge, MA 02142",
									"phone": "+1-617-938-3130",
									"abuseMailbox": "abuse@akamai.com",
									"nicHdl": "NARA1-RIPE",
									"route": "95.100.173.0/24",
									"origin": "AS21342"
								}
							}
						]
					}
				]
			},
			{
				"original": "a24-67.akam.net",
				"lookup": [
					{
						"recordType": "A",
						"records": [
							{
								"original": "2.16.130.67",
								"whois": {
									"note": "this output has been filtered.",
									"inetnum": "2.16.130.0 - 2.16.131.255",
									"netname": "AKAMAI-PA",
									"descr": "Akamai Technologies Akamai Technologies",
									"country": "EU",
									"adminC": "NARA1-RIPE NF1714-RIPE CKAK-RIPE",
									"techC": "NARA1-RIPE NF1714-RIPE JP1944-RIPE APB15-RIPE CKAK-RIPE TBAK-RIPE NB782-RIPE RM4844-RIPE AKAY-RIPE",
									"status": "ASSIGNED PA",
									"mntBy": "AKAM1-RIPE-MNT AKAM1-RIPE-MNT AKAM1-RIPE-MNT",
									"mntRoutes": "DTAG-RR",
									"created": "2010-12-13T14:14:02Z 2002-03-06T09:02:17Z 2015-10-06T05:00:04Z",
									"lastModified": "2010-12-13T14:14:02Z 2019-04-15T17:17:53Z 2015-10-06T05:00:04Z",
									"source": "RIPE RIPE # Filtered RIPE",
									"role": "Network Architecture Role Account",
									"address": "Akamai Technologies 8 Cambridge Center Cambridge, MA 02142",
									"phone": "+1-617-938-3130",
									"abuseMailbox": "abuse@akamai.com",
									"nicHdl": "NARA1-RIPE",
									"route": "2.16.130.0/24",
									"origin": "AS21342"
								}
							}
						]
					}
				]
			},
			{
				"original": "a26-64.akam.net",
				"lookup": [
					{
						"recordType": "A",
						"records": [
							{
								"original": "23.74.25.64",
								"whois": {
									"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
									"netRange": "23.72.0.0 - 23.79.255.255",
									"cidr": "23.72.0.0/13",
									"netName": "AKAMAI",
									"netHandle": "NET-23-72-0-0-1",
									"parent": "NET23 (NET-23-0-0-0-0)",
									"netType": "Direct Allocation",
									"organization": "Akamai Technologies, Inc. (AKAMAI)",
									"regDate": "2013-01-25 1999-01-21",
									"updated": "2013-01-25 2019-05-29",
									"ref": "https://rdap.arin.net/registry/ip/23.72.0.0 https://rdap.arin.net/registry/entity/AKAMAI",
									"orgName": "Akamai Technologies, Inc.",
									"orgId": "AKAMAI",
									"address": "150 Broadway",
									"city": "Cambridge",
									"stateProv": "MA",
									"postalCode": "02142",
									"country": "US",
									"orgTechHandle": "YKS-ARIN IPADM11-ARIN SJS98-ARIN",
									"orgTechName": "Yeung, Kam Sze ipadmin Schecter, Steven Jay",
									"orgTechPhone": "+852-22718527 +1-617-444-0017 +1-617-274-7134",
									"orgTechEmail": "ip-admin@akamai.com ip-admin@akamai.com ip-admin@akamai.com",
									"orgTechRef": "https://rdap.arin.net/registry/entity/YKS-ARIN https://rdap.arin.net/registry/entity/IPADM11-ARIN https://rdap.arin.net/registry/entity/SJS98-ARIN",
									"orgAbuseHandle": "NUS-ARIN",
									"orgAbuseName": "NOC United States",
									"orgAbusePhone": "+1-617-444-2535",
									"orgAbuseEmail": "abuse@akamai.com",
									"orgAbuseRef": "https://rdap.arin.net/registry/entity/NUS-ARIN"
								}
							}
						]
					}
				]
			}
		]
	},
	{
		"recordType": "TXT",
		"records": [
			{
				"original": [
					"adobe-idp-site-verification=7f32e0b0-b088-4a47-82f4-a61aa2134ab9"
				]
			},
			{
				"original": [
					"google-site-verification=6Ng60nC6s3sFw6wW1Yfd_KNin9C7Phlsh6WMZWGsEeA"
				]
			},
			{
				"original": [
					"google-site-verification=AQ0fCr9IethCjZL_y72zXFkATbSovBs8OF1iHxbh3qY"
				]
			},
			{
				"original": [
					"google-site-verification=WdHD_OjNWRViXSvPThSHynaZLQgv-C4lQ32Q-nSXvLo"
				]
			},
			{
				"original": [
					"google-site-verification=WqMImrxRQ4kQx8PF0D-Ch7P2JK2TT6Fd4i_Tjm3O304"
				]
			},
			{
				"original": [
					"google-site-verification=iGF5KVqi50rehOOgHqeS0kEe8ok6AWGsAA6xfnGggTA"
				]
			},
			{
				"original": [
					"jrJi5WjnkYRCtufWpYqj9fhzZNCdivQ+BaF7w3e0dlGGYb0Ap+zG1M3y1wn/5c5sHB9ipWcDY7zV09o4oZFnTA=="
				]
			},
			{
				"original": [
					"v=spf1 ip4:195.137.194.1/24 include:spf1.dr.dk ip4:52.28.56.226 ip4:52.28.45.240 ip4:52.16.224.164 ip4:52.16.193.66 ip4:34.253.4.94 ip4:52.50.106.250 ip4:52.211.56.181 ip4:52.213.38.246 ip4:77.94.235.18 ip4:185.109.196.16 include:spf1_Auth0_2.dr.dk -all"
				],
				"parsed": {
					"mechanisms": [
						{
							"prefix": "v",
							"type": "version",
							"description": "The SPF record version",
							"value": "spf1"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "195.137.194.1/24"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "include",
							"description": "The specified domain is searched for an 'allow'",
							"value": "spf1.dr.dk"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "52.28.56.226"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "52.28.45.240"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "52.16.224.164"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "52.16.193.66"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "34.253.4.94"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "52.50.106.250"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "52.211.56.181"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "52.213.38.246"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "77.94.235.18"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "ip4",
							"description": "Match if IP is in the given range",
							"value": "185.109.196.16"
						},
						{
							"prefix": "+",
							"prefixdesc": "Pass",
							"type": "include",
							"description": "The specified domain is searched for an 'allow'",
							"value": "spf1_Auth0_2.dr.dk"
						},
						{
							"prefix": "-",
							"prefixdesc": "Fail",
							"type": "all",
							"description": "Always matches. It goes at the end of your record"
						}
					],
					"valid": true
				},
				"whois": [
					{
						"seeHttp": "//www.ripe.net/db/support/db-terms-conditions.pdf",
						"error": "115: invalid search key"
					},
					{
						"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
						"netRange": "52.0.0.0 - 52.31.255.255 52.28.0.0 - 52.29.255.255",
						"cidr": "52.0.0.0/11 52.28.0.0/15",
						"netName": "AT-88-Z AMAZO-ZFRA",
						"netHandle": "NET-52-0-0-0-1 NET-52-28-0-0-1",
						"parent": "NET52 (NET-52-0-0-0-0) AT-88-Z (NET-52-0-0-0-1)",
						"netType": "Direct Allocation Reallocated",
						"organization": "Amazon Technologies Inc. (AT-88-Z) A100 ROW GmbH (RG-123)",
						"regDate": "1991-12-19 2011-12-08 2016-09-27 2014-11-07",
						"updated": "2015-03-20 2019-07-25 2016-09-27 2014-11-07",
						"ref": "https://rdap.arin.net/registry/ip/52.0.0.0 https://rdap.arin.net/registry/entity/AT-88-Z https://rdap.arin.net/registry/ip/52.28.0.0 https://rdap.arin.net/registry/entity/RG-123",
						"orgName": "Amazon Technologies Inc. A100 ROW GmbH",
						"orgId": "AT-88-Z RG-123",
						"address": "410 Terry Ave N. Marcel-Breuer-Strasse 10",
						"city": "Seattle Munchen",
						"stateProv": "WA",
						"postalCode": "98109 80807",
						"country": "US DE",
						"comment": "All abuse reports MUST include: * src IP * dest IP (your IP) * dest port * Accurate date/timestamp and timezone of activity * Intensity/frequency (short log extracts) * Your contact details (phone and email) Without these we will be unable to identify the correct owner of the IP address at that point in time.",
						"orgTechHandle": "ANO24-ARIN ANO24-ARIN",
						"orgTechName": "Amazon EC2 Network Operations Amazon EC2 Network Operations",
						"orgTechPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgTechEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgTechRef": "https://rdap.arin.net/registry/entity/ANO24-ARIN https://rdap.arin.net/registry/entity/ANO24-ARIN",
						"orgRoutingHandle": "IPROU3-ARIN",
						"orgRoutingName": "IP Routing",
						"orgRoutingPhone": "+1-206-266-4064",
						"orgRoutingEmail": "aws-routing-poc@amazon.com",
						"orgRoutingRef": "https://rdap.arin.net/registry/entity/IPROU3-ARIN",
						"orgNocHandle": "AANO1-ARIN AANO1-ARIN",
						"orgNocName": "Amazon AWS Network Operations Amazon AWS Network Operations",
						"orgNocPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgNocEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgNocRef": "https://rdap.arin.net/registry/entity/AANO1-ARIN https://rdap.arin.net/registry/entity/AANO1-ARIN",
						"orgAbuseHandle": "AEA8-ARIN AEA8-ARIN",
						"orgAbuseName": "Amazon EC2 Abuse Amazon EC2 Abuse",
						"orgAbusePhone": "+1-206-266-4064 +1-206-266-4064",
						"orgAbuseEmail": "abuse@amazonaws.com abuse@amazonaws.com",
						"orgAbuseRef": "https://rdap.arin.net/registry/entity/AEA8-ARIN https://rdap.arin.net/registry/entity/AEA8-ARIN",
						"originAs": "AS16509"
					},
					{
						"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
						"netRange": "52.0.0.0 - 52.31.255.255 52.28.0.0 - 52.29.255.255",
						"cidr": "52.0.0.0/11 52.28.0.0/15",
						"netName": "AT-88-Z AMAZO-ZFRA",
						"netHandle": "NET-52-0-0-0-1 NET-52-28-0-0-1",
						"parent": "NET52 (NET-52-0-0-0-0) AT-88-Z (NET-52-0-0-0-1)",
						"netType": "Direct Allocation Reallocated",
						"organization": "Amazon Technologies Inc. (AT-88-Z) A100 ROW GmbH (RG-123)",
						"regDate": "1991-12-19 2011-12-08 2016-09-27 2014-11-07",
						"updated": "2015-03-20 2019-07-25 2016-09-27 2014-11-07",
						"ref": "https://rdap.arin.net/registry/ip/52.0.0.0 https://rdap.arin.net/registry/entity/AT-88-Z https://rdap.arin.net/registry/ip/52.28.0.0 https://rdap.arin.net/registry/entity/RG-123",
						"orgName": "Amazon Technologies Inc. A100 ROW GmbH",
						"orgId": "AT-88-Z RG-123",
						"address": "410 Terry Ave N. Marcel-Breuer-Strasse 10",
						"city": "Seattle Munchen",
						"stateProv": "WA",
						"postalCode": "98109 80807",
						"country": "US DE",
						"comment": "All abuse reports MUST include: * src IP * dest IP (your IP) * dest port * Accurate date/timestamp and timezone of activity * Intensity/frequency (short log extracts) * Your contact details (phone and email) Without these we will be unable to identify the correct owner of the IP address at that point in time.",
						"orgTechHandle": "ANO24-ARIN ANO24-ARIN",
						"orgTechName": "Amazon EC2 Network Operations Amazon EC2 Network Operations",
						"orgTechPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgTechEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgTechRef": "https://rdap.arin.net/registry/entity/ANO24-ARIN https://rdap.arin.net/registry/entity/ANO24-ARIN",
						"orgRoutingHandle": "IPROU3-ARIN",
						"orgRoutingName": "IP Routing",
						"orgRoutingPhone": "+1-206-266-4064",
						"orgRoutingEmail": "aws-routing-poc@amazon.com",
						"orgRoutingRef": "https://rdap.arin.net/registry/entity/IPROU3-ARIN",
						"orgNocHandle": "AANO1-ARIN AANO1-ARIN",
						"orgNocName": "Amazon AWS Network Operations Amazon AWS Network Operations",
						"orgNocPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgNocEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgNocRef": "https://rdap.arin.net/registry/entity/AANO1-ARIN https://rdap.arin.net/registry/entity/AANO1-ARIN",
						"orgAbuseHandle": "AEA8-ARIN AEA8-ARIN",
						"orgAbuseName": "Amazon EC2 Abuse Amazon EC2 Abuse",
						"orgAbusePhone": "+1-206-266-4064 +1-206-266-4064",
						"orgAbuseEmail": "abuse@amazonaws.com abuse@amazonaws.com",
						"orgAbuseRef": "https://rdap.arin.net/registry/entity/AEA8-ARIN https://rdap.arin.net/registry/entity/AEA8-ARIN",
						"originAs": "AS16509"
					},
					{
						"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
						"netRange": "52.0.0.0 - 52.31.255.255 52.16.0.0 - 52.19.255.255",
						"cidr": "52.0.0.0/11 52.16.0.0/14",
						"netName": "AT-88-Z AMAZON-DUB",
						"netHandle": "NET-52-0-0-0-1 NET-52-16-0-0-1",
						"parent": "NET52 (NET-52-0-0-0-0) AT-88-Z (NET-52-0-0-0-1)",
						"netType": "Direct Allocation Reallocated",
						"organization": "Amazon Technologies Inc. (AT-88-Z) Amazon Data Services Ireland Limited (ADSIL-1)",
						"regDate": "1991-12-19 2011-12-08 2016-09-28 2014-07-18",
						"updated": "2015-03-20 2019-07-25 2016-09-28 2014-07-18",
						"ref": "https://rdap.arin.net/registry/ip/52.0.0.0 https://rdap.arin.net/registry/entity/AT-88-Z https://rdap.arin.net/registry/ip/52.16.0.0 https://rdap.arin.net/registry/entity/ADSIL-1",
						"orgName": "Amazon Technologies Inc. Amazon Data Services Ireland Limited",
						"orgId": "AT-88-Z ADSIL-1",
						"address": "410 Terry Ave N. Unit 4033, Citywest Avenue Citywest Business Park",
						"city": "Seattle Dublin",
						"stateProv": "WA D24",
						"postalCode": "98109",
						"country": "US IE",
						"comment": "All abuse reports MUST include: * src IP * dest IP (your IP) * dest port * Accurate date/timestamp and timezone of activity * Intensity/frequency (short log extracts) * Your contact details (phone and email) Without these we will be unable to identify the correct owner of the IP address at that point in time.",
						"orgTechHandle": "ANO24-ARIN ANO24-ARIN",
						"orgTechName": "Amazon EC2 Network Operations Amazon EC2 Network Operations",
						"orgTechPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgTechEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgTechRef": "https://rdap.arin.net/registry/entity/ANO24-ARIN https://rdap.arin.net/registry/entity/ANO24-ARIN",
						"orgRoutingHandle": "IPROU3-ARIN",
						"orgRoutingName": "IP Routing",
						"orgRoutingPhone": "+1-206-266-4064",
						"orgRoutingEmail": "aws-routing-poc@amazon.com",
						"orgRoutingRef": "https://rdap.arin.net/registry/entity/IPROU3-ARIN",
						"orgNocHandle": "AANO1-ARIN AANO1-ARIN",
						"orgNocName": "Amazon AWS Network Operations Amazon AWS Network Operations",
						"orgNocPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgNocEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgNocRef": "https://rdap.arin.net/registry/entity/AANO1-ARIN https://rdap.arin.net/registry/entity/AANO1-ARIN",
						"orgAbuseHandle": "AEA8-ARIN AEA8-ARIN",
						"orgAbuseName": "Amazon EC2 Abuse Amazon EC2 Abuse",
						"orgAbusePhone": "+1-206-266-4064 +1-206-266-4064",
						"orgAbuseEmail": "abuse@amazonaws.com abuse@amazonaws.com",
						"orgAbuseRef": "https://rdap.arin.net/registry/entity/AEA8-ARIN https://rdap.arin.net/registry/entity/AEA8-ARIN",
						"originAs": "AS16509"
					},
					{
						"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
						"netRange": "52.0.0.0 - 52.31.255.255 52.16.0.0 - 52.19.255.255",
						"cidr": "52.0.0.0/11 52.16.0.0/14",
						"netName": "AT-88-Z AMAZON-DUB",
						"netHandle": "NET-52-0-0-0-1 NET-52-16-0-0-1",
						"parent": "NET52 (NET-52-0-0-0-0) AT-88-Z (NET-52-0-0-0-1)",
						"netType": "Direct Allocation Reallocated",
						"organization": "Amazon Technologies Inc. (AT-88-Z) Amazon Data Services Ireland Limited (ADSIL-1)",
						"regDate": "1991-12-19 2011-12-08 2016-09-28 2014-07-18",
						"updated": "2015-03-20 2019-07-25 2016-09-28 2014-07-18",
						"ref": "https://rdap.arin.net/registry/ip/52.0.0.0 https://rdap.arin.net/registry/entity/AT-88-Z https://rdap.arin.net/registry/ip/52.16.0.0 https://rdap.arin.net/registry/entity/ADSIL-1",
						"orgName": "Amazon Technologies Inc. Amazon Data Services Ireland Limited",
						"orgId": "AT-88-Z ADSIL-1",
						"address": "410 Terry Ave N. Unit 4033, Citywest Avenue Citywest Business Park",
						"city": "Seattle Dublin",
						"stateProv": "WA D24",
						"postalCode": "98109",
						"country": "US IE",
						"comment": "All abuse reports MUST include: * src IP * dest IP (your IP) * dest port * Accurate date/timestamp and timezone of activity * Intensity/frequency (short log extracts) * Your contact details (phone and email) Without these we will be unable to identify the correct owner of the IP address at that point in time.",
						"orgTechHandle": "ANO24-ARIN ANO24-ARIN",
						"orgTechName": "Amazon EC2 Network Operations Amazon EC2 Network Operations",
						"orgTechPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgTechEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgTechRef": "https://rdap.arin.net/registry/entity/ANO24-ARIN https://rdap.arin.net/registry/entity/ANO24-ARIN",
						"orgRoutingHandle": "IPROU3-ARIN",
						"orgRoutingName": "IP Routing",
						"orgRoutingPhone": "+1-206-266-4064",
						"orgRoutingEmail": "aws-routing-poc@amazon.com",
						"orgRoutingRef": "https://rdap.arin.net/registry/entity/IPROU3-ARIN",
						"orgNocHandle": "AANO1-ARIN AANO1-ARIN",
						"orgNocName": "Amazon AWS Network Operations Amazon AWS Network Operations",
						"orgNocPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgNocEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgNocRef": "https://rdap.arin.net/registry/entity/AANO1-ARIN https://rdap.arin.net/registry/entity/AANO1-ARIN",
						"orgAbuseHandle": "AEA8-ARIN AEA8-ARIN",
						"orgAbuseName": "Amazon EC2 Abuse Amazon EC2 Abuse",
						"orgAbusePhone": "+1-206-266-4064 +1-206-266-4064",
						"orgAbuseEmail": "abuse@amazonaws.com abuse@amazonaws.com",
						"orgAbuseRef": "https://rdap.arin.net/registry/entity/AEA8-ARIN https://rdap.arin.net/registry/entity/AEA8-ARIN",
						"originAs": "AS16509"
					},
					{
						"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
						"netRange": "34.248.0.0 - 34.255.255.255 34.192.0.0 - 34.255.255.255",
						"cidr": "34.248.0.0/13 34.192.0.0/10",
						"netName": "AMAZON-DUB AT-88-Z",
						"netHandle": "NET-34-248-0-0-1 NET-34-192-0-0-1",
						"parent": "AT-88-Z (NET-34-192-0-0-1) NET34 (NET-34-0-0-0-0)",
						"netType": "Reallocated Direct Allocation",
						"originAs": "AS16509",
						"organization": "Amazon Data Services Ireland Limited (ADSIL-1) Amazon Technologies Inc. (AT-88-Z)",
						"regDate": "2016-11-30 2014-07-18 2016-09-12 2011-12-08",
						"updated": "2016-11-30 2014-07-18 2016-09-12 2019-07-25",
						"ref": "https://rdap.arin.net/registry/ip/34.248.0.0 https://rdap.arin.net/registry/entity/ADSIL-1 https://rdap.arin.net/registry/ip/34.192.0.0 https://rdap.arin.net/registry/entity/AT-88-Z",
						"orgName": "Amazon Data Services Ireland Limited Amazon Technologies Inc.",
						"orgId": "ADSIL-1 AT-88-Z",
						"address": "Unit 4033, Citywest Avenue Citywest Business Park 410 Terry Ave N.",
						"city": "Dublin Seattle",
						"stateProv": "D24 WA",
						"country": "IE US",
						"orgTechHandle": "ANO24-ARIN ANO24-ARIN",
						"orgTechName": "Amazon EC2 Network Operations Amazon EC2 Network Operations",
						"orgTechPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgTechEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgTechRef": "https://rdap.arin.net/registry/entity/ANO24-ARIN https://rdap.arin.net/registry/entity/ANO24-ARIN",
						"orgAbuseHandle": "AEA8-ARIN AEA8-ARIN",
						"orgAbuseName": "Amazon EC2 Abuse Amazon EC2 Abuse",
						"orgAbusePhone": "+1-206-266-4064 +1-206-266-4064",
						"orgAbuseEmail": "abuse@amazonaws.com abuse@amazonaws.com",
						"orgAbuseRef": "https://rdap.arin.net/registry/entity/AEA8-ARIN https://rdap.arin.net/registry/entity/AEA8-ARIN",
						"orgNocHandle": "AANO1-ARIN AANO1-ARIN",
						"orgNocName": "Amazon AWS Network Operations Amazon AWS Network Operations",
						"orgNocPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgNocEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgNocRef": "https://rdap.arin.net/registry/entity/AANO1-ARIN https://rdap.arin.net/registry/entity/AANO1-ARIN",
						"postalCode": "98109",
						"comment": "All abuse reports MUST include: * src IP * dest IP (your IP) * dest port * Accurate date/timestamp and timezone of activity * Intensity/frequency (short log extracts) * Your contact details (phone and email) Without these we will be unable to identify the correct owner of the IP address at that point in time.",
						"orgRoutingHandle": "IPROU3-ARIN",
						"orgRoutingName": "IP Routing",
						"orgRoutingPhone": "+1-206-266-4064",
						"orgRoutingEmail": "aws-routing-poc@amazon.com",
						"orgRoutingRef": "https://rdap.arin.net/registry/entity/IPROU3-ARIN"
					},
					{
						"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
						"netRange": "52.48.0.0 - 52.51.255.255 52.32.0.0 - 52.63.255.255",
						"cidr": "52.48.0.0/14 52.32.0.0/11",
						"netName": "AMAZON-DUB AT-88-Z",
						"netHandle": "NET-52-48-0-0-1 NET-52-32-0-0-1",
						"parent": "AT-88-Z (NET-52-32-0-0-1) NET52 (NET-52-0-0-0-0)",
						"netType": "Reallocated Direct Allocation",
						"originAs": "AS16509",
						"organization": "Amazon Data Services Ireland Limited (ADSIL-1) Amazon Technologies Inc. (AT-88-Z)",
						"regDate": "2015-10-21 2014-07-18 2015-09-02 2011-12-08",
						"updated": "2015-10-21 2014-07-18 2015-09-02 2019-07-25",
						"ref": "https://rdap.arin.net/registry/ip/52.48.0.0 https://rdap.arin.net/registry/entity/ADSIL-1 https://rdap.arin.net/registry/ip/52.32.0.0 https://rdap.arin.net/registry/entity/AT-88-Z",
						"orgName": "Amazon Data Services Ireland Limited Amazon Technologies Inc.",
						"orgId": "ADSIL-1 AT-88-Z",
						"address": "Unit 4033, Citywest Avenue Citywest Business Park 410 Terry Ave N.",
						"city": "Dublin Seattle",
						"stateProv": "D24 WA",
						"country": "IE US",
						"orgAbuseHandle": "AEA8-ARIN AEA8-ARIN",
						"orgAbuseName": "Amazon EC2 Abuse Amazon EC2 Abuse",
						"orgAbusePhone": "+1-206-266-4064 +1-206-266-4064",
						"orgAbuseEmail": "abuse@amazonaws.com abuse@amazonaws.com",
						"orgAbuseRef": "https://rdap.arin.net/registry/entity/AEA8-ARIN https://rdap.arin.net/registry/entity/AEA8-ARIN",
						"orgNocHandle": "AANO1-ARIN AANO1-ARIN",
						"orgNocName": "Amazon AWS Network Operations Amazon AWS Network Operations",
						"orgNocPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgNocEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgNocRef": "https://rdap.arin.net/registry/entity/AANO1-ARIN https://rdap.arin.net/registry/entity/AANO1-ARIN",
						"orgTechHandle": "ANO24-ARIN ANO24-ARIN",
						"orgTechName": "Amazon EC2 Network Operations Amazon EC2 Network Operations",
						"orgTechPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgTechEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgTechRef": "https://rdap.arin.net/registry/entity/ANO24-ARIN https://rdap.arin.net/registry/entity/ANO24-ARIN",
						"postalCode": "98109",
						"comment": "All abuse reports MUST include: * src IP * dest IP (your IP) * dest port * Accurate date/timestamp and timezone of activity * Intensity/frequency (short log extracts) * Your contact details (phone and email) Without these we will be unable to identify the correct owner of the IP address at that point in time.",
						"orgRoutingHandle": "IPROU3-ARIN",
						"orgRoutingName": "IP Routing",
						"orgRoutingPhone": "+1-206-266-4064",
						"orgRoutingEmail": "aws-routing-poc@amazon.com",
						"orgRoutingRef": "https://rdap.arin.net/registry/entity/IPROU3-ARIN"
					},
					{
						"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
						"netRange": "52.208.0.0 - 52.215.255.255 52.192.0.0 - 52.223.255.255",
						"cidr": "52.208.0.0/13 52.192.0.0/11",
						"netName": "AMAZON-DUB AT-88-Z",
						"netHandle": "NET-52-208-0-0-1 NET-52-192-0-0-1",
						"parent": "AT-88-Z (NET-52-192-0-0-1) NET52 (NET-52-0-0-0-0)",
						"netType": "Reallocated Direct Allocation",
						"originAs": "AS16509",
						"organization": "Amazon Data Services Ireland Limited (ADSIL-1) Amazon Technologies Inc. (AT-88-Z)",
						"regDate": "2015-12-14 2014-07-18 2015-09-02 2011-12-08",
						"updated": "2015-12-14 2014-07-18 2015-09-02 2019-07-25",
						"ref": "https://rdap.arin.net/registry/ip/52.208.0.0 https://rdap.arin.net/registry/entity/ADSIL-1 https://rdap.arin.net/registry/ip/52.192.0.0 https://rdap.arin.net/registry/entity/AT-88-Z",
						"orgName": "Amazon Data Services Ireland Limited Amazon Technologies Inc.",
						"orgId": "ADSIL-1 AT-88-Z",
						"address": "Unit 4033, Citywest Avenue Citywest Business Park 410 Terry Ave N.",
						"city": "Dublin Seattle",
						"stateProv": "D24 WA",
						"country": "IE US",
						"orgAbuseHandle": "AEA8-ARIN AEA8-ARIN",
						"orgAbuseName": "Amazon EC2 Abuse Amazon EC2 Abuse",
						"orgAbusePhone": "+1-206-266-4064 +1-206-266-4064",
						"orgAbuseEmail": "abuse@amazonaws.com abuse@amazonaws.com",
						"orgAbuseRef": "https://rdap.arin.net/registry/entity/AEA8-ARIN https://rdap.arin.net/registry/entity/AEA8-ARIN",
						"orgTechHandle": "ANO24-ARIN ANO24-ARIN",
						"orgTechName": "Amazon EC2 Network Operations Amazon EC2 Network Operations",
						"orgTechPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgTechEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgTechRef": "https://rdap.arin.net/registry/entity/ANO24-ARIN https://rdap.arin.net/registry/entity/ANO24-ARIN",
						"orgNocHandle": "AANO1-ARIN AANO1-ARIN",
						"orgNocName": "Amazon AWS Network Operations Amazon AWS Network Operations",
						"orgNocPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgNocEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgNocRef": "https://rdap.arin.net/registry/entity/AANO1-ARIN https://rdap.arin.net/registry/entity/AANO1-ARIN",
						"postalCode": "98109",
						"comment": "All abuse reports MUST include: * src IP * dest IP (your IP) * dest port * Accurate date/timestamp and timezone of activity * Intensity/frequency (short log extracts) * Your contact details (phone and email) Without these we will be unable to identify the correct owner of the IP address at that point in time.",
						"orgRoutingHandle": "IPROU3-ARIN",
						"orgRoutingName": "IP Routing",
						"orgRoutingPhone": "+1-206-266-4064",
						"orgRoutingEmail": "aws-routing-poc@amazon.com",
						"orgRoutingRef": "https://rdap.arin.net/registry/entity/IPROU3-ARIN"
					},
					{
						"availableAt": "https://www.arin.net/resources/registry/whois/tou/ https://www.arin.net/resources/registry/whois/tou/",
						"netRange": "52.208.0.0 - 52.215.255.255 52.192.0.0 - 52.223.255.255",
						"cidr": "52.208.0.0/13 52.192.0.0/11",
						"netName": "AMAZON-DUB AT-88-Z",
						"netHandle": "NET-52-208-0-0-1 NET-52-192-0-0-1",
						"parent": "AT-88-Z (NET-52-192-0-0-1) NET52 (NET-52-0-0-0-0)",
						"netType": "Reallocated Direct Allocation",
						"originAs": "AS16509",
						"organization": "Amazon Data Services Ireland Limited (ADSIL-1) Amazon Technologies Inc. (AT-88-Z)",
						"regDate": "2015-12-14 2014-07-18 2015-09-02 2011-12-08",
						"updated": "2015-12-14 2014-07-18 2015-09-02 2019-07-25",
						"ref": "https://rdap.arin.net/registry/ip/52.208.0.0 https://rdap.arin.net/registry/entity/ADSIL-1 https://rdap.arin.net/registry/ip/52.192.0.0 https://rdap.arin.net/registry/entity/AT-88-Z",
						"orgName": "Amazon Data Services Ireland Limited Amazon Technologies Inc.",
						"orgId": "ADSIL-1 AT-88-Z",
						"address": "Unit 4033, Citywest Avenue Citywest Business Park 410 Terry Ave N.",
						"city": "Dublin Seattle",
						"stateProv": "D24 WA",
						"country": "IE US",
						"orgAbuseHandle": "AEA8-ARIN AEA8-ARIN",
						"orgAbuseName": "Amazon EC2 Abuse Amazon EC2 Abuse",
						"orgAbusePhone": "+1-206-266-4064 +1-206-266-4064",
						"orgAbuseEmail": "abuse@amazonaws.com abuse@amazonaws.com",
						"orgAbuseRef": "https://rdap.arin.net/registry/entity/AEA8-ARIN https://rdap.arin.net/registry/entity/AEA8-ARIN",
						"orgNocHandle": "AANO1-ARIN AANO1-ARIN",
						"orgNocName": "Amazon AWS Network Operations Amazon AWS Network Operations",
						"orgNocPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgNocEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgNocRef": "https://rdap.arin.net/registry/entity/AANO1-ARIN https://rdap.arin.net/registry/entity/AANO1-ARIN",
						"orgTechHandle": "ANO24-ARIN ANO24-ARIN",
						"orgTechName": "Amazon EC2 Network Operations Amazon EC2 Network Operations",
						"orgTechPhone": "+1-206-266-4064 +1-206-266-4064",
						"orgTechEmail": "amzn-noc-contact@amazon.com amzn-noc-contact@amazon.com",
						"orgTechRef": "https://rdap.arin.net/registry/entity/ANO24-ARIN https://rdap.arin.net/registry/entity/ANO24-ARIN",
						"postalCode": "98109",
						"comment": "All abuse reports MUST include: * src IP * dest IP (your IP) * dest port * Accurate date/timestamp and timezone of activity * Intensity/frequency (short log extracts) * Your contact details (phone and email) Without these we will be unable to identify the correct owner of the IP address at that point in time.",
						"orgRoutingHandle": "IPROU3-ARIN",
						"orgRoutingName": "IP Routing",
						"orgRoutingPhone": "+1-206-266-4064",
						"orgRoutingEmail": "aws-routing-poc@amazon.com",
						"orgRoutingRef": "https://rdap.arin.net/registry/entity/IPROU3-ARIN"
					},
					{
						"note": "this output has been filtered.",
						"inetnum": "77.94.232.0 - 77.94.235.255",
						"netname": "PRD-INFRA",
						"descr": "PRD INFRA EVRY Regions",
						"remarks": "INFRA-AW ........................................ . Operational issues: networks@prd.no  . . Abuse and Spam    : abuse@prd.no     . ........................................",
						"country": "NO",
						"adminC": "PRDN-RIPE GK1424-RIPE",
						"techC": "PRDN-RIPE GK1424-RIPE RT534-RIPE",
						"status": "ASSIGNED PA",
						"mntBy": "MNT-PRD MNT-PRD AS13243-MNT",
						"created": "2008-02-29T11:42:44Z 2007-06-20T12:49:11Z 2013-06-12T06:41:13Z",
						"lastModified": "2008-02-29T11:42:44Z 2007-10-23T09:58:34Z 2013-06-12T06:41:13Z",
						"source": "RIPE RIPE # Filtered RIPE",
						"role": "Pragma Drift AS - Networks",
						"address": "Kjoita 42 NO-4630 Kristiansand S Norway",
						"phone": "+47 38 70 93 16",
						"faxNo": "+47 38 05 84 70",
						"nicHdl": "PRDN-RIPE",
						"route": "77.94.232.0/21",
						"origin": "AS13243"
					},
					{
						"note": "this output has been filtered.",
						"inetnum": "185.109.196.0 - 185.109.196.255",
						"netname": "DE-EVENTIM-NET196",
						"descr": "CTS Eventim NET196 DE-EVENTIM",
						"country": "DE",
						"adminC": "AR32918-RIPE TR5644-RIPE TS39113-RIPE LOG14-RIPE LJ2777-RIPE",
						"techC": "AR32918-RIPE TR5644-RIPE TS39113-RIPE LOG14-RIPE LJ2777-RIPE",
						"status": "ASSIGNED PA",
						"mntBy": "de-eventim-1-mnt de-eventim-1-mnt de-eventim-1-mnt",
						"created": "2015-09-01T10:11:02Z 2015-07-16T07:21:36Z 2015-09-01T10:36:46Z",
						"lastModified": "2018-09-17T12:59:54Z 2019-05-02T21:19:36Z 2015-09-01T10:36:46Z",
						"source": "RIPE # Filtered RIPE # Filtered RIPE",
						"role": "Team Network",
						"org": "ORG-CESG1-RIPE",
						"address": "Contrescarpe 75A D-28195 Bremen GERMANY",
						"phone": "+49 421 3666 6999",
						"nicHdl": "AR32918-RIPE",
						"abuseMailbox": "nas@eventim.de",
						"route": "185.109.196.0/24",
						"origin": "AS204253"
					}
				]
			},
			{
				"original": [
					"MS=ms13518666"
				]
			},
			{
				"original": [
					"xDhOdtwBdIMPyEOc/+AO32l/q0D7uv/N6Du4aRJEiGM="
				]
			}
		]
	}
]
 */