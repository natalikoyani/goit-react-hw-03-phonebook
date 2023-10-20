import { Formik } from "formik";
import * as Yup from 'yup';
import { StyledForm, StyledLabel, StyledButton, StyledField, StyledErrorMessage } from "./ContactForm.styled";

const phonebookSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.string().matches(/^[0-9-+]+$/, 'Please enter digits, "-" or "+"').required('This field is required!')
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '', }}
      validationSchema={phonebookSchema}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
    >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField
              name="name"
            />
            <StyledErrorMessage name="name" component="div" />
          </StyledLabel>
          <StyledLabel>
            Number
            <StyledField
               name="number"
            />
            <StyledErrorMessage name="number" component="div" />
          </StyledLabel>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
  );
};