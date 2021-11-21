import { Request, Response } from 'express'
import {CreateMessageService} from '../../services/messages/CreateMessageService'
import { SendEmail } from '../../services/sendEmail';
import { GetUsers } from '../../services/users/GetUsers'

class CreateMessageController {
  async handle(request:Request, response:Response){
    
    const { message ,urlImg ,title } = request.body;

    const service = new CreateMessageService();

    const result = await service.execute(message ,title , urlImg)
 
    const users = new GetUsers()

    const resultUser = await users.execute()
    
    resultUser.forEach(async (value) => {
        console.log(value)
        
       const func = () => {
         setTimeout(async ()=>{
           const Send = await new SendEmail().execute(value.name, message, title) 
           console.log(Send) 
         },5000)
        }
        func()
    })

    return response.json(result)
  }
}

export { CreateMessageController }