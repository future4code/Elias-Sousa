import { config } from "dotenv"
import app from "./app"
import {addParticipation} from './endpoints/InsertDados'
import {getParticipation} from './endpoints/getDados'

// chamada/imports dos endpoints


config()

// endpoints/rotas

app.post('/new/participation', addParticipation)

app.get('/show/participation', getParticipation)