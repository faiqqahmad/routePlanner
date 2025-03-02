import express from 'express'
import http from 'http'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(
    cors( {
        origin:"*"
    })
)
app.use(express.json())
const port = 4000

// let addresses = ['Invalidenstr 117 Berlin']
let coords = []

//for osrm api calls
const osrmBaseUrl = 'http://localhost:3000'
const route = '/route/v1'
const driving = '/driving/'
const suffix = '?steps=true'
const exCoords = '7.436828612,43.739228054975506;7.417058944702148,43.73284046244549'

//for here api calls
const hereBaseUrl = 'https://geocode.search.hereapi.com/v1/geocode?q='
const addresses = ['Invalidenstr 117 Berlin', 'Invalidenstr 117 Berlin', 'Invalidenstr 117 Berlin']
const key = '&apiKey=QdcDZ9iT-yzZyX9V1sKRtQu7J7WQHvMIIaTbJrcA-tg'



async function addressToCoord(addy){
    let hereResponse = null
    // console.log(hereBaseUrl + addy.replace(/\s+/g, '+') + key)
    hereResponse = await axios.get(hereBaseUrl + addy.replace(/\s+/g, '+') + key)
    return hereResponse.data
}

app.post('/input', (req,res) => {
    console.log(req.body)
})


app.get('/', async (req,res) => {
    res.send("testing")

//    try {
//         const resp = await Promise.all(addresses.map(async (addy) => {
//             try {
//                 const ans = await addressToCoord(addy)
//                 return ans
//             } catch (error) {
//                 console.log('individual call issue')
//             }
//         }
//     } catch (error) {
//         console.log('all promises issue')
//     }
    // const hereResponse = await axios.get(hereBaseUrl + prepAddress(address) + key)
    // res.send(hereResponse.data)
    // const resp = await readAddresses()
    // addressToCoord()
    // .then(response => {
    //     // console.log(response.items[0].position)
    //     // res.send(response.items[0].position)
    //     return response.items[0].position
    // })
    // .then(position => {

    // })
    // .catch(error => console.log(error))

    
    // axios.get(osrmBaseUrl + route + driving + exCoords + suffix)
    // .then(response => {
    //     res.send({duration:response.data.routes[0].duration, response: hereResponse})
    // })
    // .catch(error => {
    //     console.log('something went wrong')
    //     console.error(error)
    // })
   
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


// server.on('connection', () => {
//     console.log('someone connected')
// })

// server.listen(port, () => {
//     console.log("This is an example listening application")
// })


