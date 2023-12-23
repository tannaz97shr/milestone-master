"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import Breadcrumb from "./Breadcrumb";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const pathArray: string[] = pathname.split("/");
  return (
    <div className="flex items-center bg-rose p-2 text-dark-blue dark:text-light-pink mb-2">
      <button className="mr-4" onClick={() => router.back()}>
        <IoMdArrowRoundBack size="1.25rem" />
      </button>
      <Breadcrumb pathArray={pathArray} />
    </div>
  );
}
