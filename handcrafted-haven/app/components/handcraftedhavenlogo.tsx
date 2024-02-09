import Link from 'next/link';
export default function HandcraftedHavenLogo() {
  return (
    <div>
      <Link href="/">
        <img
          src="./images/hhHeader.png"
          className="h-32 flex-shrink-0 rounded-lg"
        />
      </Link>
    </div>
  );
}
