"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useSocket } from "@/contexts/socketContext"
import { useRouter, useSearchParams } from "next/navigation"

import LetterGlitch from "@/components/LetterGlitch"

export default function Home() {
  const [name, setName] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [roomId, setRoomId] = useState<string | null>(null)

  const socket = useSocket()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const roomParams = searchParams.get("roomId")
    setRoomId(roomParams)
  }, [searchParams])

  const handleCreate = () => {
    const trimmed = name.trim()

    if (trimmed.length < 3) {
      setError("Name must be at least 3 characters long.")
      return
    }

    setError("")

    if (roomId) {
      localStorage.setItem("userId", crypto.randomUUID());
      const userId = localStorage.getItem("userId")
      socket.emit("join-room", name, roomId, userId);
      socket.once("joined-room", () => {
        router.push(`/room/${roomId}`)
      })
    } else {
      localStorage.setItem("userId", crypto.randomUUID());
      const userId = localStorage.getItem("userId");
      socket.emit("create-room", name, userId);
      socket.once("room-created", (joinedRoomId) => {
        router.push(`/room/${joinedRoomId}`)
      })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

      {/* Letter Glitch Background */}
      <div className="absolute inset-0 -z-20">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Heading */}
      <div className="absolute top-16 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Code Arena
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Compete. Code. Conquer.
        </p>
      </div>

      {/* Card */}
      <Card className="z-10 w-full max-w-md bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl">
        <CardContent>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              handleCreate()
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Enter your Name
              </Label>

              <Input
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (error) setError("")
                }}
                placeholder="Enter your name"
                className={`bg-gray-900 text-white border ${error
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-gray-600"
                  }`}
              />

              {error && (
                <p className="text-sm text-red-400">
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={!name.trim()}
              className="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600"
            >
              Enter Contest
            </Button>
          </form>
        </CardContent>
      </Card>

    </div>
  )
}