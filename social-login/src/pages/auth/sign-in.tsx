import React, { useState } from 'react';
import AuthLayout from '@/components/layout/AuthLayout';
import { GoogleLogin } from '@react-oauth/google';

interface SignInProps {}

const SignInPage = (props: SignInProps) => {
  const {} = props;

  const [checked, setChecked] = useState(false);

  return (
    <AuthLayout>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-48 mx-auto flex flex-wrap items-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default SignInPage;
