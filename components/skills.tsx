import { Code, Database, Palette, Server } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-6">기술 스택</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">다양한 프로젝트를 통해 습득한 기술들입니다.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card>
            <CardHeader className="pb-2">
              <Code className="h-6 w-6 text-primary mb-2" />
              <CardTitle>프론트엔드</CardTitle>
              <CardDescription>웹 인터페이스 개발</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Server className="h-6 w-6 text-primary mb-2" />
              <CardTitle>백엔드</CardTitle>
              <CardDescription>서버 및 API 개발</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Node.js</li>
                <li>Express</li>
                <li>RESTful API</li>
                <li>GraphQL</li>
                <li>Python</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Database className="h-6 w-6 text-primary mb-2" />
              <CardTitle>데이터베이스</CardTitle>
              <CardDescription>데이터 저장 및 관리</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>MySQL</li>
                <li>phpMyAdmin</li>
                <li>MySQL workbench</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Palette className="h-6 w-6 text-primary mb-2" />
              <CardTitle>기타</CardTitle>
              <CardDescription>개발 도구 및 방법론</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>CI/CD</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Database className="h-6 w-6 text-primary mb-2" />
              <CardTitle>데이터 분석 / 머신러닝</CardTitle>
              <CardDescription>분석 및 모델링 기술</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Python (pandas, numpy)</li>
                <li>scikit-learn / XGBoost</li>
                <li>Matplotlib / Seaborn</li>
                <li>EDA / Feature Engineering</li>
                <li>GridSearchCV / Cross-Validation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
