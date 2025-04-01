import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="pyke.gg" width={40} height={40} />
          <span className="text-2xl font-bold text-red-500">pyke.gg</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/builds" className="hover:text-red-400 transition">Builds</Link>
          <Link href="/matchups" className="hover:text-red-400 transition">Matchups</Link>
          <Link href="/combos" className="hover:text-red-400 transition">Combos</Link>
          <Link href="/pro-players" className="hover:text-red-400 transition">Pro Players</Link>
          <Link href="/patch-notes" className="hover:text-red-400 transition">Patch Notes</Link>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2">
          <nav className="flex flex-col space-y-2">
            <Link href="/builds" className="py-2 hover:text-red-400 transition">Builds</Link>
            <Link href="/matchups" className="py-2 hover:text-red-400 transition">Matchups</Link>
            <Link href="/combos" className="py-2 hover:text-red-400 transition">Combos</Link>
            <Link href="/pro-players" className="py-2 hover:text-red-400 transition">Pro Players</Link>
            <Link href="/patch-notes" className="py-2 hover:text-red-400 transition">Patch Notes</Link>
          </nav>
        </div>
      )}
    </header>
  );
}