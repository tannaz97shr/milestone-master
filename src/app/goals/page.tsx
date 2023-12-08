import Link from "next/link";

function Goals() {
  return (
    <>
      <div>this is the goals page !!!</div>
      <div>
        <Link href="/goals/create">set a goal</Link>
      </div>
    </>
  );
}

export default Goals;
