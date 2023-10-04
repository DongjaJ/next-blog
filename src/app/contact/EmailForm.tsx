"use client";
import { useForm } from "react-hook-form";

type EmailFormValue = {
  email: string;
  subject: string;
  message: string;
};

export default function EmailForm() {
  const { handleSubmit, register } = useForm<EmailFormValue>({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: EmailFormValue) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("메일 전송에 실패했습니다");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col items-center gap-4">
      <h3 className="text-2xl font-bold">Or Send Email</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-800 flex flex-col justify-center gap-2 w-full max-w-md p-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="text-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className="text-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            className="text-black"
          />
        </div>

        <button>Submit</button>
      </form>
    </section>
  );
}
