"use client";
"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-rose font-semibold py-2 px-3 flex ml-auto rounded border text-orange border-orange"
      type="submit"
      aria-disabled={pending}
    >
      Add
    </button>
  );
}
