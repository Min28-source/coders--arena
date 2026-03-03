"use client"

import { useState } from "react"
import { Card, CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const handleCreate = () => {
    const trimmed = name.trim()

    if (trimmed.length < 3) {
      setError("Name must be at least 3 characters long.")
      return
    }

    setError("")
    console.log("Creating contest for:", trimmed)
    // trigger room creation logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">

      {/* Heading */}
      <div className="absolute top-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Code Arena
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Compete. Code. Conquer.
        </p>
      </div>

      {/* Card */}
      <Card className="w-full max-w-md bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl">
       
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
                className={`bg-gray-900 text-white border ${error ? "border-red-500 focus-visible:ring-red-500" : "border-gray-600"
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
              Create Contest
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}