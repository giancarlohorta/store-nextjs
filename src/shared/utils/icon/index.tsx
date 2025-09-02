import Image from "next/image";

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case "logo":
      return (
        <Image
          src="/assets/logo.svg"
          alt="MBST logo"
          width={150}
          height={18}
          priority
        />
      );
    case "bag-empty":
      return (
        <Image
          src="/assets/bag-icon.svg"
          alt="Shopping cart empty"
          width={18}
          height={18}
        />
      );
    case "bag":
      return <Image src="/assets/bag-icon-active.svg" alt="Shopping cart" />;

    case "close":
      return (
        <Image src="/assets/close.svg" alt="close" width={18} height={18} />
      );
    case "back":
      return <Image src="/assets/back.svg" alt="back" width={10} height={10} />;
    default:
      return (
        <Image src="/assets/logo.svg" alt="MBST logo" width={18} height={18} />
      );
  }
};
