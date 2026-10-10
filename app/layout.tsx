import type { Metadata } from 'next'
import Header from '@/components/header'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import { ThemeContextProvider } from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

const BASE_URL = 'https://portfolio.thestrikerhub.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Parmanand Prajapati | Full Stack Developer (Backend Focused)',
    template: '%s | Parmanand Prajapati',
  },

  description:
    'Full Stack Developer with 4+ years building scalable Python/Django backends, multi-tenant SaaS platforms, and AI-powered tools across healthcare, e-commerce, and insurance. Open to remote roles.',

  keywords: [
    'Parmanand Prajapati',
    'Full Stack Developer',
    'Backend Developer',
    'Python Developer',
    'Django Developer',
    'Django REST Framework',
    'PostgreSQL',
    'Redis',
    'AWS',
    'Docker',
    'LangChain AI',
    'Healthcare SaaS',
    'Insurance Platform',
    'E-commerce Backend',
    'Remote Developer India',
    'Lucknow Developer',
    'Node.js Developer',
    'React Developer',
    'API Developer',
  ],

  authors: [{ name: 'Parmanand Prajapati', url: BASE_URL }],
  creator: 'Parmanand Prajapati',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Parmanand Prajapati',
    title: 'Parmanand Prajapati | Full Stack Developer',
    description:
      'Full Stack Developer with 4+ years building scalable Python/Django backends, SaaS platforms, and AI tools across healthcare, e-commerce, and insurance.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Parmanand Prajapati — Full Stack Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Parmanand Prajapati | Full Stack Developer',
    description:
      'Full Stack Developer with 4+ years shipping Django APIs, SaaS platforms, and AI tooling in healthcare, e-commerce, and insurance.',
    images: [`${BASE_URL}/og-image.png`],
    creator: '@parmanand007',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  verification: {
    // Add Google Search Console verification token here when you have it
    // google: 'your-verification-token',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Parmanand Prajapati',
  url: BASE_URL,
  email: 'parmanandprajapati0009@gmail.com',
  jobTitle: 'Full Stack Developer',
  description:
    'Full Stack Developer with 4+ years building scalable Python/Django backends, SaaS platforms, and AI tools across healthcare, e-commerce, and insurance.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/parmanand-prajapati-68499873/',
    'https://github.com/parmanand007',
  ],
  knowsAbout: [
    'Python',
    'Django',
    'Django REST Framework',
    'PostgreSQL',
    'Redis',
    'AWS',
    'Docker',
    'React.js',
    'Node.js',
    'LangChain',
    'GraphQL',
    'Celery',
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'IET Lucknow',
      description: 'Master of Computer Applications',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'BBDU Lucknow',
      description: 'Bachelor of Computer Applications',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){const t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}})()`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans relative overflow-x-hidden bg-[#f8f9ff] pt-28 text-gray-950 sm:pt-36 dark:bg-[#030614] dark:text-gray-50`}
      >
        {/* Animated ambient blobs — inspired by Split Striker's marketing bg */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="animate-float-slow absolute right-[-10rem] top-[-14rem] h-[48rem] w-[48rem] rounded-full bg-indigo-400/18 blur-[12rem] dark:bg-indigo-700/30" />
          <div className="animate-float-med absolute left-[-14rem] top-[24rem] h-[42rem] w-[42rem] rounded-full bg-cyan-400/12 blur-[12rem] dark:bg-cyan-600/18" />
          <div className="animate-float-fast absolute bottom-[-10rem] right-[8%] h-[34rem] w-[34rem] rounded-full bg-violet-400/10 blur-[10rem] dark:bg-violet-700/16" />
          <div className="animate-float-slow absolute left-[35%] top-[55%] h-[26rem] w-[26rem] rounded-full bg-emerald-400/8 blur-[10rem] dark:bg-emerald-700/10" />
          <div className="bg-dot-pattern absolute inset-0 opacity-40 dark:opacity-20" />
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
