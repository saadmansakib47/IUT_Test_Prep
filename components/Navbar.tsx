'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/mock-test', label: 'Mock Test' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-[#004B49] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">IUT TestPrep</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? 'bg-white text-[#004B49]'
                    : 'text-white hover:bg-white hover:text-[#004B49]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Sign In/Sign Up - Right Side */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/auth/sign-in"
              className="px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-[#004B49] rounded-md transition-all"
            >
              Sign In
            </Link>
            <Link
              href="/auth/sign-up"
              className="px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-[#004B49] rounded-md transition-all"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-all ${
                  isActive(link.href)
                    ? 'bg-white text-[#004B49]'
                    : 'text-white hover:bg-white hover:text-[#004B49]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/20">
              <Link
                href="/auth/sign-in"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-base font-medium text-white hover:bg-white hover:text-[#004B49] rounded-md transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/auth/sign-up"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-base font-medium text-white hover:bg-white hover:text-[#004B49] rounded-md transition-all"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
