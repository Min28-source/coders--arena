'use client'

import Link from 'next/link'
import { Button } from '@/components/liquid-glass-button'
import AddPlayersDialog from "./AddPlayersDialog"

export default function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-20 bg-white shadow-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

          {/* Heading */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            Code Arena
          </Link>

          <AddPlayersDialog/>
          {/* Add Players Button */}
          {/* <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-5 py-2.5 text-base"
          >
            <Link href="#">
              <Plus />
              Add Players
            </Link>
          </Button> */}

        </div>
      </nav>
    </header>
  )
}