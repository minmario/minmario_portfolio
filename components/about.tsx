import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20241015_013729850.jpg-hOlqLR1gw6VF32mOBmoe2yFFL2CGWW.jpeg"
                alt="민재홍 프로필 이미지"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-8">저는</h2>

            <p className="text-muted-foreground mb-6 text-lg">
              신뢰할 수 있는 결과물을 지향하는 개발자입니다. <br />
              이를 위해 다음 세 가지 원칙을 개발 과정에서 실천하고 있습니다.
            </p>

            <p className="text-muted-foreground mb-6 text-lg">
              첫째, <strong>효율성</strong> – 기능이 중복되거나 충돌하지 않도록 팀원들과 사전 조율하고, <br />
              구현 중 영향을 줄 수 있는 변경 사항은 미리 공유하여 협업의 흐름을 끊지 않도록 노력합니다.
            </p>

            <p className="text-muted-foreground mb-6 text-lg">
              둘째, <strong>정확한 구현</strong> – 요구사항을 혼자 판단하지 않고, <br />
              개발 전에 명확히 기록하고 충분히 질문·확인하는 과정을 통해 왜곡 없이 정확하게 반영하려 합니다.
            </p>

            <p className="text-muted-foreground mb-6 text-lg">
              셋째, <strong>보안 의식</strong> – 민감 정보는 GitHub secret 기능을 활용해 감추고, <br />
              Public 저장소에는 API 키나 비밀번호가 노출되지 않도록 항상 점검합니다. <br />
              또한 JWT 기반 로그인 기능도 직접 구현하며, 인증·인가 구조에 대한 이해도를 높이고 있습니다.
            </p>

            <p className="text-muted-foreground mb-6 text-lg">
              앞으로는 기능 구현을 넘어서 시스템 구조 개선과 팀 전체의 생산성까지 고려하는 백엔드 개발자로 성장하고자
              합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
