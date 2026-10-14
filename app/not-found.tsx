import { BoltShape, BubbleShape } from "@/components/home/Shapes";
import { Button, Container, Eyebrow, Heading, Lede } from "@/components/site/primitives";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        <BoltShape className="float-a absolute left-[10%] top-[30%] h-24 w-24" style={{ ["--r" as string]: "-8deg" }} />
        <BubbleShape className="float-b absolute right-[11%] top-[42%] h-24 w-24" style={{ ["--r" as string]: "8deg" }} />
      </div>
      <Container className="relative pb-28 pt-20 sm:pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>404</Eyebrow>
          <Heading as="h1" size="lg" className="mt-4">
            That page isn&apos;t here.
          </Heading>
          <Lede className="mx-auto mt-5">The link may be old or mistyped. Head back to the home page, or browse the product and pricing pages from the menu.</Lede>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Browse features
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
