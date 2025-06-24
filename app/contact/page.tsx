// どこかのページ内
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>ホーム</h1>
      <Link href="/about">Aboutへ</Link>
    </div>
  );
}
