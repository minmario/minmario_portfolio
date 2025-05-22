import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <section id="contact" className="py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-6">연락처</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            프로젝트 문의나 궁금한 점이 있으시면 언제든지 연락해 주세요.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>연락처 정보</CardTitle>
              <CardDescription>다양한 방법으로 연락하실 수 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-4 text-primary" />
                <div>
                  <h3 className="font-medium">이메일</h3>
                  <p className="text-sm text-muted-foreground">minmario@naver.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-4 text-primary" />
                <div>
                  <h3 className="font-medium">전화번호</h3>
                  <p className="text-sm text-muted-foreground">010-2601-8999</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-4 text-primary" />
                <div>
                  <h3 className="font-medium">위치</h3>
                  <p className="text-sm text-muted-foreground">군포시 고산로 596-15 1026동 603호</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
