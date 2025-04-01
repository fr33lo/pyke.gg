// components/pro-players/ProMatchCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ProMatchCardProps = {
  playerName: string;
  league: string;
  result: 'Victory' | 'Defeat';
  kda: {
    kills: number;
    deaths: number;
    assists: number;
  };
  imageUrl?: string;
  matchId?: string;
};

export default function ProMatchCard({
  playerName = "Pro Player 1",
  league = "LCK",
  result = "Victory",
  kda = {
    kills: 12,
    deaths: 3,
    assists: 9
  },
  imageUrl = "/pro-players/default-player.jpg",
  matchId = "12345"
}: ProMatchCardProps) {
  
  const isVictory = result === 'Victory';
  
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center">
      <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4 relative">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={playerName}
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">{playerName}</h3>
          <span className={isVictory ? "text-green-400 text-sm" : "text-red-400 text-sm"}>
            {result}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{league}</span>
          <span className="text-sm">
            {kda.kills} / {kda.deaths} / {kda.assists}
          </span>
        </div>
      </div>
      
      {matchId && (
        <Link 
          href={`/matches/${matchId}`}
          className="ml-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs transition"
        >
          Details
        </Link>
      )}
    </div>
  );
}