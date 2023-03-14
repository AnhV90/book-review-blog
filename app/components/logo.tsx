"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoBlack from "../../public/black-transparent-logo.svg";
import logoWhite from "../../public/white-transparent-logo.svg";
import Link from "next/link";

export default function Logo() {
  const { theme } = useTheme();
  console.log({ theme });
  return (
    <Link href="/">
      <Image
        src={theme === "dark" ? logoWhite : logoBlack}
        alt="logo"
        width="70"
      />
    </Link>
  );
}
