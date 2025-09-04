import React from "react";
import clsx from "clsx";
import styles from "./ReviewRating.module.css";

type ReviewRatingProps = {
  rating: number;
  max?: number;
};

export default function ReviewRating({ rating, max = 5 }: ReviewRatingProps) {
  const circles = [];

  for (let i = 1; i <= max; i++) {
    let circleClass = styles.empty;

    if (rating >= i) {
      circleClass = styles.filled;
    } else if (rating >= i - 0.5) {
      circleClass = styles.half;
    }

    circles.push(<span key={i} className={clsx(styles.circle, circleClass)} />);
  }

  return <div className={styles.container}>{circles}</div>;
}
