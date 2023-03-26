import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  link: string;
  to: string;
}

export const Share = ({ isOpen, setIsOpen, link, to }: ModalProps) => {
  const bg = {
    overlay: {
      background: "rgba(0, 0, 0, 1)",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={!false}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="w-1/3 h-1/3 items-center justify-center bg-indigo-300 mx-auto rounded-xl flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-5 font-libre text-center font-bold text-purple-900">
          Share this letter {to ? `with ${to}` : ""}
        </h1>
      </div>

      <a className="font-libre underline text-xl" href={link}>
        {link}
      </a>

      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="react-modal-close bg-indigo-900 mt-5 rounded-xl px-6 py-3 text-lg font-libre leading normal text-white"
      >
        <img src="/close.svg" alt="Close modal" />
      </button>
    </ReactModal>
  );
};
