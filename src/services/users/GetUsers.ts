import prismaClient from '../../prisma'


class GetUsers {
  async execute() {
    const users = await prismaClient.users.findMany({
    
    });


    
    return users
  }
}

export { GetUsers }