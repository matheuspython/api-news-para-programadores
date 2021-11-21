import prismaClient from '../../prisma'

class GetMessages {
  async execute() {
    const messages = await prismaClient.newMessage.findMany({
      take: 3,
      orderBy:{
        created_at:'desc'
      },
    });
    
    return messages
  }
}

export { GetMessages }