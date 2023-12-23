import Link from "next/link";

interface BreadcrumbProps {
  pathArray: string[];
}

export default function Breadcrumb({ pathArray }: BreadcrumbProps) {
  return (
    <ul className="flex">
      <li className="mr-2 hover:text-purple">
        <Link href="/">Home</Link>
      </li>
      {pathArray.map((path: string, index: number) => {
        if (!path) {
          return;
        }
        const href = pathArray
          .slice(0, index + 1)
          .map((p: string) => p && "/" + p)
          .toString()
          .replaceAll(",", "");
        return (
          <li key={href}>
            {" "}
            /
            <Link className="capitalize mx-2" href={href}>
              {path}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
