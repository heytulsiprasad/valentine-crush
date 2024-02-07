/* eslint-disable react/prop-types */
import clsx from 'clsx';

const Button = ({ children, small, ...props }) => (
  <button
    className={clsx(
      'bg-pink-500 text-white rounded-2xl font-bold',
      'hover:bg-pink-600 transition-colors duration-300 ease-in-out',
      'hover:scale-105 transform-gpu transition-transform',
      !small && 'min-w-[12.5rem] min-h-[3.125rem]',
      small ? 'text-lg py-2 px-4' : 'text-2xl py-4 px-8',
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
