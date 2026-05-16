import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LinkedIn Engagement Predictor — Know Before You Post',
  description: 'Predict which LinkedIn posts will go viral before publishing. AI-powered engagement scoring for content creators and B2B marketers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3c3bb9d7-a118-42f5-946c-45af2f47323c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
