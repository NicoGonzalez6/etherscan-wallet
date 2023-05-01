import {
  IinitialFormValues,
  IformatInitialFormValues,
} from "../global/interfaces/form.interface";

interface IformatFormValuesAcc {
  [keyName: string]: "";
}

export const formatInitialValues = (values: IformatInitialFormValues) => {
  const formatedValues = values.reduce(
    (acc: IformatFormValuesAcc, curr: IinitialFormValues) => {
      if (!acc[curr.name]) {
        acc[curr.name] = "";
      }
      return acc;
    },
    {}
  );

  return formatedValues;
};
