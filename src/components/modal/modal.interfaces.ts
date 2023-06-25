export type ModalImperativeHandle = {
  closeModal: () => void;
  openModal: () => void;
};

export interface ModalProps {
  children: React.ReactNode;
  triggerRef: React.RefObject<HTMLButtonElement>;
  footerContent?: React.ReactNode;
  id: string;
  title: string;
}
