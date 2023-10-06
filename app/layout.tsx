import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parmanand | Personal Portfolio',
  description: 'Parmanand Prajapati is a full-stack developer with 1 year experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950
      relative  pt-28 sm:pt-36
      `}>
        <div className='bg-[#fbe2e3] absolute  top-[-6rem] right-[11rem]
        https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100h-[31.25rem] -z-10   w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        '></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem]
        h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        md:left-[33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        '></div>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  )  
}
