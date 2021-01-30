import Link from 'next/link'

export default function Lead() {  
  return (
    <Link href="/demo">
      <button className="bg-everyYellow text-everyBlue w-full sm:w-auto text-sm px-4 py-2 rounded">Try It Out</button>
    </Link>
  );
}
