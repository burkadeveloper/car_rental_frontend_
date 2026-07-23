<<<<<<< HEAD
import React from "react";
import Modal from "./Modal";
import Button from "./Button";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title || "Confirm"}
      actions={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Confirm
          </Button>
        </>
      }
    >
      <p>{message || "Are you sure?"}</p>
    </Modal>
  );
};

export default ConfirmDialog;
=======
import React from "react";
import Modal from "./Modal";
import Button from "./Button";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title || "Confirm"}
      actions={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Confirm
          </Button>
        </>
      }
    >
      <p>{message || "Are you sure?"}</p>
    </Modal>
  );
};

export default ConfirmDialog;
>>>>>>> e32ece4e9c0f3570c3b3d9af4dbf9fb821cfd845
