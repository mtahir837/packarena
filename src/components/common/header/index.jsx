import React, { useState } from 'react';
import Link from 'next/link';
import LoginModal from '@/components/auth/LoginModal';
import SignupModal from '@/components/auth/SignupModal';
import ResetPasswordModal from '@/components/auth/ResetPasswordModal';

const NavItem = ({ label, submenu, href }) => (
  <div className="relative group">
    {href && !submenu ? (
      <Link href={href} className="flex items-center gap-2 text-[#eadfc8] hover:text-white font-semibold text-base sm:text-lg cursor-pointer">
        {label}
      </Link>
    ) : (
      <button className="flex items-center gap-2 text-[#eadfc8] hover:text-white font-semibold text-base sm:text-lg cursor-pointer">
        {label}
        {submenu && <span className="text-[#eadfc8]">▾</span>}
      </button>
    )}
    {submenu && (
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150 absolute left-0 top-full mt-0 min-w-[170px] bg-white rounded-lg shadow-lg py-3 z-50">
        {submenu.map((item, idx) => (
          item.href ? (
            <Link key={idx} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold cursor-pointer">
              {item.label}
            </Link>
          ) : (
            <a key={idx} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold cursor-pointer">
              {item.label}
            </a>
          )
        ))}
      </div>
    )}
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [resetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);
  
  return (
    <div className="bg-gradient-to-r from-[#8c8e59] to-[#3d4330] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 sm:gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/">
            <img src="/images/header/Packarena-Logo.webp" alt="Packarena" className="md:w-32 md:h-32 w-12 h-12 object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Nav - desktop */}
        <nav className="hidden md:flex items-center gap-6 ml-2 sm:ml-4">
          <NavItem label="Home" href="/" />
          <NavItem
            label="Custom Boxes"
            submenu={[
              { label: 'Mailer Boxes' },
              { label: 'Rigid Boxes' },
              { label: 'Candle Boxes' },
              { label: 'Soap Boxes' },
            ]}
          />
          <NavItem
            label="Styles"
            submenu={[
              { label: 'Sleeves' },
              { label: 'Display' },
              { label: 'Pillow' },
              { label: 'Drawer' },
            ]}
          />
          <NavItem
            label="Box Industries"
            submenu={[
              { label: 'Cosmetics' },
              { label: 'Food & Beverage' },
              { label: 'Retail' },
              { label: 'Electronics' },
            ]}
          />
          <NavItem
            label="Resources"
            submenu={[
              { label: 'About Us', href: '/about-us' },
              { label: 'Contact Us', href: '/contact-us' },
            ]}
          />
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden ml-auto text-[#eadfc8]" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Search */}
        <div className="hidden md:flex ml-auto items-center">
          <div className="bg-white rounded-full flex items-center px-4 py-2 w-[280px] lg:w-[320px]">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-500"
            />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* Cart */}
          <button
            type="button"
            className="relative ml-4 text-[#eadfc8] cursor-pointer"
            onClick={() => { setCartVisible(true); setTimeout(() => setCartOpen(true), 0); }}
            aria-label="Open cart"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] leading-none px-1.5 py-0.5 rounded-full">0</span>
          </button>

          {/* Sign In */}
          <button
            onClick={() => setLoginModalOpen(true)}
            className="ml-4 text-[#eadfc8] hover:text-white font-semibold text-sm px-4 py-2 rounded-md border border-[#eadfc8] hover:bg-white/10 transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
            <Link href="/" className="block text-gray-800 font-semibold">Home</Link>
            <div>
              <div className="text-gray-800 font-semibold mb-1">Custom Boxes</div>
              <div className="pl-3 space-y-1 text-sm text-gray-700">
                <a className="font-bold block cursor-pointer">Mailer Boxes</a>
                <a className="font-bold block cursor-pointer">Rigid Boxes</a>
                <a className="font-bold block cursor-pointer">Candle Boxes</a>
                <a className="font-bold block cursor-pointer">Soap Boxes</a>
              </div>
            </div>
            <div>
              <div className="text-gray-800 font-semibold mb-1">Styles</div>
              <div className="pl-3 space-y-1 text-sm text-gray-700">
                <a className="font-bold block cursor-pointer">Sleeves</a>
                <a className="font-bold block cursor-pointer">Display</a>
                <a className="font-bold block cursor-pointer">Pillow</a>
                <a className="font-bold block cursor-pointer">Drawer</a>
              </div>
            </div>
            <div>
              <div className="text-gray-800 font-semibold mb-1">Box Industries</div>
              <div className="pl-3 space-y-1 text-sm text-gray-700">
                <a className="font-bold block cursor-pointer">Cosmetics</a>
                <a className="font-bold block cursor-pointer">Food & Beverage</a>
                <a className="font-bold block cursor-pointer">Retail</a>
                <a className="font-bold block cursor-pointer">Electronics</a>
              </div>
            </div>
            <div>
              <div className="text-gray-800 font-semibold mb-1">Resources</div>
              <div className="pl-3 space-y-1 text-sm text-gray-700">
                <a className="font-bold block cursor-pointer">About Us</a>
                <a className="font-bold block cursor-pointer">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartVisible && (
        <>
          <div
            className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${cartOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setCartOpen(false)}
          />
          <aside
            className={`fixed top-0 right-0 h-screen w-[360px] max-w-[90%] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onTransitionEnd={() => { if (!cartOpen) setCartVisible(false); }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div className="font-semibold">Cart</div>
              <button
                aria-label="Close cart"
                className="p-1 rounded hover:bg-gray-100"
                onClick={() => setCartOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6 text-sm text-gray-700">
              No products in the cart.
            </div>
          </aside>
        </>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSwitchToSignup={() => setSignupModalOpen(true)}
        onForgotPassword={() => setResetPasswordModalOpen(true)}
      />

      {/* Signup Modal */}
      <SignupModal
        isOpen={signupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        onSwitchToLogin={() => setLoginModalOpen(true)}
      />

      {/* Reset Password Modal */}
      <ResetPasswordModal
        isOpen={resetPasswordModalOpen}
        onClose={() => setResetPasswordModalOpen(false)}
      />
    </div>
  );
};

export default Header;


