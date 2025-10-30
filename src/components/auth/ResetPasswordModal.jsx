import React, { useState, useEffect, useRef } from 'react';

const ResetPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const otpInputRefs = useRef([]);

  const handleCloseAnimation = () => {
    setIsClosing(true);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
      setShowOtpScreen(false);
      setEmail('');
      setOtp(['', '', '', '', '', '']);
      document.body.style.overflow = 'hidden';
    } else {
      handleCloseAnimation();
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (showOtpScreen && resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showOtpScreen, resendCountdown]);

  useEffect(() => {
    if (showOtpScreen && otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }
  }, [showOtpScreen]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Send OTP to email
    console.log('Sending OTP to:', email);
    setShowOtpScreen(true);
    setResendCountdown(38);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    console.log('Verifying OTP:', otpCode);
    // Handle OTP verification
  };

  const handleResendCode = () => {
    if (resendCountdown === 0) {
      setResendCountdown(38);
      // Resend OTP logic
      console.log('Resending OTP to:', email);
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
              <span className="text-white">Reset</span>
              <br />
              <span className="text-[#808654]">Password</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              By accessing your Account you can track and manage your orders and also save multiple addresses.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#1a1a1a] p-10 flex flex-col justify-center">
            {!showOtpScreen ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
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

                {/* Send Link Button */}
                <button
                  type="submit"
                  className="w-full bg-[#808654] text-white font-bold py-3 rounded-lg hover:opacity-90 transition uppercase"
                >
                  SEND LINK
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-6">
                {/* OTP Inputs */}
                <div className="flex justify-center gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpInputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-12 text-center text-xl font-semibold bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#808654]"
                    />
                  ))}
                </div>

                {/* Verify OTP Button */}
                <button
                  type="submit"
                  className="w-full bg-[#808654] text-white font-bold py-3 rounded-lg hover:opacity-90 transition uppercase"
                >
                  Verify OTP
                </button>

                {/* Resend Code */}
                <div className="text-center text-sm text-gray-400">
                  {resendCountdown > 0 ? (
                    <span>Resend code in {resendCountdown}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendCode}
                      className="text-[#808654] hover:underline"
                    >
                      Resend code
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;

