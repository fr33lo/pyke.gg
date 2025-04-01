// components/patch-notes/PatchNotesSummary.tsx
import React from 'react';
import Link from 'next/link';

type PatchChange = {
  type: 'buff' | 'nerf' | 'bugfix' | 'adjustment';
  description: string;
};

type PatchNotesProps = {
  version?: string;
  changes?: PatchChange[];
  showLink?: boolean;
};

export default function PatchNotesSummary({ 
  version = "14.7", 
  changes = [
    { type: 'buff', description: 'Base AD increased from 62 to 64' },
    { type: 'buff', description: 'Q cooldown reduced at later ranks' },
    { type: 'buff', description: 'E dash speed increased by 5%' }
  ],
  showLink = true 
}: PatchNotesProps) {
  
  const getChangeColor = (type: string) => {
    switch(type) {
      case 'buff': return 'bg-green-900 text-green-400';
      case 'nerf': return 'bg-red-900 text-red-400';
      case 'bugfix': return 'bg-blue-900 text-blue-400';
      case 'adjustment': return 'bg-yellow-900 text-yellow-400';
      default: return 'bg-gray-900 text-gray-400';
    }
  };
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-3">Patch {version} Changes</h3>
        
        <ul className="space-y-2 mb-4">
          {changes.map((change, index) => (
            <li key={index} className={`px-3 py-2 rounded ${getChangeColor(change.type)}`}>
              {change.description}
            </li>
          ))}
        </ul>
        
        {showLink && (
          <Link href={`/patch-notes/${version}`} className="text-red-400 hover:text-red-300 transition inline-flex items-center">
            View Full Patch Notes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}