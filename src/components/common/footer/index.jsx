import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#6f744f] text-[#eadfc8]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/footer/Packarena-Logo.webp" alt="Packarena" className="w-32 h-32 object-contain" />
              
            </div>
            <p className="text-[#eadfc8] leading-relaxed">
              From retail packaging to luxury rigid boxes, we've got everything you need to take your product to the next level.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-[#eadfc8]">
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li><a href="#" className="hover:underline">Free Sample Kit</a></li>
              <li><a href="#" className="hover:underline">Custom Quote</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Refund & Return Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-[#eadfc8]">
              <li>+1 (844) 831 3287</li>
              <li>inquiry@packarena.com</li>
              <li>9404 Niklaus Ln, Laurel, Maryland, 20708</li>
              <li>Office Timings: 8:00AM to 6:00PM (CST)</li>
              <li>Weekdays: Monday to Friday</li>
            </ul>
          </div>

          {/* Payment + Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/footer/Payment-Method-1.webp" className="h-8 object-contain" alt="pm-1" />
              <img src="/images/footer/Payment-visa.png" className="h-8 object-contain" alt="visa" />
              <img src="/images/footer/Payment-Method-3.png" className="h-8 object-contain" alt="pm-3" />
              <img src="/images/footer/Payment-Method-4.png" className="h-8 object-contain" alt="pm-4" />
            </div>

            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex items-center gap-3">
              <img src="/images/footer/fb.PNG" alt="facebook" className="w-8 h-8 rounded" />
              <img src="/images/footer/twit.PNG" alt="twitter" className="w-8 h-8 rounded" />
              <img src="/images/footer/in.PNG" alt="linkedin" className="w-8 h-8 rounded" />
              <img src="/images/footer/pin.PNG" alt="pinterest" className="w-8 h-8 rounded" />
              <img src="/images/footer/inst.PNG" alt="instagram" className="w-8 h-8 rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-white/90">
          © 2025 Pack Arena. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


