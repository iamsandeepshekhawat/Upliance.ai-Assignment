import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from '@heroui/react';

const UserForm = () => {
  const [action, setAction] = useState('');
  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormDirty) {
      e.preventDefault();
      e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isFormDirty]);


  interface FormData {
    name: string;
    address: string;
    email: string;
    phone: string;
    userId?: string;
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = Object.fromEntries(formData.entries()) as unknown as FormData;
    data.userId = `user-${Date.now()}`;
    localStorage.setItem('userData', JSON.stringify(data));
    setAction(`submit ${JSON.stringify(data)}`);
    setIsFormDirty(false);
  };

  return (
    <div className="backdrop-blur-sm bg-transparent p-6 border-2 border-white rounded-lg shadow-md">
      <Form
        className="w-full max-w-xs flex flex-col gap-4 bg-transparent"
        validationBehavior="native"
        onReset={() => {
          setAction("reset");
          setIsFormDirty(false);
        }}
        onSubmit={handleFormSubmit}
      >
        <Input
          className='border-2 border-gray-300 p-2 rounded-xl font-medium text-sm text-white'
          isRequired
          errorMessage="Please enter a valid name"
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
          type="text"
        />
        <Input
          className='border-2 border-gray-300 p-2 rounded-xl font-medium text-sm text-white'
          isRequired
          errorMessage="Please enter a valid address"
          label="Address"
          labelPlacement="outside"
          name="address"
          placeholder="Enter your address"
          type="text"
        />
        <Input
          className='border-2 border-gray-300 p-2 rounded-xl font-medium text-sm text-white'
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          className='border-2 border-gray-300 p-2 rounded-xl font-medium text-sm text-white'
          isRequired
          errorMessage="Please enter a valid phone number"
          label="Phone"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your phone number"
          type="tel"
        />
        <div className="items-center align-middle justify-center flex gap-2">
          <Button className = 'bg-white font-semibold p-2 rounded-lg'  type="submit">
            Submit
          </Button>
          <Button className = 'bg-white font-semibold p-2 rounded-lg'   type="reset" variant="flat">
            Reset
          </Button>
        </div>
        {action && (
          <div className="text-small border-2 border-white text-white  rounded-xl p-2 text-default-500 overflow-auto break-words">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </div>
  );
};

export default UserForm;