import { io } from '../../app'
import prismaClient from '../../prisma'


class CreateMessageService {
  async execute(message: string, title: string, urlImg: string) {
  const createMessage = await prismaClient.newMessage.create({
    data: {
      message,
      title,
      urlImg
    }
  })

  const infoWS = {
    message: createMessage.message,
    title: createMessage.title,
    urlImg: createMessage.urlImg,
    created_at: createMessage.created_at
  }

  io.emit("new_message", infoWS)

  return createMessage
}
}


export { CreateMessageService }