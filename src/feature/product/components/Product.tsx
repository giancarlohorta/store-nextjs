"use client";
import style from "./Product.module.css";
import Button from "@/shared/components/atoms/Button";
import { getIcon } from "@/shared/utils/icon";
import Typography from "@/shared/components/atoms/Typography";
import { formatText } from "@/shared/utils/text";
import Image from "next/image";
import SpecsList from "@/shared/components/organisms/SpecsList";
import { ProductProps } from "../types";
import ReviewRating from "@/shared/components/atoms/ReviewRating";
import { useCart } from "@/feature/cart/hooks/useCart";

const Product = ({ data }: ProductProps) => {
  const { addToCart } = useCart();
  const isLoading = false;

  const error = null;

  const image = (data?.images ? data.images[0] : "") as string;

  const handleAddToCart = () => {
    if (data) {
      addToCart({ ...data, quantity: 1 });
    }
  };

  return (
    <>
      <div className={style["back-container"]}>
        <Button type="link" className={style["back-button"]} link="/">
          {getIcon("back")}
          <Typography
            content="BACK"
            size="sm"
            weight="light"
            color="primary"
            as="p"
            className={style["back-text"]}
          />
        </Button>
      </div>

      <div className={style.container}>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data.</p>}
        {data && (
          <>
            <div className={style["main-content"]}>
              <div className={style["image-content"]}>
                <Image
                  src={image}
                  alt={data.title}
                  className={style["product-image"]}
                  width={400}
                  height={400}
                />
              </div>
              <div className={style["details-content"]}>
                <Typography
                  content={formatText(data.title)}
                  size="xl"
                  weight="light"
                  color="primary"
                  as="h1"
                />
                <div className={style["review-rating"]}>
                  <ReviewRating rating={data.rating} />
                  <Typography
                    content={String(data.rating)}
                    size="xs"
                    weight="light"
                    color="primary"
                    as="p"
                  />
                </div>
                <Typography
                  content={data.category}
                  size="md"
                  weight="light"
                  color="primary"
                  as="p"
                />
                <Typography
                  content={`${data.price} EUR`}
                  size="lg"
                  weight="light"
                  color="primary"
                  as="p"
                />

                <div className={style.tags}>
                  {data.tags &&
                    data.tags.map((tag) => {
                      return (
                        <Button
                          key={tag}
                          type="link"
                          link="/"
                          className={style.tag}
                        >
                          <Typography
                            content={tag}
                            size="sm"
                            weight="light"
                            color="primary"
                            as="p"
                          />
                        </Button>
                      );
                    })}
                </div>

                <Button
                  className={style["add-button"]}
                  type="primary"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
            <div className={style["specs-content"]}>
              <Typography
                content="SPECIFICATIONS"
                size="lg"
                weight="light"
                color="primary"
                as="h2"
              />
              <SpecsList data={data} />
            </div>
            <div className={style["similar-content"]}></div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
