import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import tailwindLogo from '@/assets/tailwind.svg'
import tsLogo from '@/assets/tslogo.svg'

export default function Logo() {

  interface LogoInfo {
    src: string;
    url: string;
    alt: string;
  }


  //todo typescript 적용시 props validation 적용
  const logoInfo: LogoInfo[] = [
    { src: viteLogo, url: 'https://vitejs.dev', alt: 'Vite logo' },
    { src: reactLogo, url: 'https://vitejs.dev', alt: 'Vite logo' },
    { src: tsLogo, url: 'https://www.typescriptlang.org', alt: 'type scripts logo' },
    { src: tailwindLogo, url: 'https://vitejs.dev', alt: 'Vite logo' },
  ]

  function LogoList() {
    return (
      logoInfo.map((logoProps, index) =>
        <LogoItem {...logoProps} key={index} ></LogoItem >
      )
    )
  }

  function LogoItem({ src, url, alt }: LogoInfo) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="group">
        <img
          src={src}
          className="w-24 h-24 object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-12"
          alt={alt}
        />
      </a>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b text-white p-4 min-h">

      <div className="flex space-x-8 mb-8">
        <LogoList></LogoList>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
        Vite + React + TypeScript + Tailwind
      </h1>
      <p className="text-lg text-gray-300 text-center">
        A powerful combination for building fast and scalable web applications.
      </p>
    </div>
  )
}