import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { user} from "../types";

export default async function Signup(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos Obrigatórios")
    }


    const [user] = await connection('User')
      .where({ email })

    if (user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    const id: string = new IdGenerator().generateId()

    const cipherPassword: string = new HashManager().generateHash(password)

    const newUser: user = {
      id,
      name,
      email,
      password: cipherPassword,
    }

    await connection('User')
      .insert(newUser)

    const token = new Authenticator().generateToken({ 
      id,
    })

    res.status(201).send({ newUser, token })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send("Inconformidade no banco")
    }
  }
}