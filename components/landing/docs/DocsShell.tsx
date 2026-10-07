import type { ReactNode } from "react";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { DocsSidebar } from "@/components/landing/docs/DocsSidebar";

/**
 * Shared docs layout: light Navbar, a sticky category sidebar (desktop), the
 * article content, and the marketing Footer. Every /docs page renders inside it.
 */
export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-[#eceef4]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar active="Docs" variant="light" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10 py-10 lg:py-14">
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-8">
              <DocsSidebar />
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <div className="mx-auto max-w-3xl">{children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
