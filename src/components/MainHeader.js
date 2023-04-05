import Image from "next/image";

export default function MainHeader() {
  return (
    <header>
      <Image
        src="/images/LogoHeader.png"
        height={36}
        width={138}
        alt="Logo Came"
        className="pb-5 mt-1 ml-1"
      />
    </header>
  );
}
