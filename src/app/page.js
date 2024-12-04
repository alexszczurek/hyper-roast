import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  const navItems = ['Plugins', 'Themes', 'GitHub', 'Download', 'Blog'];
  const osButtons = [
    { src: '/windows.svg', alt: 'Windows logo' },
    { src: '/linux.svg', alt: 'Linux logo' }
  ];
  const stats = [
    { icon: '/download.svg', label: 'Downloads', value: '1.24k' },
    { icon: '/star.svg', label: 'Rates', value: '4.9' },
    { icon: '/puzzle.svg', label: 'Extensions', value: '23' }
  ];
  const terminalColors = ['red', 'yellow', 'green'];

  return (
    <div className="flex justify-center min-h-screen bg-black" suppressHydrationWarning>
      <div className="w-full max-w-xl border-x border-gray-900 text-white">
        <nav className="flex items-center justify-between p-4 max-w-xl mx-auto">
          <div className="flex items-center space-x-2">
            <Image src="/logo-small.svg" alt="Hyper Logo" width={28} height={28} priority />
          </div>
          <div className="flex items-center font-mono space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item}
                href="#" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Link href="#" className="text-md text-white hover:text-gray-400 transition-colors">▲</Link>
          </div>
        </nav>

        <main className="max-w-xl mx-auto py-16">
          <div className="flex flex-col items-start space-y-8">
            <Image src="/hyper.svg" alt="Hyper Logo" width={48} height={48} priority />
            <div className="space-y-4 max-w-2xl">
              <p className="font-mono">
                → Hyper is an Electron-based terminal.
              </p>
              <p className="text-gray-400 max-w-md leading-relaxed font-mono">
                → Our goal is to deliver a <span className="text-white">beautiful</span>,
                extensible command-line interface <span className="text-white">built on</span>
                <span className="text-white"> open web standards</span>, prioritizing speed,
                stability, <span className="text-white">and a</span> robust API for extension
                developers.
              </p>
            </div>

            <div className="w-full max-w-2xl bg-[#2D1E2F] rounded-[10px] overflow-hidden min-h-[220px]">
              <div className="flex items-center space-x-2 px-4 py-2 bg-black/20">
                {terminalColors.map((color) => (
                  <div key={color} className={`w-3 h-3 rounded-full bg-${color}-500`} />
                ))}
              </div>
              <div className="p-4 font-mono">
                <span className="text-gray-400">→ ~ </span>
                <span className="text-pink-400"># npx</span>
                <span className="text-white"> create-next-app@latest</span>
              </div>
            </div>

            <div className="flex flex-col space-y-8 w-full">
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-white text-black font-mono rounded-[10px] flex items-center space-x-2 border border-neutral-800 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 hover:text-black">
                  <span>Download for macOS</span>
                </button>
                {osButtons.map((os) => (
                  <button key={os.alt} className="p-2 rounded-md">
                    <Image src={os.src} alt={os.alt} width={18} height={18} />
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 font-mono border-y border-gray-900">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={`flex flex-col items-right space-y-4 p-6 ${
                      index !== 2 ? 'border-r border-gray-900' : ''
                    }`}
                  >
                    <Image src={stat.icon} alt={stat.label} width={20} height={20} />
                    <div className="flex flex-col space-y-1">
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                      <span className="text-xl">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
