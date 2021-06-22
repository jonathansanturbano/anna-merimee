import React from "react";
import { FiMail } from "react-icons/fi";
import { useGlobalContext } from "../packs/context";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useGlobalContext();
  return (
    <aside className={isModalOpen ? `modal modal-open` : `modal modal-closed`}>
      <div className="modal-container">
        <div
          className="modal-toggle"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <FiMail className="modal-toggle-icon" />
        </div>
        <div className="modal-text-container">
          <p className="modal-text">
            Pour toute demande{" "}
            <a href="mailto:merimee.anna@orange.fr">merimee.anna@orange.fr</a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
