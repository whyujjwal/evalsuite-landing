"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Subscribing...")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("Thank you for subscribing!")
        setEmail("")
      } else {
        setStatus("An error occurred. Please try again.")
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.")
    }
  }

  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">Stay Updated</h2>
        <p className="text-xl mb-8 text-secondary-foreground">
          Subscribe to our newsletter for the latest AI evaluation insights and updates.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-primary"
            required
          />
          <Button type="submit" variant="accent">
            Subscribe
          </Button>
        </form>
        {status && <p className="mt-4 text-secondary-foreground">{status}</p>}
      </div>
    </section>
  )
}

