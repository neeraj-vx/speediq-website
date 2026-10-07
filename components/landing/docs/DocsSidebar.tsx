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
          <div className="mb-2 px-3 text-[11px] font-bold uppercase tracking-wide text-[#9aa1af]">{group}</div>
          <ul className="flex flex-col gap-0.5">
            {items.map((item) => {
              const href = `/docs/${item.slug}`;
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <a
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-1.5 text-[14px] transition-colors ${
                      active
                        ? "bg-[#f1f3f8] font-semibold text-[#11161f]"
                        : "text-[#5a6170] hover:bg-[#f7f8fb] hover:text-[#11161f]"
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
