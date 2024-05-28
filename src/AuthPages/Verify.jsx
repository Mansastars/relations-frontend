import React, { useEffect, useState } from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import api from '../api';
import TokenExpirationHandler from './TokenExpirationHandler';

function Verify() {
  const { verificationToken } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('pending');

  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try{
        const res = await api.get(`users/verify/${verificationToken}`)
        console.log(res);
        if (res.data.status === "success") {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error){
        console.log(error);
        setVerificationStatus('error');
      }
    };
    verifyToken();
  }, [verificationToken]);

  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full">

        {verificationStatus === 'pending' && (
          <p className="text-center text-dark-blue">Verifying your account...</p>
        )}

        {verificationStatus === 'success' && (
          <div className="text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-500 text-2xl font-semibold">Verification successful!</p>
            <p className=" text-dark-blue mt-3">You can now continue using our services.</p>

            <button
            className=' px-5 py-3 mt-10 bg-mansa-blue text-white font-semibold rounded transition-all duration-200 shadow hover:bg-dark-blue'
            onClick={() => {navigate('/auth/login')}}
            >
              Log In
            </button>
          </div>
        )}

        {verificationStatus === 'error' && (
          <div className="text-center">
            <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="text-red-500 text-2xl font-semibold">Verification failed!</p>
            <p
            className=" text-dark-blue mt-5"
            >
              Please try logging in again or contact support
              at <a href="mailto:service@mansastars.com" className=' text-mansa-blue'>service@mansastars.com</a>.
            </p>
            <button
            className=' px-5 py-3 mt-10 bg-mansa-blue text-white font-semibold rounded transition-all duration-200 shadow hover:bg-dark-blue'
            onClick={() => {navigate('/auth/login')}}
            >
              Log In
            </button>
          </div>
        )}

        {/* <TokenExpirationHandler token={verificationToken} /> */}

      </div>
    </div>
  )
}

export default Verify