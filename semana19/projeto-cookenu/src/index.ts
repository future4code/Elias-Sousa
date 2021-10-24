//rotas Aqui


import { config } from "dotenv"
import app from "./app"
import Signup from './endpoints/Signup'


config()

app.post('/signup',Signup)

app.post('/login')

app.get('/user/profile')

app.get('/user/:id')

app.post('/recipe')

app.get('/recipe/:id')



