import Image from 'next/image';
import Link from 'next/link';

type BuildCardProps = {
  id: string;
  title: string;
  author: string;
  authorRank: string;
  patch: string;
  role: string;
  difficulty: number;
  upvotes: number;
  coreItems: Array<{
    itemId: number;
    name: string;
    image: string;
  }>;
};

export default function BuildCard({
  id,
  title,
  author,
  authorRank,
  patch,
  role,
  difficulty,
  upvotes,
  coreItems
}: BuildCardProps) {
  return (
    <Link href={`/builds/${id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
        <div className="p-4">
          <h3 className="text-xl font-bold text-red-400">{title}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-400">By {author} ({authorRank})</span>
            <span className="text-sm text-gray-400">Patch {patch}</span>
          </div>
          
          <div className="mt-4">
            <h4 className="text-gray-300 mb-2">Core Items:</h4>
            <div className="flex space-x-2">
              {coreItems.map((item) => (
                <div key={item.itemId} className="relative" title={item.name}>
                  <Image
                    src={`/items/${item.image}`}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <span className={`px-2 py-1 rounded text-xs ${
                role === 'Support' ? 'bg-blue-900 text-blue-300' :
                role === 'Mid' ? 'bg-purple-900 text-purple-300' :
                'bg-green-900 text-green-300'
              }`}>
                {role}
              </span>
              <span className="ml-2 text-sm text-gray-400">
                Difficulty: {'★'.repeat(difficulty)}{'☆'.repeat(5-difficulty)}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              {upvotes}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}