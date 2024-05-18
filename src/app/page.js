import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Welcom to Recipe project
        <p>
        <Link href={'/recipe-list'}>Explore Recipe</Link>
        </p>
      </h1>
    </div>
  );
}
