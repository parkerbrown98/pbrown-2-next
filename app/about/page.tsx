import Container from "../components/container";
import Heading from "../components/heading";

export default function AboutPage() {
  return (
    <>
      <Container padTop={false}>
        <Heading as="h1">About Me</Heading>
        <p className="mt-8 prose">
          Hi, I&apos;m Parker. I&apos;m a software engineer, currently working at{" "}
          <a href="https://www.lucidprivateoffices.com">
            Lucid Private Offices
          </a>{" "}
          in the DFW area. I like to build things and write about it. I&apos;m a big
          fan of the Jamstack, and I&apos;m currently using{" "}
          <a href="https://nextjs.org">Next.js</a> and{" "}
          <a href="https://sanity.io">Sanity</a> to build this site.
        </p>
      </Container>
      <Container padTop={false}>
        <Heading as="h2">Education</Heading>
        <p className="mt-8 prose">
          I graduated from the University of North Texas in 2021 with a Bachelor
          of Science in Computer Science. In 2023, I began pursuing a Master of
          Science in Computer Science with a specialization in artificial
          intelligence at Southern Methodist University. I am expected to
          graduate in 2024.
        </p>
      </Container>
      <Container padTop={false}>
        <Heading as="h2">Work Experience</Heading>
        <p className="mt-8 prose">
          I have worked at Lucid Private Offices since 2022, where I have
          primarily worked on the company&apos;s website and internal tools. As well
          as Next.js and React, I have worked with Python, Django and Postgres
          to build an internal CMS and API.
        </p>
      </Container>
      {/* <Container padTop={false}>bap</Container> */}
    </>
  );
}
