import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact us" },
    { href: "/about", label: "About us" },
  ];

  return (
    <div className="bg-white w-full h-20 flex flex-row justify-between items-center px-8 drop-shadow-md">
      <div>
        <Image src="/logo.png" width="144" height="48" alt="Company Logo" />
      </div>
      <div className="gap-6 font-bold flex flex-row justify-end">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-blue-600 ${
              router.pathname === link.href ? "text-green-600" : "text-black"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
