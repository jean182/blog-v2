import { IContactKeys } from "../interfaces";

export function formatContactKey(key: IContactKeys) {
  let name = "";
  switch (key) {
    case "github":
      name = "Github";
      break;
    case "instagram":
      name = "Instagram";
      break;
    case "linkedIn":
      name = "LinkedIn";
      break;
    default:
      name = "Stack Overflow";
  }
  return name;
}