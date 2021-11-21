import { io } from '../../app'
import prismaClient from '../../prisma'

class RegistrarUser {
  async execute(name: string, email: string) {
  const createUser = await prismaClient.users.create({
    data: {
      name,
      email
    }
  })

  const infoWS = {
    name: createUser.name,
    email: createUser.email,
  }

  io.emit("new_user", infoWS)

  return createUser
}
}


export { RegistrarUser }