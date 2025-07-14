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
              안녕하세요! 저는 혼자서도 탄탄한 결과물을 낼 수 있고, 동시에 타인과 협업할 때에도 신뢰받을 수 있는 개발자가 되고 싶은 민재홍입니다. 
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              주요로 자신이 있는 분야는 웹에서는 백엔드이며, 학부시절부터 C, C++, JAVA, Python, MATLAB을 배웠었고, 주로
              인공지능관련 강의 수강을 많이 했습니다. 프론트는 다소 부족하지만 React, Next.js, TypeScript를 간단하게
              사용할 수 있으며, 백엔드와의 통신하는 부분 정도를 주로 연습했습니다.
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              창의력은 다소 부족하지만, 항상 좋은 코드를 찾아 코드를 프로젝트에 가져오면서 복습하며 공부해 왔으며,
              현재는 어떻게하면 인공지능을 활용하면서 좋은 코드를 활용하면서도 식상해 보이지 않을 지 테스트 하는
              중입니다. 따라서 좋은 코드를 보는 것이 꿈이며 개발하는 목적입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
