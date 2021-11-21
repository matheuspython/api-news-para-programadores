import { Request, Response } from 'express'
import { RegistrarUser } from '../../services/users/RegistrarUsers'

class CadastroUserController {
  async handle(request:Request, response:Response){
  const { name, email } = request.body;

  const service = new RegistrarUser()  
  const result = await service.execute(email, name);

  return response.json(result)
}
}

export { CadastroUserController }