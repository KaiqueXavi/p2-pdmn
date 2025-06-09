require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
const openWeatherClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})

app.get('/search', async (req, res) => {
    const city = req.query.city

    if (!city) {
        return res.status(400).json({ error: 'Parâmetro ?city= é obrigatório' })
    }
    
    try {
        const result = await openWeatherClient.get('weather', {
            params: {
                q: city,
                appid: process.env.API_KEY,
                units: 'metric',
                lang: 'pt_br'
            }
        })
        res.json(result.data)
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Erro ao buscar dados do clima' })
    }
})

const port = 3000

app.listen(port, () => console.log (`BACK END OK! PORTA ${port}.`))
