import { Button, Container, Eyebrow, Heading, Lede } from "@/components/site/primitives";

export default function NotFound() {
  return (
    <main className="hero-glow">
      <Container className="pb-28 pt-20 sm:pt-28">
        <div className="max-w-2xl">
          <Eyebrow>404</Eyebrow>
          <Heading as="h1" size="lg" className="mt-4">
            That page isn&apos;t here.
          </Heading>
          <Lede className="mt-5">The link may be old or mistyped. Head back to the home page, or browse the product and pricing pages from the menu.</Lede>
          <div className="mt-8 flex gap-3">
            <Button href="/" arrow>
              Back to home
            </Button>
            <Button href="/features" variant="secondary">
              Browse features
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
