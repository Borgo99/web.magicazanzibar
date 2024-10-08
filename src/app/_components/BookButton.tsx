import React from "react";
import Button from "./Button";

const mail = "magicazanzibar33@gmail.com";

const BookButton = ({
  text,
  tour_name,
}: {
  text: string;
  tour_name?: string;
}) => {
  return (
    <Button
      href={`mailto:${mail}?subject=${
        tour_name ? tour_name : "Magica Zanzibar"
      }`}
      style={{
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </Button>
  );
};

export default BookButton;
