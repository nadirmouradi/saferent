import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Homepage from './home'
export default function Home() {
  return (
    <div>
      <Homepage/>
    </div>
  )
}
