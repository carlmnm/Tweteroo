import express from "express"
import cors from "cors"

const app = express()
const PORT = 5000
app.use(express.json())
app.use(cors())

const users = []

{/*app.get('/', (req, res) => {
    res.send('Hello World')
})*/}

app.post('/sign-up', (req, res) => {
    const userData = req.body
    
    users.push(userData)
    res.status(201).send("OK")

})

app.get('/sign-up', (req, res) => {
    res.send(users)
})

app.listen(PORT, () => console.log(`Este servidor roda na porta: ${PORT}`))