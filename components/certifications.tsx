import { Award, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Certifications() {
  const certifications = [
    {
      id: 1,
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2024-09-10",
      description: "소프트웨어 개발 및 IT 시스템 관리에 관한 국가공인 자격증",
    },
    {
      id: 2,
      name: "SQLD",
      issuer: "한국데이터산업진흥원",
      date: "2025-06-27",
      description: "SQL 개발자 자격증",
    },
    {
      id: 3,
      name: "TOEIC",
      score: "855점",
      issuer: "ETS",
      date: "2024-10-27",
      description: "영어 의사소통 능력을 평가하는 국제 공인 시험, 해외 거주 (인도네시아) & 국제학교 경험 있음",
    },
    {
      id: 4,
      name: "운전면허 1종 보통",
      issuer: "도로교통공단",
      date: "2020-02-03",
      description: "자동차 운전 자격증",
    },
    {
      id: 5,
      name: "ADsP",
      issuer: "한국데이터산업진흥원",
      date: "2025-08-29",
      description: "데이터 분석 준전문가 자격증 - 데이터 이해, 처리, 분석 기법에 대한 전문 지식",
    },
  ]

  return (
    <section id="certifications" className="py-32 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-6">자격증</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">보유한 자격증 및 어학 성적입니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.id} className="h-full">
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>
                  {cert.name}
                  {cert.score && <span className="ml-2 text-primary">{cert.score}</span>}
                </CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>취득일: {cert.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
