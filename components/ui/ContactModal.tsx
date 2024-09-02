import React from "react";
import { FiX } from "react-icons/fi"; // Importing the close icon from Feather icons

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 pt-2 rounded-lg shadow-lg max-w-sm w-1/2">
        <div className="flex flex-row justify-end">
          <button className="my-1 mb-4 text-black" onClick={onClose}>
            <FiX size={24} /> {/* Using the close icon here */}
          </button>
        </div>

        <button
          className="w-full py-2 mb-2 text-white bg-[#04071D] rounded border border-[#04071D]"
          onClick={() => {
            window.location.href = "tel:+7754837291";
            onClose();
          }}
        >
          Call Us
        </button>
        <button
          className="w-full py-2 text-[#04071D] border border-[#04071D] rounded"
          onClick={() => {
            window.location.href = "mailto:info.letsfarm@gmail.com";
            onClose();
          }}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
