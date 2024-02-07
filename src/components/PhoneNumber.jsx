/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import toast from 'react-hot-toast';

const PhoneNumber = ({ user, setIsPhoneAvailable }) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const formhandler = async (e) => {
    e.preventDefault();
    const dataRef = doc(db, 'users', user.uid, 'userData', 'details');

    if (phoneNumber && phoneNumber.length >= 10) {
      await setDoc(dataRef, {
        phoneNumber: phoneNumber,
      });

      setIsPhoneAvailable(true);

      toast.success('Added your number successfully!');
    } else {
      toast.error('Add a valid number!');
    }
  };

  return (
    <section className="my-4 p-4 flex flex-col gap-y-2 bg-slate-300 rounded-lg w-full">
      <h2>Link your phone number</h2>
      <form className="flex gap-4">
        <label>
          <input
            className="h-full rounded-lg pl-4"
            placeholder="Enter your phone number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <Button small type="submit" onClick={formhandler}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export default PhoneNumber;
