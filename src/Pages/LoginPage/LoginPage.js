import React from 'react';
import InfoSide from './Components/InfoSide';
import FormSide from './Components/FormSide';

const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen">
    <div className="h-1/3">
      <InfoSide />
    </div>
    <div className="h-2/3">
      <FormSide />
    </div>
  </div>
  );
};

export default LoginPage;