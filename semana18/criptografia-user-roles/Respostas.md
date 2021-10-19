###Exercício 1

Round ou Cost é onde configuramos o tempo de execução da criptografia
e o salt é a string aleatória gerada. o valor padrão recomendado é 12,e usei 12.

b)c)

import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager {

  public generateHash = (plainText: string): string => {
    const cost = 12
    const salt = genSaltSync(cost)
    const cipherText = hashSync(plainText, salt)

    return cipherText
  }

  public compareHash = (
    plainText: string,
    cipherText: string
  ) => {
    const result = compareSync(plainText, cipherText)

    return result
  }
}

Exercício 2

a) para realizar o teste precisamos antes migrar a senha exposta para o tipo criptografado , então devemos primeiro migrar a senha cadastrada para o tipo criptografado, para então fazer a logica do login a partir dessa criptografia

b)

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const { name, nickname, email, password, role } = req.body

    if (!name || !nickname || !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'name', 'nickname', 'password' e 'email'")
    }

    if(   !(role in USER_ROLES)   ){
      res.statusCode = 422
      throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
    }

    const [user] = await connection('to_do_list_users')
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
      nickname,
      email,
      password: cipherPassword,
      role
    }

    await connection('to_do_list_users')
      .insert(newUser)

    const token = new Authenticator().generateToken({ 
      id,
      role 
    })

    res.status(201).send({ newUser, token })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.sqlMessage || error.message })
    }
  }
}


c) const passwordIsCorrect:boolean = new HashManager().compareHash(password, user.password)

    if (!user || !passwordIsCorrect) {
      res.statusCode = 401 // "Unauthorized"
      throw new Error("Credenciais inválidas")
    }

    // gerar o token
    const token = new Authenticator().generateToken({
      id: user.id,
      role: user.role
    })


d)
Não Precisamos modificar nada, pois o endpoint usa a token guardada para saber que aquele usuário é quem diz que é , e no endpoint não há atualização que envolva a senha , logo se torna desnecessário implementar a criptografia , pois não precisamos criar, nem comparar e nem mexer com a senha.
