import BackButton from "../components/back-button";
import Container from "../components/container";
import Heading from "../components/heading";

export default function ThankYouPage() {
  return (
    <Container padTop={false}>
      <Heading as="h1">Thank you, stranger.</Heading>
      <p className="mt-2">Your message has been sent. Maybe one day someone will read these...</p>
      <BackButton href="/" text="Back to Safety" className="mt-8" />
    </Container>
  );
}
