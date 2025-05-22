import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "민재홍 포트폴리오",
  description: "개발자 민재홍의 포트폴리오 웹사이트입니다.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>{/* head 내용은 Next.js가 자동으로 채웁니다 */}</head>
      <body className={inter.className}>
        {/* PDF 라이브러리 스크립트 */}
        <Script
          id="jspdf-script"
          src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (window.jspdf?.jsPDF) {
              window.jsPDF = window.jspdf.jsPDF
            }
          }}
        />
        <Script
          id="html2canvas-script"
          src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== "undefined" && typeof html2canvas !== "undefined") {
              window.html2canvas = html2canvas
            }
          }}
        />
        {children}
      </body>
    </html>
  )
}
