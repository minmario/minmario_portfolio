import { Code, Database, Palette, Server, Brain, Network } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-6">기술 스택</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            학부 과정부터 전문 교육까지, 체계적으로 습득한 기술들입니다.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* 프로그래밍 언어 */}
          <Card>
            <CardHeader className="pb-2">
              <Code className="h-6 w-6 text-primary mb-2" />
              <CardTitle>프로그래밍 언어</CardTitle>
              <CardDescription>다양한 언어로 문제 해결 경험</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <strong>Python</strong> - 알고리즘, AI/ML, 데이터 분석
                </li>
                <li>
                  <strong>Java</strong> - Spring Boot, JCF 컬렉션
                </li>
                <li>
                  <strong>C/C++</strong> - 학부 기초, 리눅스 실습
                </li>
                <li>
                  <strong>JavaScript/TypeScript</strong> - 웹 개발
                </li>
                <li>
                  <strong>MATLAB</strong> - 수치해석, 신호처리
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 웹 개발 */}
          <Card>
            <CardHeader className="pb-2">
              <Server className="h-6 w-6 text-primary mb-2" />
              <CardTitle>웹 개발</CardTitle>
              <CardDescription>풀스택 개발 역량</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <strong>Frontend</strong> - React, Next.js, HTML5, CSS
                </li>
                <li>
                  <strong>Backend</strong> - Spring Boot, Spring Legacy
                </li>
                <li>
                  <strong>API</strong> - RESTful API, JSON 처리
                </li>
                <li>
                  <strong>Template</strong> - JSP, Servlet
                </li>
                <li>
                  <strong>Framework</strong> - MyBatis, MVC 패턴
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 데이터베이스 & 서버 */}
          <Card>
            <CardHeader className="pb-2">
              <Database className="h-6 w-6 text-primary mb-2" />
              <CardTitle>데이터베이스 & 서버</CardTitle>
              <CardDescription>데이터 관리 및 서버 운영</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <strong>MySQL</strong> - Workbench, 권한 설정
                </li>
                <li>
                  <strong>JPA</strong> - DB 연동 자동화
                </li>
                <li>
                  <strong>phpMyAdmin</strong> - 웹 기반 DB 관리
                </li>
                <li>
                  <strong>Apache</strong> - 웹서버 구성 경험
                </li>
                <li>
                  <strong>XAMPP</strong> - 로컬 개발 환경
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 데이터 분석 & AI/ML */}
          <Card>
            <CardHeader className="pb-2">
              <Brain className="h-6 w-6 text-primary mb-2" />
              <CardTitle>데이터 분석 & AI/ML</CardTitle>
              <CardDescription>머신러닝 및 딥러닝 프로젝트</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <strong>라이브러리</strong> - pandas, numpy, scikit-learn
                </li>
                <li>
                  <strong>시각화</strong> - matplotlib, seaborn
                </li>
                <li>
                  <strong>딥러닝</strong> - PyTorch, 지도/비지도학습
                </li>
                <li>
                  <strong>GAN</strong> - CycleGAN, LSGAN, Vanilla GAN
                </li>
                <li>
                  <strong>평가</strong> - ROC curve, Grid Search
                </li>
                <li>
                  <strong>통계</strong> - 가설검정, 확률 및 통계
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 시스템 & 네트워크 */}
          <Card>
            <CardHeader className="pb-2">
              <Network className="h-6 w-6 text-primary mb-2" />
              <CardTitle>시스템 & 네트워크</CardTitle>
              <CardDescription>시스템 이해 및 보안 지식</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <strong>네트워크</strong> - OSI 7계층, TCP/IP
                </li>
                <li>
                  <strong>운영체제</strong> - 커널 개념, 리눅스
                </li>
                <li>
                  <strong>보안</strong> - 대칭키/비대칭키, JWT
                </li>
                <li>
                  <strong>하드웨어</strong> - 논리회로, 도어락 프로젝트
                </li>
                <li>
                  <strong>신호처리</strong> - FFT 기반 소리 분석
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 개발 도구 & 환경 */}
          <Card>
            <CardHeader className="pb-2">
              <Palette className="h-6 w-6 text-primary mb-2" />
              <CardTitle>개발 도구 & 환경</CardTitle>
              <CardDescription>효율적인 개발 환경 구성</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <strong>버전관리</strong> - Git, GitHub
                </li>
                <li>
                  <strong>컨테이너</strong> - Docker, Kubernetes
                </li>
                <li>
                  <strong>클라우드</strong> - AWS 배포 경험
                </li>
                <li>
                  <strong>CI/CD</strong> - GitHub Actions 자동배포
                </li>
                <li>
                  <strong>데이터 분석</strong> - Excel, 데이터 정리
                </li>
                <li>
                  <strong>개발도구</strong> - Atom, 다양한 IDE
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
