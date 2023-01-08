import express from "express"
import cors from "cors"

const app = express()
const PORT = 5000
app.use(express.json())
app.use(cors())

const users = []
const tweets = []
let userAvatar = {
    avatar: ""
}

{/*app.get('/', (req, res) => {
    res.send('Hello World')
})*/}

app.post('/sign-up', (req, res) => {
    const userData = req.body
    
    users.push(userData)
    userAvatar.avatar = userData.avatar
    res.status(200).send("OK")

})

app.get('/sign-up', (req, res) => {
    res.send(users)
})

app.post('/tweets', (req, res) => {
    const tweet = req.body

    const checkingUser = users.find(item => item.username === req.body.username)


    if (!checkingUser) {
        res.send("UNAUTHORIZED")
    }

    tweets.push({...userAvatar, ...tweet})
    res.status(200).send("OK")
})

app.get('/tweets', (req, res) => {
    res.send(tweets)
})

app.listen(PORT, () => console.log(`Este servidor roda na porta: ${PORT}`))