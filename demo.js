var Nightmare = require('nightmare')
var hasil = generateRandom(10000, 19999)
//  to get  proxy IP
var proxyNightmare = Nightmare({
  switches: {
    'proxy-server': 'id.smartproxy.com:' + hasil //... set the proxy server here ...
  },
  show: true
})

proxyNightmare
  .authentication('', '') // ... and authenticate here before `goto`
  .goto(
    'https://pollingkita.com/polling364378-polling-menurut-anda-siapakah-caleg-provinsi-partai-nasdem-dapil-10-jawa-barat-yang-akan-anda-pilih'
  )
  .click('#btn5')
  .wait(hasil)
  // .wait('#main')

  .end()
  .then(function(ip) {
    //  log the Proxy's IP
    console.log('proxy IP:', ip & hasil)
  })

const axios = require('axios')
const { HttpsProxyAgent } = require('https-proxy-agent')

const url = 'https://ip.smartproxy.com/json'
const proxyAgent = new HttpsProxyAgent(
  'http://user-spotgo7sov-sessionduration-30:a6rgIT0iohwK0qgrD6@id.smartproxy.com:' +
    hasil
)

axios
  .get(url, {
    httpsAgent: proxyAgent
  })
  .then(response => {
    console.log(response.data)
  })

//  to get  local IP
// var regularNightmare = Nightmare({ show: true })

// regularNightmare

//   .goto(
//     'https://pollingkita.com/polling364378-polling-menurut-anda-siapakah-caleg-provinsi-partai-nasdem-dapil-10-jawa-barat-yang-akan-anda-pilih'
//   )
//   .click('#btn3')
//   .wait('#main')
// //   .goto('http://www.ipchicken.com')
// //   .evaluate(function() {
// //     return document.querySelector('b').innerText.replace(/[^\d\.]/g, '');
// //   })

//   .end()
//   .then(function(ip) {
//     //  log local IP

//     console.log('local IP:', ip)
//   })

function generateRandom(min = 10000, max = 19999) {
  // find diff
  let difference = max - min

  // generate random number
  let rand = Math.random()

  // multiply with difference
  rand = Math.floor(rand * difference)

  // add with min value
  rand = rand + min

  return rand
}
