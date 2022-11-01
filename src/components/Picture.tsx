import React from "react";
type props = {
  urlPic: string,
  srcPic: string,
  altPic: string,
}
export default function Picture(
  { urlPic, srcPic, altPic }: props) {
  return <picture>
    <img loading="lazy" src={urlPic} alt={altPic} />
  </picture>;
}
