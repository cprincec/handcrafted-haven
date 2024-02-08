import Image from 'next/image';
export default function HandcraftedHavenLogo() {
  return (
    <Image src={'/images/hhHeader.png'} alt="logo" width={350} height={35} style={{width:"auto", height: "auto"}}/>
  );
}
