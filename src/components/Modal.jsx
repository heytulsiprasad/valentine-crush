/* eslint-disable react/prop-types */
import clsx from 'clsx';
import Button from './Button';

const Modal = ({ children, closeModal }) => {
  return (
    <div
      className={clsx(
        'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center',
      )}
    >
      <div className="bg-white p-8 rounded-2xl min-h-[50vh] min-w-[50vw] flex flex-col items-center gap-y-4">
        <div className="grow flex items-center justify-center">{children}</div>
        <div>
          <Button onClick={closeModal}>OK</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
