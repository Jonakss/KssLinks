import express from 'express'

const PORT:string = process.env.PORT || '3000'

const app = express()
app.use(express.json())

app.get('/', (_req, res) =>{
    res.send('Hello world')    
})

app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
})
