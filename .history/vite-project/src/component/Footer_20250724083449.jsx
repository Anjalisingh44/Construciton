import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-sky-50 to-white text-[#374151] text-sm py-12 px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="md:col-span-1">
          <p className="mb-6">
            Curabitur consequat, purus a scelerisque sagittis, nulla metus
            tincidunt elit, vel venenatis nulla libero nec nulla. Suspendisse
            potenti. Aenean a justo vel sapien pellentesque tincidunt. Sed
            luctus, elit ac interdum convallis, ligula libero egestas orci, at
            auctor felis ligula nec odio.
          </p>
          <div class="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4332.799576004748!2d85.34976514831939!3d27.655575277686594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb110030ce3c9f%3A0x911b6ca5253287a6!2sTikathali!5e1!3m2!1sen!2snp!4v1753325171512!5m2!1sen!2snp"
    class="w-full h-full border-0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>

          <div className="flex space-x-4">
            <a href="#" className="text-lime-600 hover:text-lime-900 text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-lime-500 hover:text-lime-900 text-xl">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Product links */}
        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="space-y-2">
            <li><a href="#">Payments</a></li>
            <li><a href="#">Invoice Factoring</a></li>
            <li><a href="#">Invoice finance</a></li>
            <li><a href="#">Supplier finance</a></li>
            <li><a href="#">Customer finance</a></li>
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Resources links */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#">Frequently asked questions</a></li>
            <li><a href="#">Knowledge base</a></li>
            <li><a href="#">API documentation</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-[#6B7280] gap-3 border-t border-gray-200 pt-6">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-black">Privacy policy</a>
          <a href="#" className="hover:text-black">Contact us</a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-black">Site map</a>
          <a href="#" className="hover:text-black">@ebpearls</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
