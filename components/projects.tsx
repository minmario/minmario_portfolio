"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type ProjectType = "all" | "team" | "personal"

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  images: string[] // 'image: string' 대신 'images: string[]'으로 변경
  tags: string[]
  demoUrl: string
  githubUrl: string
  highlights: string[]
  results: string
  type: "team" | "personal"
  hideDemoButton?: boolean
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all")
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)

  const projects: Project[] = [
    {
      id: 1,
      title: "SIST Chill Hotel",
      subtitle: "호텔 예약 및 관리 시스템 백엔드 API 개발",
      description:
        "호텔 예약 및 관리 시스템의 백엔드 API를 Spring Boot 기반으로 구현한 팀 프로젝트입니다. 회원, 스태프, 관리자 등 다양한 역할 기반의 기능을 분리하고, JWT 인증 및 포인트/등급/예약 관리 등 복합 비즈니스 로직을 포함합니다.",
      images: [
        "/images/hotel-project.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202025-07-23%20224302-5rKN80Aq5XiwVZkmbbE8QJBJbhd8WN.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20224146-8lk0XO8w51r9FRs2j3X7rrfab9kseo.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20223828.png-H4Fsvw9ixVejiuDIudZQIymRU5nLjp.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20223857-wjzPjCPSmBTJdrqtNfdReX1QcoQg0D.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20223928-Sapyf42AWbCnQVifS3s9Q2sTAFH0UA.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20224001-vOjEiTxIAfXix0ZGBICBQWHHWK9G9v.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20224013-V3JMSImAo7UPiXlfnSorGFJNicxlIb.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20223945-qDxfYDeprBmzU0DTS9c3XHJhpqE2nr.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20224110-fC1do2Ut3gKM5m3b45Ucy7vm9ZK7iA.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20224050-tsMkvMNcUQ2nKmPa8kPdryxnILF1zM.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-23%20224230-9xNAVV31j8Vp7sUKlOut2OOuSfGiHa.png",
      ],
      tags: ["Spring Boot", "Spring Security", "JPA", "Gradle", "JWT", "MySQL", "Docker", "RESTful API"],
      demoUrl: "http://www.sistchillhotel.com/",
      githubUrl: "https://github.com/minmario/SIST-Chill-Hotel-Portfolio",
      highlights: [
        "관리자/직원/회원의 역할 기반 인증 및 권한 관리 구현 (JWT + Security)",
        "회원 등급 시스템 및 포인트 로직 설계 및 API 개발",
        "숙박 예약 엔티티 설계 및 CRUD 구현",
        "관리자 페이지용 API 다수 개발 (직원 계정, 상품 관리 등)",
        "Docker 기반 빌드 및 실행 환경 구성",
      ],
      results:
        "전체 REST API 30개 이상 개발 완료, JWT 인증 시스템 완성으로 사용자 구분 인증 성공, 포인트 기반 회원 등급 관리 기능 구현, 관리자 및 스태프 전용 API 완성 및 프론트 연동 검증",
      type: "team",
    },
    {
      id: 2,
      title: "Heart Disease Prediction",
      subtitle: "심장질환 예측을 위한 머신러닝 모델 비교 및 성능 분석",
      description:
        "심장병 환자 데이터를 기반으로 다양한 머신러닝 분류 모델을 적용해보고, 성능을 비교·분석한 프로젝트입니다. 총 7개의 모델(Logistic Regression, SVM, Random Forest 등)을 학습시킨 뒤 평가 지표 및 ROC 곡선을 통해 모델의 예측 성능을 시각화했습니다.",
      images: [
        "/images/heart-disease-prediction.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20023903-5AfG4AGGPB5ozyEFpDWvC0crpj8DKy.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20023735-JLEtnia71PDBCGp4RGztalA2LcpFj6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20022923-BsMIy6WNPk07AugJfKJBmF0EVj1jUR.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20022904-nmM0rwVyJVMz5N0NAQMML0utIV1Ihj.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20023752-8LF7d2S8lXqF58vxeDeHVg8HdtBhqV.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20022952-kJi5QNa85ZPgteIMA2s0Bs8fvRvwFY.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20023044-SSkqPpm5pLMCt2VOmpyiybLkHOu7FX.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20023710-olpQghT5vG9l2ibfpLQnySfRkNrxG9.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-07-27%20023844-w52RoQ98NHDGYWGQMytCMAb1l6oQ3T.png",
      ],
      tags: ["Python", "Jupyter Notebook", "scikit-learn", "XGBoost", "pandas", "matplotlib", "seaborn"],
      demoUrl: "https://colab.research.google.com/drive/1atlCZgiD6Od3M9BCbKKQj-EA2J7oIHpH",
      githubUrl: "https://github.com/minmario/ml-projects",
      highlights: [
        "분류 모델 7종 구현: Logistic Regression, Decision Tree, Random Forest, SVM, MLP, Naive Bayes, XGBoost",
        "ROC Curve 및 Confusion Matrix 시각화",
        "GridSearchCV를 통한 하이퍼파라미터 튜닝",
        "모델 성능 비교 그래프 (정확도, 정밀도, 재현율, F1-score)",
      ],
      results:
        "XGBoost와 RandomForest 모델이 전체적으로 가장 우수한 성능을 보였으며, 튜닝 후 F1-score 기준 91% 이상의 성능 확보. 모델별 ROC-AUC 시각화를 통해 민감도/특이도 균형 분석.",
      type: "team",
    },

    {
      id: 4,
      title: "포트폴리오 웹사이트",
      subtitle: "개인 포트폴리오 웹사이트",
      description:
        "Next.js와 Tailwind CSS를 사용하여 개발한 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 모던한 UI/UX를 적용했습니다.",
      images: ["/images/portfolio-website.png", "/placeholder.svg?height=600&width=800&text=Portfolio+Image+2"],
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
      highlights: ["반응형 디자인 구현", "모던한 UI/UX 적용", "다크 모드 지원", "SEO 최적화"],
      results: "효과적인 포트폴리오 웹사이트로, 프로젝트와 기술 스택을 시각적으로 표현했습니다.",
      type: "personal",
      hideDemoButton: true,
    },
    {
      id: 5,
      title: "재고 및 주문 관리 시스템",
      subtitle: "PHP와 MySQL 기반의 CRUD 웹 애플리케이션",
      description:
        "기초적인 PHP와 MySQL을 활용한 재고 및 주문 관리 시스템입니다. 원자재, 주문, 계약, 대리인 등의 정보를 폼을 통해 입력하고 조회할 수 있는 CRUD 기능을 구현했습니다. 웹 기반 데이터베이스 애플리케이션의 기본 원리를 학습하기 위한 프로젝트입니다.",
      images: ["/images/php-project.png", "/placeholder.svg?height=600&width=800&text=PHP+Project+Image+2"],
      tags: ["PHP", "MySQL", "mysqli", "HTML", "XAMPP"],
      demoUrl: "#",
      githubUrl: "https://github.com/minmario/my_php_project",
      highlights: [
        "주문 데이터 삽입, 조회, 삭제 기능 구현 (combined_order.php)",
        "계약 정보 수정 기능 개발 (revise_contract.php, process_update.php)",
        "원자재 입력 폼 및 데이터베이스 저장 구현 (print_item.php, store_item.php)",
        "대리인 관리 시스템 개발 (print_reseller.php, store_reseller.php)",
        "사용자 지정 테이블 조회 기능 구현 (main_page.php, select_page.php)",
      ],
      results:
        "PHP와 MySQL을 활용한 기본적인 CRUD 웹 애플리케이션 개발 완료. 폼 데이터 처리 및 데이터베이스 연동 기술 습득. 웹 기반 재고 관리 시스템의 기초 흐름 이해.",
      type: "personal",
    },
    {
      id: 6,
      title: "무신사 클론 프로젝트",
      subtitle: "풀스택 이커머스 및 소셜 미디어 플랫폼",
      description:
        "무신사 웹사이트의 주요 기능을 클론하여 구현한 풀스택 프로젝트입니다. 상품 목록, 상세 페이지, 결제 프로세스, 카테고리 관리, 사용자 피드 및 이미지 업로드 등 다양한 기능을 포함합니다.",
      images: [
        "/images/musinsa/1.png",
        "/images/musinsa/2.png",
        "/images/musinsa/3.png",
        "/images/musinsa/4.png",
        "/images/musinsa/5.png",
        "/images/musinsa/6.png",
        "/images/musinsa/7.png",
        "/images/musinsa/8.png",
      ],
      tags: ["React", "Next.js", "Spring Boot", "MySQL", "Tailwind CSS", "RESTful API", "Docker"],
      demoUrl: "#", // 실제 데모 URL이 있다면 여기에 추가
      githubUrl: "https://github.com/minmario/shop", // 실제 GitHub URL이 있다면 여기에 추가
      highlights: [
        "상품 목록 및 상세 페이지 구현 (필터링, 검색 포함)",
        "장바구니 및 결제 프로세스 시뮬레이션",
        "사용자 피드 및 이미지 업로드 기능 개발",
        "관리자용 카테고리 및 상품 관리 시스템",
        "반응형 UI/UX 디자인 적용",
        "백엔드 API 연동 및 데이터베이스 관리",
      ],
      results:
        "무신사 웹사이트의 핵심 기능을 모방하여 풀스택 개발 역량 강화. 사용자 친화적인 인터페이스와 관리자 기능을 통합한 복합 웹 서비스 구현. 실제 서비스와 유사한 사용자 경험 제공.",
      type: "team", // 또는 "personal"
    },
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    return project.type === activeFilter
  })

  const handleImageModalOpen = (images: string[]) => {
    setSelectedProjectImages(images)
    setCurrentImageIndex(0)
    setDialogOpen(true)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => Math.min(selectedProjectImages.length - 1, prevIndex + 1))
  }

  return (
    <section id="projects" className="py-32 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">프로젝트</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            제가 진행한 주요 프로젝트들입니다. 각 프로젝트를 클릭하면 자세한 정보를 볼 수 있습니다.
          </p>

          {/* 필터 버튼 */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className="min-w-24"
            >
              전체
            </Button>
            <Button
              variant={activeFilter === "team" ? "default" : "outline"}
              onClick={() => setActiveFilter("team")}
              className="min-w-24"
            >
              팀 프로젝트
            </Button>
            <Button
              variant={activeFilter === "personal" ? "default" : "outline"}
              onClick={() => setActiveFilter("personal")}
              className="min-w-24"
            >
              개인 프로젝트
            </Button>
          </div>
        </div>

        {/* 프로젝트 목록 */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">해당 유형의 프로젝트가 없습니다.</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full w-full">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {/* 프로젝트 유형 배지 */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {project.type === "team" ? "팀 프로젝트" : "개인 프로젝트"}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-lg font-medium mt-1">{project.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">주요 구현 내용:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          {project.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">결과:</h4>
                        <p className="text-sm text-muted-foreground">{project.results}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-6 flex justify-between items-center flex-wrap gap-2">
                      <div className="flex gap-2">
                        {" "}
                        {/* 이 div로 왼쪽 버튼들을 묶습니다 */}
                        {/* 이미지 보기 모달 버튼 */}
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => handleImageModalOpen(project.images)}>
                              <ImageIcon className="mr-2 h-4 w-4" />
                              이미지 보기
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-6xl p-0 bg-white">
                            <DialogHeader className="p-6 pb-4">
                              <DialogTitle>{project.title} 이미지</DialogTitle>
                              <DialogDescription>{project.subtitle} 프로젝트의 상세 이미지입니다.</DialogDescription>
                            </DialogHeader>
                            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
                              {selectedProjectImages.length > 0 && (
                                <Image
                                  key={selectedProjectImages[currentImageIndex]}
                                  src={selectedProjectImages[currentImageIndex] || "/placeholder.svg"}
                                  alt={`${project.title} 이미지 ${currentImageIndex + 1}`}
                                  fill
                                  className="object-contain"
                                />
                              )}
                            </div>
                            {selectedProjectImages.length > 1 && (
                              <>
                                {/* ← 버튼 */}
                                <button
                                  onClick={handlePrevImage}
                                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                                  disabled={currentImageIndex === 0}
                                >
                                  <ChevronLeft className="h-6 w-6 text-black" />
                                </button>

                                {/* → 버튼 */}
                                <button
                                  onClick={handleNextImage}
                                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                                  disabled={currentImageIndex === selectedProjectImages.length - 1}
                                >
                                  <ChevronRight className="h-6 w-6 text-black" />
                                </button>

                                {/* 인덱스 */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-sm">
                                  {currentImageIndex + 1} / {selectedProjectImages.length}
                                </div>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                        {!project.hideDemoButton &&
                          (project.demoUrl === "#" ? (
                            <Button variant="outline" size="sm" disabled>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              결과 보기
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" asChild>
                              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                결과 보기
                              </Link>
                            </Button>
                          ))}
                      </div>
                      {project.githubUrl === "#" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          className={project.hideDemoButton ? "ml-auto" : ""}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          코드
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" asChild className={project.hideDemoButton ? "ml-auto" : ""}>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            코드
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
