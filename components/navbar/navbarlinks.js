import Link from 'next/link'

export default function Navbarlinks() {
  return (
    <ul className="flex w-full sm:justify-end text-white items-baseline">
      <Link href="/"><a className="px-3 italic text-everyYellow hover:text-white">Why EveryLine?</a></Link>
      <Link href="/demo"><a className="px-3 hover:text-everyYellow">Try it out</a></Link>
      <Link href="/"><a className="px-2 hover:text-everyYellow">Log in</a></Link>
      <Link href="/"><a className="px-2 hover:text-everyYellow">Sign up</a></Link>
    </ul>
  )
}
