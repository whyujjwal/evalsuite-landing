import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email } = await req.json()

  // Here you would typically add the email to your mailing list service
  // For this example, we'll just simulate a successful subscription
  console.log(`Subscribing email: ${email}`)

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json({ success: true })
}

