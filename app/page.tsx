'use client'

import { useAuth } from "@clerk/clerk-react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const { userId } = useAuth();
  const router = useRouter()

  if (!userId) {
    router.push('/login')
  }


  return (
    <div className='flex items-center justify-center h-full'>
      
    </div>
  )
}
