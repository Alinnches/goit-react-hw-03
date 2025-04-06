import React from "react";
import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.contactItem}>
      <p className={s.contact}>
        {name}: {number}
        <button className={s.deleteBtn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </p>
    </li>
  );
};

export default Contact;
