//rotas Aqui


import { config } from "dotenv"
import app from "./app"


config()

app.post('/signup')

app.post('/login')

app.get('/user/profile')

app.get('/user/:id')

app.post('/recipe')

app.get('/recipe/:id')



