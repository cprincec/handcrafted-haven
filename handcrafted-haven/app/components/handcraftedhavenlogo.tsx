import Image from 'next/image';
export default function HandcraftedHavenLogo() {
  return (
    <div>
      <Image src={'/images/hhHeader.png'} alt="logo" width={450} height={350} />
    </div>
  );
}
