import { NextResponse } from 'next/server'
import {prisma} from '../../../lib/prisma'
import { clerkClient } from '@clerk/nextjs/server'

export const GET = async (reqeust: Request) => {
  const posts = await prisma.post.findMany({orderBy: {createdAt: 'desc'}})

  const postsWithUser = await Promise.all(posts.map(async (post) => {
    const user = await clerkClient.users.getUser(post.userId, )
    return {
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        profileImage: user.imageUrl
      },
      ...post
    }
  }))
  return NextResponse.json({posts: postsWithUser})
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