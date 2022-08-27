import express from 'express'
//import { newLink } from './types'
//import * as linksService from './service/linksService'
import apiRouter from './routes/api'

const PORT:string = process.env.PORT || '3000'

const app = express()

//app.set('views', './views')
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use(express.json())

app.use('/api', apiRouter)

app.get('/', (_req, res) =>{
    //res.send(linksService.getLinks())    
    res.render('index', { name:'Jonathan' })
})

app.get('*', (_req, res) => {
    res.send(404)
})
    
app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
})