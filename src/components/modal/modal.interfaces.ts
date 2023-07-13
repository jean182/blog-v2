import type { INavigationProps } from "@shared/interfaces";

export type ModalImperativeHandle = {
  closeModal: () => void;
  openModal: () => void;
};

export interface ModalProps extends Pick<INavigationProps, "navRef"> {
  children: React.ReactNode;
  triggerRef: React.RefObject<HTMLButtonElement>;
  footerContent?: React.ReactNode;
  id: string;
  title: string;
}
