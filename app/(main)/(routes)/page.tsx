import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
   <h1>
    <UserButton afterSignOutUrl='/' />
   </h1>
  )
}
