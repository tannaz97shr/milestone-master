"use client";

import { useRouter } from "next/navigation";

//
// router.back()
export default function Header() {
  const router = useRouter();
  return (
    <div className="bg-beta p-3 text-dark-primary dark:text-light-primary mb-2">
      this is header
    </div>
  );
}
