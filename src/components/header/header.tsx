import { Navbar } from "@components/navbar";
import * as React from "react";
import { IHeaderProps } from "./header.interfaces";

export default function Header(props: IHeaderProps) {
  return (
    <header>
      <Navbar {...props} />
    </header>
  )
}
