import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">© 2024 Rajat Singh Tomar. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" />
            <SocialLink href="mailto:contact@example.com" icon={<Mail />} label="Email" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);