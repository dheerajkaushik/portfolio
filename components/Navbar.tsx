"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Code, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', name: 'Home', icon: Home },
  { path: '/projects', name: 'Projects', icon: Code },
  { path: '/about', name: 'About', icon: User },
  { path: '/contact', name: 'Contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 p-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-2xl shadow-slate-900/50">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-4 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-slate-800 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <span className="hidden md:block text-sm font-medium">{item.name}</span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}