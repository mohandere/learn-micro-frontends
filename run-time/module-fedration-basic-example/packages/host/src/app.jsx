import React from "react";

import CatalogMfe from "catalog/Module";
import CartMfe from "cart/Module";

export default function SayHelloFromHost() {
  return (
    <>
      <h1>Hello from Host App!</h1>
      <CatalogMfe />
      <CartMfe />
    </>
  );
}
