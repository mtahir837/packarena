import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TopHeader from '@/components/topHeader';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

const SignupPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
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
    // Handle signup logic here
    console.log('Signup:', { ...formData, terms, newsletter });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Create Account | PackArena</title>
        <meta name="description" content="Create your PackArena account" />
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
                <span className="text-white">Create your new </span>
                <span className="text-[#808654]">account</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                By accessing your Account you can track and manage your orders and also save multiple addresses.
              </p>
            </div>

            {/* Right Section - Form */}
            <div className="bg-[#1a1a1a] p-10 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#808654]"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#808654]"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
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

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#2a2a2a] text-[#808654] focus:ring-[#808654]"
                      required
                    />
                    <span className="text-gray-300 text-sm">
                      By contacting us, you agree to our Terms & Conditions and Privacy Policy.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#2a2a2a] text-[#808654] focus:ring-[#808654]"
                    />
                    <span className="text-gray-300 text-sm">
                      Keep me updated about news, promotions and events. Signing up with us.
                    </span>
                  </label>
                </div>

                {/* Create Account Button */}
                <button
                  type="submit"
                  className="w-full bg-[#808654] text-white font-bold py-3 rounded-lg hover:opacity-90 transition uppercase"
                >
                  CREATE AN ACCOUNT
                </button>

                {/* Sign In Link */}
                <div className="text-right text-sm text-gray-400">
                  Have an Account Already?{' '}
                  <Link href="/login" className="text-[#808654] hover:underline">
                    Signin
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

export default SignupPage;

