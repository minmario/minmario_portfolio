import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  const educationItems = [
    {
      id: 1,
      institution: "고려대학교(세종)",
      degree: "컴퓨터융합소프트웨어학과(이중) / 융합경영학과",
      period: "2018 - 2025",
      location: "세종",
      description:
        "컴퓨터 과학 및 소프트웨어 공학을 이중전공으로, 경영학을 전공으로 학습했습니다. 알고리즘, 데이터 구조, 소프트웨어 설계 및 경영 전략 등을 공부했습니다.",
    },
    {
      id: 2,
      institution: "쌍용교육센터 강남",
      degree: "웹 개발 과정",
      period: "2025",
      location: "서울 강남",
      description:
        "AWS와 Docker & Kubernetes를 활용한 Java Full-Stack 개발자 양성과정을 수료했습니다. React, Next.js, TypeScript, SpringBoot, MyBatis 등을 학습했습니다.",
    },
    {
      id: 3,
      institution: "충청ICT IS",
      degree: "스마트 시티 적용을 위한 AI 기반 영상 처리",
      period: "2022",
      location: "세종",
      description: "머신 러닝 지도학습을 처음 배웠으며, 시각화, 하이퍼 파라미터 튜닝 등을 학습했습니다.",
    },
  ]

  return (
    <section id="education" className="py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-6">교육이수사항</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">제가 받은 교육과 학습 경험을 소개합니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationItems.map((item) => (
            <Card key={item.id} className="h-full">
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{item.institution}</CardTitle>
                <CardDescription>{item.degree}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
