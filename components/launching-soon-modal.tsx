"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function LaunchingSoonModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Get Started</Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Launching Soon!</DialogTitle>
            <DialogDescription>
              We're excited to announce that EvalSuite is launching soon. Sign up for our newsletter to be notified when
              we go live!
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

