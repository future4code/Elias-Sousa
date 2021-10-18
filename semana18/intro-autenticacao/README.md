
Exercício 1

a) Minha opinião a respeito de usar strings no id é positiva , visto que a gama é maior , contendo tanto letras com números a segurança é maior e a chance de se repetir é menor

b) import { v4 } from "uuid"

export class IdGenerator {
  // constructor(){}
  generateId = (): string => v4()
}


Exercício 2

a) a codigo faz conexão com o banco de dados onde nossa aplicação deve se conectar(via knex)
depois disso cria-se uma constante que recebe que recebe os parâmetros informados pelo  usuário e insere na tabela especifica no banco de dados

b)

CREATE TABLE Usuario(
id int,
nome varchar(50) NOT NULL,
email varchar(50) NOT NULL,
password varchar(30) NOT NULL,
PRIMARY KEY (id)
);


c)

import knex from "knex";


  const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  });

	const userTableName = "User";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};

    3.
    a) a linha desse código diz que estamos tipando a token recebida como uma string , é necessário colocarmos ali para string para unificar todos os 3 tipos de dados, para poder unificar tudo como sendo uma token cuja tipagem é string , o que facilita e faz sentido.



    b)

   
    import { JwtPayload, sign, verify } from "jsonwebtoken"
    import { authenticationData } from "../types"
    dotenv.config()
    export class Authenticator {
    public generateToken = (
        payload: authenticationData
    ): string => {
        const token = sign(
        payload,
        process.env.JWT_KEY,
        { expiresIn: "10h" }
        )
        return token
    }

    tipagem:
    export interface authenticationData{
    id: string
    }

    4
    a)

       export default async function createUser(
        req: Request,
        res: Response
        ): Promise<void> {
        try {

    const { email, password } = req.body

    if (!name || !nickname || !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'name', 'nickname', 'password' e 'email'")
    }

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }


    const id: string = new IdGenerator().generateId()

    const newUser: user = { id, name, nickname, email, password }

    await connection('usuario')
      .insert(newUser)

    const token = new Authenticator().generateToken({ id })

    res.status(201).send({ newUser, token })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.sqlMessage || error.message })
    }
  }
}


5.

a)

import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export const login = async (
  req: Request,
  res: Response
) => {
  try {

    // buscar usuário por email
    const { email, password } = req.body

    const [user] = await connection("to_do_list_users")
      .where({ email })

    // conferir se o usuário existe e a senha está correta

    if (!user || user.password !== password) {
      res.statusCode = 401 // "Unauthorized"
      throw new Error("Credenciais inválidas")
    }

    // gerar o token
    const token = new Authenticator().generateToken({
      id: user.id
    })

    // enviar a resposta
    res.send({ token })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.message })
    }
  }
}


6.

a)b)

app.post("/user/login", async (req: Request, res: Response) =>  async function Login(
        req: Request,
        res: Response
        ): Promise<void> {
        try {

    const { email, password } = req.body

    if ( !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos em branco'")
    }

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const id: string = new IdGenerator().generateId()

    const newUser: user = { id, name, nickname, email, password }

    res.status(201).send({  token })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.sqlMessage || error.message })
    }
  }
}



7
a)
é necessário colocar o any para que a propriedade seja reconhecida no typescript

b)
public getTokenData = (
    token: string
  ): authenticationData | null => {
    try {

      const tokenData = verify(
        token,
        process.env.JWT_KEY
      ) as JwtPayload

      return {
        id: tokenData.id
      }

    } catch (error) {
      console.log(error)
      return null
    }
  }
}



8.

    public async getUserById(id: string): Promise<any> {
        const result = await this.connection
        .select("*")
        .from(userTableName)
        .where({ id });

        return result[0];
    }
    }

    app.get("/user/profile", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

    
        const authenticationData = getData(token);

        const user = await getUserById(authenticationData.id);

        res.status(200).send({
        id: user.id,
        email: user.email,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });