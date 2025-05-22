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

      // 메인 컨텐츠 영역 선택 (헤더와 푸터 제외)
      const mainContent = document.querySelector("main")
      if (!mainContent) {
        throw new Error("메인 컨텐츠를 찾을 수 없습니다.")
      }

      // 모든 섹션 선택 (헤더와 푸터 제외)
      const sections = [
        document.getElementById("about"),
        document.getElementById("education"),
        document.getElementById("certifications"),
        document.getElementById("skills"),
        document.getElementById("external-links"),
        document.getElementById("projects"),
        document.getElementById("contact"),
      ]

      // 각 섹션을 캡처하여 PDF에 추가
      let currentPosition = 10

      for (const section of sections) {
        if (!section) continue

        console.log(`캡처 중: ${section.id}`)

        // 섹션 캡처 전 스크롤
        section.scrollIntoView({ behavior: "auto", block: "start" })
        // 렌더링이 완료될 때까지 잠시 대기
        await new Promise((resolve) => setTimeout(resolve, 100))

        const canvas = await html2canvas(section, {
          scale: 1.5, // 고해상도로 렌더링
          useCORS: true,
          logging: false,
          windowWidth: 1200, // 일관된 너비로 렌더링
          windowHeight: section.scrollHeight,
          allowTaint: true,
          backgroundColor: "#ffffff",
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
      disabled={isGenerating}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8"
    >
      {isGenerating ? "생성 중..." : "이력서 다운로드"}
      <FileDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
