/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import ProfileImage from "@/../public/images/profile.JPG";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="flex flex-col items-center gap-1">
      <Image src={ProfileImage} alt="프로필" />
      <h3 className="font-bold text-2xl">Hi, I'm Dongja!</h3>
      <p className="text-zinc-500">Front-end engineer</p>
      <p className="text-zinc-400">초보 개발자</p>
      <button className="bg-yellow-300 text-zinc-600 rounded-xl p-2 px-4 font-bold">
        <Link href="/contact">Contact me</Link>
      </button>
    </section>
  );
}
