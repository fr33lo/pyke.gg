import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="pyke.gg" width={36} height={36} />
              <span className="text-xl font-bold text-red-500">pyke.gg</span>
            </Link>
            <p className="text-gray-400 text-sm">
              The ultimate resource for Pyke players, providing builds, guides, matchups, and more.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v19.056c0 1.368-1.104 2.472-2.46 2.472H4.46C3.104 24 2 22.896 2 21.528V2.472C2 1.104 3.104 0 4.46 0h15.08zm-4.632 15.672c.384.504.864.756 1.44.756.96 0 1.632-.756 1.632-1.872 0-2.148-3.072-1.812-3.072-3.012 0-.4.264-.624.754-.624.396 0 .664.192.984.504l.744-.96c-.32-.396-.84-.684-1.632-.684-1.128 0-1.68.792-1.68 1.776 0 2.04 3.072 1.824 3.072 3.084 0 .36-.336.624-.84.624-.468 0-.816-.24-1.104-.6l-.768.996zM11.428 9.6c-.36-.318-.864-.516-1.428-.516-.72 0-1.332.252-1.824.756-.516.472-.768 1.116-.768 1.92 0 .78.246 1.425.768 1.908.504.492 1.128.744 1.848.744.564 0 1.032-.168 1.404-.504v.456h1.368V9.636h-1.368V9.6zm-.096 2.736c-.216.21-.468.318-.768.318-.408 0-.72-.126-.984-.378-.264-.252-.396-.564-.396-.936 0-.36.132-.672.384-.912.264-.252.576-.378.936-.378.348 0 .636.126.864.366v1.92zM5.64 8.184v3.348L3.288 8.184H1.56v5.904h1.56v-3.36l2.352 3.36h1.728V8.184H5.64z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/builds" className="text-gray-400 hover:text-white transition">Builds</Link></li>
              <li><Link href="/matchups" className="text-gray-400 hover:text-white transition">Matchups</Link></li>
              <li><Link href="/combos" className="text-gray-400 hover:text-white transition">Combos</Link></li>
              <li><Link href="/pro-players" className="text-gray-400 hover:text-white transition">Pro Players</Link></li>
              <li><Link href="/patch-notes" className="text-gray-400 hover:text-white transition">Patch Notes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.leagueoflegends.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">League of Legends</a></li>
              <li><a href="https://u.gg/lol/champions/pyke/build" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">U.GG</a></li>
              <li><a href="https://lolalytics.com/lol/pyke/build/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">LoLalytics</a></li>
              <li><a href="https://www.op.gg/champions/pyke/support/build" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">OP.GG</a></li>
              <li><a href="https://www.reddit.com/r/pykemains/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">r/pykemains</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest Pyke updates, builds, and guides.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button 
                type="submit" 
                className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} pyke.gg. All rights reserved.</p>
          <p className="mt-2">
            pyke.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}