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
         <div>
  <h2 className="text-3xl font-bold tracking-tight mb-8">저에 대해서</h2>

  <p className="text-muted-foreground mb-6 text-lg">
    저는 효율이란 단순한 속도나 단축이 아니라, 기능을 처음부터 정확히 구현하고 불필요한 중복을 줄이는 과정에서 비롯된다고 생각합니다.
    이를 위해 기능이 중첩되지 않도록 팀원들과 사전 조율하고, 가장 잘 아는 동료의 조언을 들으며,
    구현 후에는 함께 리체크하는 과정을 중요하게 여깁니다. 이러한 절차가 결국 재작업 없이 신뢰도 높은 결과물을 빠르게 만드는
    진짜 효율이라고 믿습니다.
  </p>

  <p className="text-muted-foreground mb-6 text-lg">
    웹 개발 분야에서는 백엔드에 가장 자신이 있으며, 학부 시절부터 C, C++, Java, Python, MATLAB을 익혀왔고
    특히 인공지능 관련 강의를 많이 수강했습니다. 프론트엔드는 다소 부족하지만, React, Next.js, TypeScript를 활용하여
    백엔드와의 통신을 중심으로 간단한 기능 구현을 연습한 경험이 있습니다.
  </p>

  <p className="text-muted-foreground mb-6 text-lg">
    저는 좋은 코드 사례를 찾아 프로젝트에 적용해보며 실무에 필요한 패턴과 설계를 꾸준히 익혀왔습니다.
    최근에는 인공지능 도구를 활용해 반복 작업을 줄이고, 코드의 일관성과 생산성을 높이기 위한 실험을 진행하고 있습니다.
    저의 최종적인 목표는 효율적인 개발을 넘어서, 팀 전체의 생산성과 코드의 확장성까지 함께 고려할 수 있는 개발자로 성장하는 것입니다.
    특히 백엔드에서 쌓아온 경험을 바탕으로, 더 나은 시스템 설계와 구조 개선에 기여하고 싶습니다.
  </p>
</div>
        </div>
      </div>
    </section>
  )
}
