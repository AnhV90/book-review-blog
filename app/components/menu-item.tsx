"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function MenuItem({
  href,
  children,
}: PropsWithChildren<LinkProps>) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`inline-block transition border-b-2 cursor-pointer px-1 py-2    ${
        pathname === href
          ? "border-b-gray-700 dark:border-b-gray-200 dark:text-gray-200"
          : "border-b-transparent hover:-translate-y-0.5"
      }`}
    >
      {children}
    </Link>
  );
}
