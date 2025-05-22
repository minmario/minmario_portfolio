"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

declare global {
  interface Window {
    jsPDF: any
    html2canvas: any
  }
}

export function PDFDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false)

  // 라이브러리 로드 상태 확인
  useEffect(() => {
    const checkLibraries = () => {
      if (window.jsPDF && window.html2canvas) {
        setIsLibraryLoaded(true)
      } else {
        // 100ms마다 확인, 최대 10초 대기
        const timeout = setTimeout(checkLibraries, 100)
        return () => clearTimeout(timeout)
      }
    }

    checkLibraries()
  }, [])

  const generatePDF = async () => {
    try {
      setIsGenerating(true)

      // 라이브러리가 로드되었는지 확인
      if (!window.jsPDF || !window.html2canvas) {
        throw new Error("PDF 라이브러리가 로드되지 않았습니다. 페이지를 새로고침하고 다시 시도해주세요.")
      }

      // 올바른 방식으로 jsPDF 초기화
      const pdf = new window.jsPDF("p", "mm", "a4")
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      // html2canvas 직접 사용
      const html2canvas = window.html2canvas

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
      alert("PDF 생성 중 오류가 발생했습니다: " + (error instanceof Error ? error.message : String(error)))
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating || !isLibraryLoaded}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8"
    >
      {isGenerating ? "생성 중..." : !isLibraryLoaded ? "라이브러리 로딩 중..." : "이력서 다운로드"}
      <FileDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
