import { useFormik } from "formik";
import { formatInitialValues } from "../utils/formUtils";
import { IformatInitialFormValues } from "../global/interfaces/form.interface";

export const useForm = (
  initialValues: IformatInitialFormValues,
  dispatch: (payload?: any) => void,
  validationSchema: any
) => {
  const formatedInitialValues = formatInitialValues(initialValues);
  const Formik = useFormik({
    initialValues: formatedInitialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(values);
      resetForm();
    },
  });

  return Formik;
};
