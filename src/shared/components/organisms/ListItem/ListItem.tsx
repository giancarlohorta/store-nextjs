import clsx from "clsx";
import Item from "../../molecules/Item";
import style from "./ListItem.module.css";
import { Product } from "@/shared/types/product.interface";

interface ListItemProps {
  list: Product[];
  row?: boolean;
}

const ListItem = ({ list, row }: ListItemProps) => {
  const isRow = row ?? false;
  return (
    <section
      className={clsx(isRow ? style["list-row"] : style.list)}
      aria-label={isRow ? "Related products" : "Product list"}
    >
      {list.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </section>
  );
};

export default ListItem;
