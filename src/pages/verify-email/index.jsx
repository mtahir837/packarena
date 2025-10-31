import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TopHeader from '@/components/topHeader';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { API_BASE_URL } from '@/config/api';
import toast from 'react-hot-toast';

const VerifyEmailPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState('loading'); // loading, success, error, expired
  const [message, setMessage] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (token && typeof token === 'string') {
      verifyEmailToken(token);
    } else if (!token) {
      setStatus('error');
      setMessage('Verification token is missing. Please check your email for the verification link.');
    }
  }, [token]);

  const verifyEmailToken = async (verifyToken) => {
    setIsVerifying(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: verifyToken }),
      });

      // Parse JSON response safely
      let result;
      try {
        const text = await response.text();
        result = text ? JSON.parse(text) : {};
      } catch (jsonError) {
        setStatus('error');
        setMessage('Invalid response from server. Please try again.');
        setIsVerifying(false);
        return;
      }

      if (!response.ok) {
        // Handle different error cases
        if (result.message?.toLowerCase().includes('expired') || result.message?.toLowerCase().includes('expiry')) {
          setStatus('expired');
          setMessage(result.message || 'Verification token has expired. Please request a new verification email.');
        } else if (result.message?.toLowerCase().includes('invalid') || result.message?.toLowerCase().includes('not found')) {
          setStatus('error');
          setMessage(result.message || 'Invalid verification token. Please check your email again.');
        } else {
          setStatus('error');
          setMessage(result.message || result.error || 'Verification failed. Please try again.');
        }
        toast.error(result.message || 'Verification failed');
        setIsVerifying(false);
        return;
      }

      // Success
      if (result.message || result.user) {
        setStatus('success');
        setMessage(result.message || 'Email verified successfully! You can now login.');
        toast.success('Email verified successfully!');
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setStatus('success');
        setMessage('Email verified successfully!');
        toast.success('Email verified successfully!');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
      toast.error('Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendEmail = async () => {
    // This would typically require the user's email
    // For now, we'll just show a message
    toast.info('Please sign up again to receive a new verification email.');
    router.push('/signup');
  };

  return (
    <>
      <Head>
        <title>Verify Email - Packarena</title>
      </Head>
      <TopHeader />
      <Header />
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {status === 'loading' && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#808654] mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying Email...</h2>
                <p className="text-gray-600">Please wait while we verify your email address.</p>
              </div>
            )}

            {status === 'success' && (
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Verified!</h2>
                <p className="text-gray-600 mb-6">{message}</p>
                <p className="text-sm text-gray-500">Redirecting to login page...</p>
                <button
                  onClick={() => router.push('/login')}
                  className="mt-4 w-full bg-[#808654] text-white font-bold py-3 rounded-lg hover:opacity-90 transition uppercase"
                >
                  Go to Login
                </button>
              </div>
            )}

            {status === 'expired' && (
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Token Expired</h2>
                <p className="text-gray-600 mb-6">{message}</p>
                <button
                  onClick={handleResendEmail}
                  className="w-full bg-[#808654] text-white font-bold py-3 rounded-lg hover:opacity-90 transition uppercase mb-3"
                >
                  Request New Verification Email
                </button>
                <button
                  onClick={() => router.push('/login')}
                  className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition"
                >
                  Back to Login
                </button>
              </div>
            )}

            {status === 'error' && (
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h2>
                <p className="text-gray-600 mb-6">{message}</p>
                <button
                  onClick={handleResendEmail}
                  className="w-full bg-[#808654] text-white font-bold py-3 rounded-lg hover:opacity-90 transition uppercase mb-3"
                >
                  Request New Verification Email
                </button>
                <button
                  onClick={() => router.push('/login')}
                  className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition"
                >
                  Back to Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VerifyEmailPage;

