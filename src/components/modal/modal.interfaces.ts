export type ModalImperativeHandle = {
  closeModal: () => void;
  openModal: () => void;
};

export interface ModalProps {
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  id: string;
  title: string;
}
