import { redirect } from "next/navigation";
import Container from "../components/container";
import Heading from "../components/heading";
import { Resend } from "resend";

export default function ContactPage() {
  async function submit(formData: FormData) {
    "use server";
    const message = formData.get("message");
    const name = formData.get("name");
    const email = formData.get("email");
    if (message && name) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      resend.emails.send({
        from: "contact@mail.pbrown.dev",
        to: "pqtbrown@gmail.com",
        subject: "Contact Form Submission",
        html: `
          <h1>New Contact Form Submission</h1>
          <p>From: ${name} (${email})</p>
          <p>Message: ${message}</p>
        `,
      });
    }
    redirect("/thank-you");
  }

  return (
    <Container padTop={false} className="space-y-8">
      <Heading as="h1">Get in touch</Heading>
      <form className="space-y-4" action={submit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-black px-4 py-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-black px-4 py-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border border-black px-4 py-2 h-64 outline-none focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white font-semibold px-4 py-2"
        >
          Send
        </button>
      </form>
    </Container>
  );
}
