import { Navbar } from "@components/navbar";
import type { INavigationProps } from "@shared/interfaces";
import * as React from "react";

export default function Header(props: INavigationProps) {
  return (
    <header>
      <Navbar {...props} />
    </header>
  )
}
