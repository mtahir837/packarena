import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/config/api';
import toast from 'react-hot-toast';

const SignupModal = ({ isOpen, onClose, onSwitchToLogin, onSignupSuccess }) => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
      // Reset form when modal opens
      setFormData({
        name: '',
        email: '',
        password: ''
      });
      setTerms(false);
      setNewsletter(false);
    } else {
      handleCloseAnimation();
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCloseAnimation = () => {
    setIsClosing(true);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setIsSubmitting(true);

    try {
      let response;
      
      // Make API call
      try {
        response = await fetch(`${API_BASE_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });
      } catch (fetchError) {
        // Network error
        toast.error('Cannot connect to server. Please check if backend is running.');
        setIsSubmitting(false);
        return;
      }

      // Parse JSON response safely
      let result;
      let text = '';
      
      try {
        text = await response.text();
        
        // Check if response is empty
        if (!text || text.trim() === '') {
          toast.error('Server returned empty response. Please try again.');
          setIsSubmitting(false);
          return;
        }
        
        // Check if response is HTML (error page) - this prevents JSON parse error
        if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
          toast.error(`Backend server error (${response.status}). Please check your backend server.`);
          console.error('Received HTML instead of JSON:', text.substring(0, 200));
          setIsSubmitting(false);
          return;
        }
        
        
      } catch (textError) {
        // Error reading response text
        console.error('Error reading response:', textError);
        toast.error('Failed to read server response. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Handle error response from API
      if (!response.ok) {
        const errorMessage = result.message || result.error || `Signup failed (Status: ${response.status})`;
        toast.error(errorMessage);
        setIsSubmitting(false);
        return;
      }

      // Signup successful - check if user needs verification
      if (result.user) {
        if (result.user.isVerified === false) {
          toast.success(
            'Account created! Please check your email and click the verification link to activate your account.',
            { duration: 6000 }
          );
        } else {
          toast.success('Account created successfully!');
        }
      } else {
        // If user object not in response, check message
        if (result.message?.toLowerCase().includes('verify') || result.verifyToken) {
          toast.success(
            'Account created! Please check your email and click the verification link to activate your account.',
            { duration: 6000 }
          );
        } else {
          toast.success('Account created successfully!');
        }
      }
      
      // Close modal and notify parent
      handleCloseAnimation();
      
      // Optionally auto-login or switch to login
      if (onSignupSuccess) {
        onSignupSuccess(result.user || result);
      } else if (onSwitchToLogin) {
        // Auto-switch to login after successful signup
        setTimeout(() => {
          onSwitchToLogin();
        }, 300);
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: ''
      });
      setTerms(false);
      setNewsletter(false);
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(error.message || 'Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle autofill events separately
  const handleAutoFill = (e) => {
    const { name, value } = e.target;
    if (value && value !== formData[name]) {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible && !isClosing ? 'opacity-100 bg-black/50' : 'opacity-0 bg-black/0'
      }`}
      onClick={handleCloseAnimation}
    >
      <div 
        className={`bg-[#1a1a1a] rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden relative transform transition-all duration-300 ${
          isVisible && !isClosing ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseAnimation}
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
                  value={formData.name || ''}
                  onChange={handleChange}
                  autoComplete="name"
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
                  value={formData.email || ''}
                  onChange={handleChange}
                  onInput={handleAutoFill}
                  onBlur={handleAutoFill}
                  autoComplete="email"
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
                  value={formData.password || ''}
                  onChange={handleChange}
                  onInput={handleAutoFill}
                  autoComplete="new-password"
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

             

              {/* Create Account Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#808654] text-white font-bold py-3 rounded-lg hover:opacity-90 transition uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'CREATING ACCOUNT...' : 'CREATE AN ACCOUNT'}
              </button>

              {/* Sign In Link */}
              <div className="text-center text-sm text-gray-400">
                Have an Account Already?{' '}
                <button
                  type="button"
                  onClick={() => {
                    handleCloseAnimation();
                    setTimeout(() => onSwitchToLogin(), 300);
                  }}
                  className="text-[#808654] hover:underline"
                >
                  Signin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;

