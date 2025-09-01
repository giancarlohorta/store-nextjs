"use client";
import Typography from "../../atoms/Typography";
import style from "./Item.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatText } from "@/shared/utils/text";
import { Product } from "@/shared/types/product.interface";

interface ItemProps {
  item: Product;
}

const Item = ({ item }: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={`/products/${item.id}`}
      key={item.id}
      role="link"
      aria-labelledby={`title-${item.id}`}
      className={style.item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style["image-container"]}>
        <Image
          src={item.thumbnail}
          alt={`${item.title} image`}
          className={style.image}
          loading="lazy"
          width={200}
          height={200}
        />
      </div>
      <div className={style.content}>
        {item.brand && (
          <Typography
            content={formatText(item.brand)}
            size="xs"
            weight="light"
            color="tertiary"
            as="p"
          />
        )}
        <div className={style.details}>
          <Typography
            content={formatText(item.title)}
            size="sm"
            weight="light"
            color={isHovered ? "secondary" : "primary"}
            as="p"
          />
          <Typography
            content={`${item.price} EUR`}
            size="sm"
            weight="light"
            color={isHovered ? "secondary" : "primary"}
            as="p"
          />
        </div>
      </div>
    </Link>
  );
};

export default Item;
