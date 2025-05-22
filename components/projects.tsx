"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type ProjectType = "all" | "team" | "personal"

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
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

  const projects: Project[] = [
    {
      id: 1,
      title: "SIST Chill Hotel",
      subtitle: "호텔 예약 및 관리 시스템 백엔드 API 개발",
      description:
        "호텔 예약 및 관리 시스템의 백엔드 API를 Spring Boot 기반으로 구현한 팀 프로젝트입니다. 회원, 스태프, 관리자 등 다양한 역할 기반의 기능을 분리하고, JWT 인증 및 포인트/등급/예약 관리 등 복합 비즈니스 로직을 포함합니다.",
      image: "/images/hotel-project.png",
      tags: ["Spring Boot", "Spring Security", "JPA", "Gradle", "JWT", "MySQL", "Docker", "RESTful API"],
      demoUrl: "http://3.39.138.132:3000/",
      githubUrl: "https://github.com/minmario/MyGitRepository",
      highlights: [
        "관리자/직원/회원의 역할 기반 인증 및 권한 관리 구현 (JWT + Security)",
        "회원 등급 시스템 및 포인트 로직 설계 및 API 개발",
        "숙박 예약 엔티티 설계 및 CRUD 구현",
        "관리자 페이지용 API 다수 개발 (직원 계정, 상품 관리 등)",
        "Docker 기반 빌드 및 실행 환경 구성",
      ],
      results:
        "전체 REST API 30개 이상 개발 완료, JWT 인증 시스템 완성으로 사용자 구분 인증 성공, 포인트 기반 회원 등급 관리 기능 구현, 리자 및 스태프 전용 API 완성 및 프론트 연동 검증",
      type: "team",
    },
    {
      id: 2,
      title: "Heart Disease Prediction",
      subtitle: "심장질환 예측을 위한 머신러닝 모델 비교 및 성능 분석",
      description:
        "심장병 환자 데이터를 기반으로 다양한 머신러닝 분류 모델을 적용해보고, 성능을 비교·분석한 프로젝트입니다. 총 7개의 모델(Logistic Regression, SVM, Random Forest 등)을 학습시킨 뒤 평가 지표 및 ROC 곡선을 통해 모델의 예측 성능을 시각화했습니다.",
      image: "/images/heart-disease-prediction.png",
      tags: ["Python", "Jupyter Notebook", "scikit-learn", "XGBoost", "pandas", "matplotlib", "seaborn"],
      demoUrl: "https://colab.research.google.com/drive/1atlCZgiD6Od3M9BCbKKQj-EA2J7oIHpH",
      githubUrl: "https://github.com/minmario/ml-projects",
      highlights: [
        "데이터 전처리 및 탐색적 데이터 분석(EDA)",
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
      id: 3,
      title: "Java 웹 쇼핑몰",
      subtitle: "JSP/Servlet 기반 풀스택 이커머스 플랫폼",
      description:
        "Java 8, JSP/Servlet, MyBatis를 활용한 전통적인 MVC 패턴의 웹 애플리케이션입니다. 관리자, 판매자, 사용자 모듈로 역할을 분리하고, Amazon S3를 이용한 이미지 업로드, 로그인/회원가입, 관리자 페이지, 포인트 시스템 등을 포함한 풀스택 웹 서비스입니다.",
      image: "/images/java-web-project.png",
      tags: ["Java", "JSP", "Servlet", "MyBatis", "MySQL", "Maven", "AWS S3", "JSTL", "Bootstrap", "jQuery"],
      demoUrl: "#",
      githubUrl: "https://github.com/minmario/shop",
      highlights: [
        "관리자/판매자/사용자 역할 기반 모듈 분리 및 권한 관리",
        "MyBatis와 DAO/VO 패턴을 활용한 데이터베이스 연동",
        "Amazon S3 연동 이미지 업로드 기능 구현",
        "회원가입, 로그인, 상품 조회, 장바구니, 주문 기능 개발",
        "쿠폰 발급 및 사용, 포인트 시스템 구현",
        "관리자용 회원/판매자 관리, 카테고리 등록 및 통계 기능",
      ],
      results:
        "전통적인 Java 웹 개발 패턴을 활용한 풀스택 이커머스 플랫폼 구현. 역할 기반 접근 제어와 클라우드 스토리지 연동을 통한 확장성 있는 시스템 설계. Maven을 활용한 빌드 자동화 및 Tomcat 서버 배포 경험.",
      type: "team",
    },
    {
      id: 4,
      title: "포트폴리오 웹사이트",
      subtitle: "개인 포트폴리오 웹사이트",
      description:
        "Next.js와 Tailwind CSS를 사용하여 개발한 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 모던한 UI/UX를 적용했습니다.",
      image: "/images/portfolio-website.png",
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
      image: "/images/php-project.png",
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
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    return project.type === activeFilter
  })

  return (
    <section id="projects" className="py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
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
        <div className="space-y-16">
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
                      src={project.image || "/placeholder.svg"}
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
                    <CardFooter className="p-0 pt-6 flex justify-between">
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
