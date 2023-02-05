import * as React from "react";
import { Navbar } from "../navbar";
import { IHeaderProps } from "./header.interfaces";

export default function Header(props: IHeaderProps) {
  return (
    <header>
      <Navbar {...props} />
    </header>
  )
}
