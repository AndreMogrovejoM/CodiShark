import { Dispatch, SetStateAction } from "react";

export interface LayoutContainerProps {
  children: React.ReactNode;
}

export interface LayoutContainerStyledProps {
  className: string;
}

export interface ModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
