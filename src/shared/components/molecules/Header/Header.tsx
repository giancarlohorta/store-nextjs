"use client";
import { getIcon } from "@/shared/utils/icon";
import Button from "../../atoms/Button";
import style from "./Header.module.css";

interface HeaderProps {
  cart?: boolean;
  count?: number;
}

const Header = ({ cart, count }: HeaderProps) => {
  const showCount = typeof count === "number";
  const emptyCart = count === 0;
  return (
    <header aria-label="Main Header" className={style.header}>
      <Button type="link" className={style.logo} link="/">
        {getIcon("logo")}
      </Button>

      {cart && (
        <nav aria-label="Main navigation" role="navigation">
          <Button type="link" className={style.logo} link="/cart">
            {getIcon(emptyCart ? "bag-empty" : "bag")}
            {showCount && (
              <span
                className={style.count}
                aria-live="polite"
                aria-atomic="true"
              >
                {count}
              </span>
            )}
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
