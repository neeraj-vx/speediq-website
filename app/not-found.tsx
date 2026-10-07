import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function NotFound() {
  return (
    <main>
      <div className="w-full bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar variant="light" />
          <div className="max-w-2xl pb-24 pt-16 sm:pt-24">
            <p className="text-[12px] font-bold uppercase tracking-wide text-[#9aa1af]">404</p>
            <h1 className="mt-3 font-display text-[36px] font-semibold leading-[1.06] tracking-tight text-[#11161f] sm:text-[46px]">
              That page isn&apos;t here.
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#7a808b]">
              The link may be old or mistyped. Head back to the home page, or browse the product and
              pricing pages from the menu.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex items-center rounded-full bg-[#0526D9] px-7 py-3.5 text-[15px] font-medium text-white transition-transform hover:scale-[1.03]"
            >
              Back to home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
