import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FooterLink2 } from "../../../data/footer-links";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../common/motionFrameVarients";
import styles from "./ImprovedFooter.module.css";
import { 
  ImGithub, 
  ImLinkedin2, 
  ImFacebook2, 
  ImTwitter, 
  ImYoutube,
  ImInstagram 
} from "react-icons/im";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowUp,
  FiHeart 
} from "react-icons/fi";

// Images
import StudyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";

// Footer data
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];

const socialLinks = [
  { icon: ImFacebook2, href: "https://facebook.com/beeja", color: "hover:text-blue-500", name: "Facebook" },
  { icon: ImTwitter, href: "https://twitter.com/beeja", color: "hover:text-blue-400", name: "Twitter" },
  { icon: ImLinkedin2, href: "https://linkedin.com/company/beeja", color: "hover:text-blue-600", name: "LinkedIn" },
  { icon: ImGithub, href: "https://github.com/beeja", color: "hover:text-gray-400", name: "GitHub" },
  { icon: ImYoutube, href: "https://www.youtube.com/@beejachennai", color: "hover:text-red-500", name: "YouTube" },
  { icon: ImInstagram, href: "https://instagram.com/beeja", color: "hover:text-pink-500", name: "Instagram" },
];

const contactInfo = [
  { icon: FiMail, text: "info@beejaacademy.com", href: "mailto:info@beejaacademy.com" },
  { icon: FiPhone, text: "9150274222", href: "tel:+9150274222" },
  { icon: FiMapPin, text: "No.2, 2nd Floor, Gokul Arcade Sardar Patel Road, Adyar, Chennai - 600020", href: "https://www.google.com/maps/place/Beeja+Academy/@12.956588,80.23958,905m/data=!3m1!1e3!4m6!3m5!1s0x3a525d17a2d0336b:0x7e844a0c331cb391!8m2!3d12.9578009!4d80.2403847!16s%2Fg%2F11rkx4c5m6?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D" },
];

const ImprovedFooter = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${styles.footerContainer} relative theme-footer-bg mx-4 sm:mx-6 lg:mx-7 rounded-3xl mb-6 lg:mb-10 overflow-hidden`}>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="w-11/12 max-w-maxContent mx-auto pt-12 pb-8">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 border-b theme-border">
            
            {/* Brand Section */}
            <motion.div 
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className={`${styles.brandSection} lg:col-span-4 space-y-6`}
            >
              <div className="space-y-4">
                <img 
                  src={StudyNotionLogo}
                  alt="Beeja Logo" 
                  className="h-8 sm:h-10 object-contain" 
                />
                <p className="theme-footer-text text-sm sm:text-base leading-relaxed max-w-md">
                  Elevate your knowledge journey with Beeja. Learn, grow, and transform your future with our cutting-edge educational platform.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h3 className="theme-footer-text font-semibold text-lg">Get in Touch</h3>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className={`${styles.footerLink} flex items-center gap-3 theme-footer-text hover:text-yellow-50 transition-colors duration-300 text-sm group`}
                    >
                      <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h3 className="theme-footer-text font-semibold text-lg">Follow Us</h3>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`${styles.socialIcon} p-3 rounded-full theme-footer-text ${social.color} transition-all duration-300 group cursor-pointer shadow-md hover:shadow-lg`}
                      style={{ backgroundColor: 'var(--social-icon-bg)' }}
                      title={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FooterLink2.map((section, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn('up', 0.1 + i * 0.1)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="theme-footer-text font-semibold text-lg border-b theme-border pb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.links.map((link, index) => (
                      <Link
                        key={index}
                        to={link.link}
                        className="block theme-footer-text hover:text-yellow-50 transition-all duration-300 text-sm hover:translate-x-1 group"
                      >
                        <span className="border-b border-transparent group-hover:border-yellow-50 transition-all duration-300">
                          {link.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="py-8 border-b theme-border"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="theme-footer-text font-semibold text-xl mb-2">
                  Stay Updated
                </h3>
                <p className="theme-footer-text text-sm">
                  Subscribe to our newsletter for the latest courses and updates
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 theme-bg-secondary theme-border border rounded-lg theme-text-primary placeholder-gray-400 focus:outline-none focus:border-yellow-50 transition-colors duration-300 flex-1 lg:w-64"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 theme-button-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-[#B784F3]/25 dark:hover:shadow-[#12D8FA]/25 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4"
          >
            <div className={`${styles.bottomLinks} flex flex-wrap items-center justify-center lg:justify-start gap-1 text-sm`}>
              {BottomFooter.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={item.split(" ").join("-").toLowerCase()}
                    className={`${styles.footerLink} px-3 py-1 theme-footer-text hover:text-yellow-50 transition-colors duration-300`}
                  >
                    {item}
                  </Link>
                  {index < BottomFooter.length - 1 && (
                    <span className="theme-text-secondary">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className={`${styles.copyrightInfo} flex items-center gap-4 text-sm theme-footer-text`}>
              <span className="flex items-center gap-1">
                Made with <FiHeart className="text-red-500 w-4 h-4" /> by Beeja Team
              </span>
              <span>© {new Date().getFullYear()} Beeja. All rights reserved.</span>
            </div>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};

export default ImprovedFooter;
