import { NextResponse } from 'next/server'
import {prisma} from '../../../lib/prisma'

export const GET = async (reqeust: Request) => {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

export const POST = async (request: Request) => {
  const { userId, content } = await request.json()

  await prisma.post.create({
    data: {
      userId,
      content,
    },
  })
  return NextResponse.json({message: 'success'})
}