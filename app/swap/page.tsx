'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export default function SwapPage() {
  const { address, isConnected } = useAccount()

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Swap Token</h1>
      <ConnectButton />
      {isConnected && (
        <p className="mt-4 text-gray-600">Đã kết nối: {address}</p>
      )}
    </div>
  )
}

