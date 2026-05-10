import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Testing</h1>
      <br />
      <Link href="/posts">Postingan page</Link>
      <br />
      <Link href="/albums">Album page</Link>
    </div>
  );
}
