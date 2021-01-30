import Link from 'next/link'
import Image from 'next/image'
import Navbarlinks from './navbarlinks'

export default function Navbar(props) {
  return(
    <header className="bg-everyBlue text-white p-3">
      <div className="container mx-auto sm:grid sm:grid-cols-4 sm:gap-4">
        <div id="logo-wrapper" className="sm:col-span-1 pb-3 sm:pb-0">
          <div className="h-12 w-40 mx-auto sm:mx-0 relative">
            { !props.isPlaying && <Link href="/"><a><Image src="/logo.png" layout="fill" className="object-cover" alt="EveryLine logo"/></a></Link>}
          </div>
          <p className="text-everyYellow font-roboto text-xs w-46 mx-auto sm:mx-0 text-center sm:text-left">Animate your Coding Tutorials</p>
        </div>
        
        <nav className="sm:col-end-5 sm:col-span-2 flex self-center">
          <Navbarlinks />
        </nav>
      </div>
    </header>
  )
}

