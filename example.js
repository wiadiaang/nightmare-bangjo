/* eslint-disable no-console */

var Nightmare = require('nightmare')
// var nightmare = Nightmare({ show: true })

var nightmare = Nightmare({
  switches: {
    'proxy-server': 'gate.smartproxy.com:10000', // Endpoint
    'ignore-certificate-errors': true
  },
  show: true
})

nightmare

  .goto('https://pollingkita.com/polling364378-polling-menurut-anda-siapakah-caleg-provinsi-partai-nasdem-dapil-10-jawa-barat-yang-akan-anda-pilih#google_vignette')
   .click('#btn3')
   .wait('#main')
   .evaluate(function() {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
