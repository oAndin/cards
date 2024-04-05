import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex items-center justify-start gap-2 p-4">
      <span id="logo" className="flex gap-2 border-2 bg-white w-20 h-20 rounded-full"></span>
      <nav >
        <ul className="flex gap-2 border-2 border-white">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
          <Link href={"/test"}>Teste</Link>
          </li>
          <li>
          <Link href={"/cards"}>Cards</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
