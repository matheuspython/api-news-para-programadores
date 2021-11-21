import { Request, Response } from 'express'
import { GetMessages } from '../../services/messages/GetMessagesService'

class GetMessagesController {
  async handle(request:Request, response:Response){
  const service = new GetMessages()  
  const result = await service.execute();

  return response.json(result)
}
}

export { GetMessagesController }