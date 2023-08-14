"use client"
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {NextUIProvider} from "@nextui-org/react";

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [mainnet]
const projectId = 'efc7f3f2e52f6d9fcceaaeeee2283265'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body>
      {/* <NextUIProvider> */}
      <WagmiConfig config={wagmiConfig}>
        <Navbar/>
        {children}
        <Footer/>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          
      {/* </NextUIProvider> */}
      </body>
    </html>
    </>
  )
}
