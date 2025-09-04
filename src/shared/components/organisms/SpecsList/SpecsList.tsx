import {
  formatAdapter,
  formatSpecList,
  humanizeKey,
} from "@/shared/utils/text";
import Typography from "../../atoms/Typography";
import style from "./SpecsList.module.css";
import { Product } from "@/shared/types/product.interface";

interface SpecsListProps {
  data: Product;
}

const SpecsList = ({ data }: SpecsListProps) => {
  return (
    <ul className={style["specs-list"]}>
      {Object.entries(formatSpecList(data)).map(([key, value]) => (
        <li key={key} className={style["spec-item"]}>
          <Typography
            content={humanizeKey(key)}
            size="sm"
            weight="light"
            color="primary"
            as="p"
          />
          <Typography
            content={formatAdapter(key, String(value))}
            size="sm"
            weight="light"
            color="primary"
            as="p"
          />
        </li>
      ))}
    </ul>
  );
};

export default SpecsList;
