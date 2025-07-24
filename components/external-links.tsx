import { Code, FileText, Github, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function ExternalLinks() {
  const links = [
    {
      id: 1,
      title: "GitHub",
      description: "소스 코드 및 프로젝트 저장소",
      icon: <Github className="h-6 w-6 text-primary" />,
      url: "https://github.com/minmario/",
      linkText: "github.com/minmario",
    },
    {
      id: 2,
      title: "기술 블로그",
      description: "개발 경험과 지식 공유",
      icon: <FileText className="h-6 w-6 text-primary" />,
      url: "https://velog.io/@minmario/posts",
      linkText: "minmario.tistory.com",
    },
    {
      id: 3,
      title: "백준",
      description: "알고리즘 문제 풀이",
      icon: <Code className="h-6 w-6 text-primary" />,
      url: "https://www.acmicpc.net/user/minmario",
      linkText: "acmicpc.net/user/minmario",
    },
    {
      id: 4,
      title: "Notion",
      description: "프로젝트 문서 및 학습 노트",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      url: "https://www.notion.so/Spring-Boot-1e754069ed0180d8bd9de269e0d7476b",
      linkText: "minmario.notion.site",
    },
  ]

  return (
    <section id="external-links" className="py-32 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-6">외부 링크</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            제 활동을 확인할 수 있는 다양한 플랫폼 링크입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {links.map((link) => (
            <Link href={link.url} key={link.id} target="_blank" rel="noopener noreferrer">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="flex items-center mb-2">{link.icon}</div>
                  <CardTitle>{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium">{link.linkText}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
