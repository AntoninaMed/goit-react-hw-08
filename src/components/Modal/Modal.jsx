import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ closeModal }) => {
  const closeByKeyDown = (e) => {
    if (e.code === "Escape") {
      closeModal(false);
    }
  };

  const closeByClickOnBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", closeByKeyDown);

    return () => {
      window.removeEventListener("keydown", closeByKeyDown);
    };
  });

  return createPortal(
    <div className={css.backdrop} onClick={closeByClickOnBackdrop}>
      <div className={css.modal}>
        <h3 className={css.h3}>ADD NEW CONTACT</h3>
        <ContactForm closeModal={closeModal} />
      </div>
    </div>,
    modalRoot
  );
};
