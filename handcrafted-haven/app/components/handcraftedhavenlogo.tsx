import Image from 'next/image';
import Link from 'next/link';
export default function HandcraftedHavenLogo() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/images/hhHeader.png"
          alt="logo"
          className="h-32 flex-shrink-0 rounded-lg ml-[-5rem]"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
