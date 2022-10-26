import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../contextProvider";
import { getClass } from "../utils";

export default function Photos() {
  const { photos } = useContext(Context);

  const photoElements = photos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return <main className="photos">{photoElements}</main>;
}
