import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import React from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const initialValues = {
  contactname: "",
  contactnumber: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid,
      name: values.contactname,
      number: values.contactnumber,
    };
    onAdd(newContact);
    actions.resetForm();
  };

  const contactFormSchema = Yup.object().shape({
    contactname: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    contactnumber: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={s.formContainer}>
        <label htmlFor="nameFieldId" className={s.contactname}>
          Name
        </label>
        <Field
          className={s.contactField}
          type="text"
          name="contactname"
          id={nameFieldId}
        ></Field>
        <ErrorMessage
          className={s.errorMessage}
          name="contactname"
          component="span"
        />
        <label htmlFor="numberFieldId" className={s.contactnumber}>
          Number
        </label>
        <Field
          className={s.contactField}
          type="text"
          name="contactnumber"
          id={numberFieldId}
        ></Field>
        <ErrorMessage
          className={s.errorMessage}
          name="contactnumber"
          component="span"
        />
        <button className={s.addBtn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
