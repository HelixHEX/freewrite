import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient()

const main = async () => {
  const post1 = await prisma.post.create({
    data: {
      userId: 'ss',
      content: 'Just a post',
    }
  })
}