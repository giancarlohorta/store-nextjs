"use client";
import { useRouter } from "next/navigation";
import Input from "../../atoms/Input";
import Typography from "../../atoms/Typography";
import style from "./SearchArea.module.css";

interface SearchAreaProps {
  count: number;
}

const SearchArea = ({ count }: SearchAreaProps) => {
  const router = useRouter();

  const onEnter = (value: string) => {
    router.push(`/products?search=${encodeURIComponent(value)}`);
  };

  return (
    <section aria-labelledby="search-heading">
      <Input placeholder={"Search for a smartphone..."} onEnter={onEnter} />
      <div className={style["info-container"]}>
        <Typography
          content={`${count} RESULTS`}
          size="sm"
          weight="light"
          color="primary"
          as="p"
          className={style["search-result"]}
        />
      </div>
    </section>
  );
};

export default SearchArea;
