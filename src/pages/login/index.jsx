import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TopHeader from '@/components/topHeader';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      router.back();
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  return (
    <>
      <Head>
        <title>Login | PackArena</title>
        <meta name="description" content="Log in to your PackArena account" />
      </Head>
      <TopHeader />
      <Header />
      
      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible && !isClosing ? 'opacity-100 bg-black/50' : 'opacity-0 bg-black/0'
        }`}
        onClick={handleClose}
      >
        <div 
          className={`bg-[#1a1a1a] rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden relative transform transition-all duration-300 ${
            isVisible && !isClosing ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white text-[#1a1a1a] px-4 py-2 rounded border border-gray-300 font-semibold text-sm hover:bg-gray-100 transition z-10"
          >
            X CLOSE
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            {/* Left Section - Info */}
            <div className="bg-gradient-to-br from-[#2d3325] to-[#1a1a1a] p-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Log in to</span>
                <br />
                <span className="text-[#808654]">your account</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                By accessing your account, you can track and manage your orders and save multiple addresses for a smoother checkout experience.
              </p>
            </div>

            {/* Right Section - Form */}
            <div className="bg-[#1a1a1a] p-10 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#808654]"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-[#808654]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {showPassword ? (
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </>
                      ) : (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <a href="#" className="text-gray-400 hover:text-[#808654] text-sm">
                    Forgot Password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-[#808654] text-white font-bold py-3 rounded-lg hover:opacity-90 transition uppercase"
                >
                  LOGIN
                </button>

                {/* Create Account */}
                <div className="text-center text-sm text-gray-400">
                  New to PackArena?{' '}
                  <Link href="/signup" className="text-[#808654] hover:underline font-medium">
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginPage;

