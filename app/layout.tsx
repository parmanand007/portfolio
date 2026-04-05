import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import {ThemeContextProvider} from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parmanand Prajapati | Backend Developer',
  description: 'Backend developer building Python, Django, PostgreSQL, Redis, AWS and SaaS platforms with measurable product impact.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} relative overflow-x-hidden bg-[#f5f7fb] pt-28 text-gray-950
      sm:pt-36 dark:bg-[#08111f] dark:text-gray-50
      `}>
        <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute right-[-6rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-cyan-300/35 blur-[7rem] sm:h-[34rem] sm:w-[34rem] dark:bg-cyan-500/15' />
          <div className='absolute left-[-10rem] top-[12rem] h-[24rem] w-[24rem] rounded-full bg-indigo-300/30 blur-[8rem] sm:h-[38rem] sm:w-[38rem] dark:bg-indigo-500/15' />
          <div className='absolute bottom-[-10rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[8rem] sm:h-[34rem] sm:w-[34rem] dark:bg-emerald-500/10' />
          <div className='bg-grid-pattern absolute inset-0 opacity-[0.4] dark:opacity-[0.16]' />
        </div>
        <ThemeContextProvider>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
        <Toaster position='top-right'/>
        <ThemeSwitch />
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )  
}
     
