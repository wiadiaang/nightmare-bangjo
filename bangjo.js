const Nightmare = require('nightmare')
// const nightmare = Nightmare({ show: true })

const axios = require('axios')
const cheerio = require('cheerio')
const { HttpsProxyAgent } = require('https-proxy-agent')


const url= 'https://ip.smartproxy.com/json';
const proxyAgent = new HttpsProxyAgent(
  'http://spotgo7sov:a6rgIT0iohwK0qgrD6@id.smartproxy.com:10000');

axios
  .get(url, {
    httpsAgent: proxyAgent,
  })
  .then(response => {
    console.log(response.data)
  })


// nightmare
//   .goto('https://duckduckgo.com')
//   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#r1-0 a.result__a')
// .goto('https://pollingkita.com/polling364378-polling-menurut-anda-siapakah-caleg-provinsi-partai-nasdem-dapil-10-jawa-barat-yang-akan-anda-pilih#google_vignette')
// .click('#btn3')
// .wait('#main')

// .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
// .end()
// .then(console.log)
// .catch(error => {
//     console.error('Search failed:', error)
//   })