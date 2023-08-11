"use client"
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {NextUIProvider} from "@nextui-org/react";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextUIProvider>
        <Navbar/>
        {children}
        <Footer/>
      </NextUIProvider>
      </body>
    </html>
  )
}
