import Profile from "@/components/Profile";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between gap-5">
      <Profile />
      <section className="flex flex-col gap-2 bg-zinc-400 text-black p-6">
        <section className="flex flex-col items-center gap-1">
          <h3 className="font-bold text-2xl">Who am I?</h3>
          <p>프론트엔드 개발자입니다. </p>
          <p>
            논리적인 이유나 근거를 바탕으로 프로그래밍하려 노력하고 있습니다.
          </p>
          <p>
            유지보수하기 쉬운 코드를 작성하고 싶습니다. 점진적으로 테스팅과
            디자인 패턴을 프로젝트에 적용 중입니다.
          </p>
          <p>팀이 일하기 쉬운 환경과 시스템을 만드는 데 관심이 있습니다.</p>
        </section>
        <section className="flex flex-col items-center">
          <h3 className="font-bold text-2xl">Education</h3>
          <p>DGU (2017~) </p>
          <p>Programmers Dev Course (2023.06~)</p>
          <p>Hyundai Motor Softeer BootCamp(2023.01~2023.02)</p>
        </section>
        <section className="flex flex-col items-center">
          <h3 className="font-bold text-2xl">Skills</h3>
          <p>React, Vue </p>
          <p>TypeScript, JavaScript</p>
        </section>
      </section>
    </main>
  );
}
