import type { ReactNode } from "react";

import { DocsSidebar } from "@/components/landing/docs/DocsSidebar";

/**
 * Shared docs layout: a sticky category sidebar (desktop) and the article
 * content. The site header and footer come from the root layout.
 */
export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8">
        <div className="flex gap-10 py-10 lg:py-14">
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-24">
              <DocsSidebar />
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <div className="mx-auto max-w-3xl">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
