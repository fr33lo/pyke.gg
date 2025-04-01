import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BuildCard from '@/components/builds/BuildCard';
import PatchNotesSummary from '@/components/patch-notes/PatchNotesSummary';
import ProMatchCard from '@/components/pro-players/ProMatchCard';

// This would normally come from your API or CMS
const featuredBuilds = [
  {
    id: '1',
    title: 'Ultimate Support Pyke',
    author: 'PykeKing',
    authorRank: 'Challenger',
    patch: '14.7',
    role: 'Support',
    difficulty: 3,
    upvotes: 2458,
    coreItems: [
      { itemId: 3179, name: 'Youmuu\'s Ghostblade', image: 'youmuus_ghostblade.png' },
      { itemId: 6693, name: 'Prowler\'s Claw', image: 'prowlers_claw.png' },
      { itemId: 3071, name: 'Black Cleaver', image: 'black_cleaver.png' },
      { itemId: 3814, name: 'Edge of Night', image: 'edge_of_night.png' },
    ]
  },
  // Add more builds...
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-background.jpg"
              alt="Pyke Background"
              fill
              style={{objectFit: 'cover'}}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-red-500">pyke.gg</span>
              </h1>
              <h2 className="text-3xl font-semibold mb-6">Master the Bloodharbor Ripper</h2>
              <p className="text-xl mb-8">
                Your ultimate resource for dominating as Pyke in any role, with proven builds, matchup guides, and advanced techniques from the world's best Pyke players.
              </p>
              <div className="flex space-x-4">
                <Link href="/builds" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  Latest Builds
                </Link>
                <Link href="/combos" className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                  Learn Combos
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Current Meta Builds */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Current Meta Builds</h2>
              <Link href="/builds" className="text-red-400 hover:text-red-300 transition">
                Explore All Builds →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBuilds.map((build) => (
                <BuildCard key={build.id} {...build} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Grid */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Patch Notes Impact</h2>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Patch 14.7 Changes</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-4">
                    <h4 className="text-green-400 font-bold mb-2">Buffed</h4>
                    <ul className="list-disc list-inside text-gray-300">
                      <li>Base AD increased from 62 to 64</li>
                      <li>Q cooldown reduced at later ranks</li>
                      <li>E dash speed increased by 5%</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-gray-400 font-bold mb-2">Itemization Updates</h4>
                    <p className="text-gray-300">
                      Lethality items were rebalanced this patch, shifting power from burst to mobility. Umbral Glaive received a cost reduction.
                    </p>
                  </div>
                  
                  <div className="bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg p-4">
                    <h4 className="text-blue-400 font-bold mb-2">Meta Shift</h4>
                    <p className="text-gray-300">
                      The support meta has shifted toward engage supports, favoring Pyke's playstyle in the current patch.
                    </p>
                  </div>
                </div>
                
                <Link href="/patch-notes" className="inline-block mt-6 text-red-400 hover:text-red-300 transition">
                  View Full Patch Analysis →
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Guide & Pro Matches */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Guide */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Featured Guide</h2>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/featured-guide-thumbnail.jpg"
                      alt="Roaming Support Guide"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-2xl font-bold">Roaming Support 101</h3>
                      <p className="text-gray-300">by PykeKing</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300 mb-4">
                      Learn how to impact the map as Pyke support through optimal roam timings and vision control.
                    </p>
                    <Link href="/guides/roaming-support-101" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition inline-block">
                      Watch Guide
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Recent Pro Matches */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">Recent Pro Matches</h2>
                  <Link href="/pro-matches" className="text-red-400 hover:text-red-300 transition">
                    View More →
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {/* Pro Match 1 */}
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/pro-players/pro1.jpg"
                        alt="Pro Player 1"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Pro Player 1</h3>
                        <span className="text-green-400 text-sm">Victory</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">LCK</span>
                        <span className="text-sm">12 / 3 / 9</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pro Match 2 */}
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/pro-players/pro2.jpg"
                        alt="Pro Player 2"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Pro Player 2</h3>
                        <span className="text-green-400 text-sm">Victory</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">LCK</span>
                        <span className="text-sm">12 / 3 / 9</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pro Match 3 */}
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/pro-players/pro3.jpg"
                        alt="Pro Player 3"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Pro Player 3</h3>
                        <span className="text-green-400 text-sm">Victory</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">LCK</span>
                        <span className="text-sm">12 / 3 / 9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}