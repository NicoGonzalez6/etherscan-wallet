import { IformatInitialFormValues } from "../../global/interfaces/form.interface";
import * as Yup from "yup";

export const initialNewWalletValues: IformatInitialFormValues = [
  {
    label: "Address",
    id: "address",
    name: "address",
  },
];

export const initialExchangeFormValues: IformatInitialFormValues = [
  {
    label: "Exchange Rate",
    id: "rate",
    name: "rate",
  },
];

export const editExchangeValidationSchema = Yup.object().shape({
  rate: Yup.string().required("Required"),
});

export const newWalletValidationSchema = Yup.object().shape({
  address: Yup.string().min(42).max(42).required("Required"),
});
