"use client";

import { usePathname } from "next/navigation";

import { docsByGroup } from "@/components/landing/docs/nav";

/** Left-hand docs navigation. Highlights the active article via the pathname. */
export function DocsSidebar() {
  const pathname = usePathname();
  const groups = docsByGroup();

  return (
    <nav className="flex flex-col gap-7">
      {groups.map(({ group, items }) => (
        <div key={group}>
          <div className="mb-2 px-3 text-[13px] font-medium text-muted">{group}</div>
          <ul className="flex flex-col gap-0.5">
            {items.map((item) => {
              const href = `/docs/${item.slug}`;
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <a
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-full px-3.5 py-2 text-[14px] transition-colors ${
                      active
                        ? "bg-mist font-medium text-ink"
                        : "text-body hover:bg-mist-2 hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
