import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { FaBlogger } from "@react-icons/all-files/fa/FaBlogger";

import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col flex-grow gap-8">
      <section className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold">Contact me</h3>
        <p>jdh981118@naver.com</p>
        <div className="flex justify-between gap-3 text-4xl">
          <Link href="https://github.com/DongjaJ">
            <AiFillGithub />
          </Link>
          <Link href="https://velog.io/@ehdghks12">
            <FaBlogger />
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold">Or Send Email</h3>
      </section>
    </main>
  );
}
