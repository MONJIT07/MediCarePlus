import React from 'react';
import logo from '../assets/logo.png';
import { footerStyles } from '../assets/dummyStyles';
import { 
  Stethoscope, 
  Activity, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Send
} from 'lucide-react';

// Custom SVG Icons for Social Media (Safe from lucide-react brand removals)
const FacebookIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const TwitterIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const InstagramIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const LinkedinIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const YoutubeIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Appointments", href: "/appointments" },
  ];

  const services = [
    { name: "Blood Pressure Check", href: "/services" },
    { name: "Blood Sugar Test", href: "/services" },
    { name: "Full Blood Count", href: "/services" },
    { name: "X-Ray Scan", href: "/services" },
    { name: "Medical Consultation", href: "/services" }, 
  ];

  // Dummy safe links for social media
  const socialLinks = [
    { Icon: FacebookIcon, name: "Facebook", href: "https://facebook.com" },
    { Icon: TwitterIcon, name: "Twitter", href: "https://twitter.com" },
    { Icon: InstagramIcon, name: "Instagram", href: "https://instagram.com" },
    { Icon: LinkedinIcon, name: "LinkedIn", href: "https://linkedin.com" },
    { Icon: YoutubeIcon, name: "YouTube", href: "https://youtube.com" },
  ];

  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.floatingIcon1}>
        <Stethoscope className={footerStyles.stethoscopeIcon} />
      </div>
      <div
        className={footerStyles.floatingIcon2}
        style={{
          animationDelay: "3s",
        }}
      >
        <Activity className={footerStyles.activityIcon} />
      </div>

      <div className={footerStyles.mainContent}>
        <div className={footerStyles.gridContainer}>
          
          {/* Column 1: Company Info Section */}
          <div className={footerStyles.companySection}>
            <div className={footerStyles.logoContainer}>
              <div className={footerStyles.logoWrapper}>
                <div className={footerStyles.logoImageContainer}>
                  <img
                    src={logo}
                    alt="logo"
                    className={footerStyles.logoImage}
                  />
                </div>
              </div>
              <div>
                <h2 className={footerStyles.companyName}>MediCare</h2>
                <p className={footerStyles.companyTagline}>
                  Healthcare Solutions
                </p>
              </div>
            </div>

            <p className={footerStyles.companyDescription}>
              Your trusted partner in healthcare innovation. We're committed
              to providing exceptional medical care with cutting-edge technology
              and compassionate service.
            </p>

            <div className={footerStyles.contactContainer}>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <Phone className={footerStyles.contactIcon} />
                </div>
                {/* Updated with your Phone Number */}
                <span className={footerStyles.contactText}>8638505906</span>
              </div>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <Mail className={footerStyles.contactIcon} />
                </div>
                {/* Updated with your Email */}
                <span className={footerStyles.contactText}>monjittamuli7777@gmail.com</span>
              </div>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <MapPin className={footerStyles.contactIcon} />
                </div>
                {/* Updated with your Location */}
                <span className={footerStyles.contactText}>Silchar, Assam</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links Section */}
          <div className={footerStyles.linksSection}>
            <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
            <ul className={footerStyles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={link.name} className={footerStyles.linkItem}>
                  <a
                    href={link.href}
                    className={footerStyles.quickLink}
                    style={{
                      animationDelay: `${index * 60}ms`,
                    }}
                  >
                    <div className={footerStyles.quickLinkIconWrapper}>
                      <ArrowRight className={footerStyles.quickLinkIcon} />
                    </div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Section */}
          <div className={footerStyles.linksSection}>
            <h3 className={footerStyles.sectionTitle}>Our Services</h3>
            <ul className={footerStyles.linksList}>
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className={footerStyles.serviceLink}>
                    <div className={footerStyles.serviceIcon}></div>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected (Newsletter & Socials) */}
          <div className={footerStyles.newsletterSection || "flex flex-col gap-4"}>
            <h3 className={footerStyles.sectionTitle}>Stay Connected</h3>
            <p className={footerStyles.newsletterText || "text-teal-800 text-sm mb-2"}>
              Subscribe for health tips, medical updates, and wellness insights delivered to your inbox.
            </p>
            
            <form className={footerStyles.subscribeForm || "relative flex items-center bg-white rounded-full p-1 shadow-sm mb-4"}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={footerStyles.emailInput || "w-full bg-transparent outline-none px-4 text-sm text-gray-700"} 
              />
              <button 
                type="submit" 
                className={footerStyles.subscribeButton || "bg-teal-600 hover:bg-teal-700 text-white rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors"}
              >
                <Send className="w-4 h-4" /> Subscribe
              </button>
            </form>

            <div className={footerStyles.socialContainer || "flex items-center gap-3 mt-2"}>
              {socialLinks.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerStyles.socialLink || "bg-white p-2 rounded-xl shadow-sm text-teal-600 hover:-translate-y-1 transition-transform"}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Section (Copyright & Designer) from Screenshots */}
        <div className={footerStyles.bottomSection}>
          <div className={footerStyles.copyright}>
            <span>&copy; {currentYear} MediCare Healthcare.</span>
          </div>
          
          <div className={footerStyles.designerText}>
            <span>Designed by </span>
            <a
              href="https://github.com/MONJIT07"
              target="_blank"
              rel="noopener noreferrer"
              className={footerStyles.designerLink}
            >
              MONJIT07
            </a>
          </div>
        </div>
      </div>
      
      <style>{footerStyles.animationStyles}</style>
    </footer>
  );
};

export default Footer;