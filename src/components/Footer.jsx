import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" text-white pt-16 pb-6">
      {/* Testimonial Section */}
      <div className=" py-10 px-4 text-center">
        <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
          <div className="flex gap-1 text-yellow-400 text-2xl justify-center mb-2">
            {Array.from({length: 5}).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            "ATTENDING IEEE-RAIT EVENTS HAS BEEN A TRANSFORMATIVE EXPERIENCE FOR
            MY CAREER. THE INSIGHTS AND CONNECTIONS I GAINED ARE INVALUABLE."
          </blockquote>
          <div className="flex items-center gap-3 justify-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Sudhanshu Yadav"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-medium">Sudhanshu Yadav</div>
              <div className="text-sm text-gray-200">
                Software Engineer.
              </div>
            </div>
            <span className="mx-2">|</span>
            <span className="text-gray-200 font-medium flex items-center gap-1">
              <span>IEEE</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className=" text-black py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 rounded-2xl p-8 text-white bg-black border border-white/20">
          
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1 text-sm">
              <li>Workshops</li>
              <li>Articles</li>
              <li>Tech News</li>
              <li>Latest Tech</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Connect With Us</div>
            <ul className="space-y-1 text-sm">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Projects</li>
              <li>Get Involved</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Stay Updated</div>
            <ul className="space-y-1 text-sm">
              <li>Newsletter</li>
              <li>Events</li>
              <li>Tech Talks</li>
              <li>Workshops</li>
              <li>Resources</li>
            </ul>
            <div className="font-semibold mt-6 mb-2">Subscribe</div>
            <form className="flex gap-2 mb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md px-3 py-2 text-sm bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition"
              >
                Subscribe
              </button>
            </form>
            <div className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 pt-6 text-xs text-gray-300 gap-2">
        <div>© 2025 IEEE-RAIT. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
        </div>
        <div className="flex gap-4 text-lg mt-2 md:mt-0">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>

          
        </div>
        
      </div>
      <div className="text-right text-gray-400 text-xs mt-4">
           <a href="https://www.linkedin.com/in/sudhanshu-yadav-devloper/">Build By - Sudhanshu Yadav </a>
          </div>
    </footer>
  );
}
