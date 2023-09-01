import { NextResponse } from 'next/server'
import {prisma} from '../../../lib/prisma'

export const GET = async (reqeust: Request) => {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}