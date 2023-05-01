export interface Imodal {
  onConfirm?: () => void;
  onCancel?: () => void;
  title?: string;
  children?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
}
