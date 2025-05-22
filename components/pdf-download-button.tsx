"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

declare global {
  interface Window {
    jspdf: any
    html2canvas: any
  }
}

export function PDFDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    try {
      setIsGenerating(true)

      // CDN으로 로드된 전역 객체 사용
      const { jsPDF } = window.jspdf
      const html2canvas = window.html2canvas

      // PDF 문서 생성
      const pdf = new jsPDF("p", "mm", "a4")
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      // 캡처할 섹션들
      const sections = [
        document.getElementById("about"),
        document.getElementById("education"),
        document.getElementById("certifications"),
        document.getElementById("skills"),
        document.getElementById("external-links"),
      ]

      // 각 섹션을 캡처하여 PDF에 추가
      let currentPosition = 10

      for (const section of sections) {
        if (!section) continue

        const canvas = await html2canvas(section, {
          scale: 2, // 고해상도로 렌더링
          useCORS: true,
          logging: false,
        })

        const imgData = canvas.toDataURL("image/png")
        const imgWidth = pdfWidth - 20
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        // 새 페이지가 필요한지 확인
        if (currentPosition + imgHeight > pdfHeight) {
          pdf.addPage()
          currentPosition = 10
        }

        pdf.addImage(imgData, "PNG", 10, currentPosition, imgWidth, imgHeight)
        currentPosition += imgHeight + 10
      }

      // PDF 저장
      pdf.save("민재홍_이력서.pdf")
    } catch (error) {
      console.error("PDF 생성 중 오류 발생:", error)
      alert("PDF 생성 중 오류가 발생했습니다.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8"
    >
      {isGenerating ? "생성 중..." : "이력서 다운로드"}
      <FileDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
