import Link from 'next/link'

export default function Lead() {  
  return (
    <Link href="/demo">
      <a className="bg-everyYellow text-everyBlue text-sm px-4 py-2 rounded-lg">Try It Out</a>
    </Link>
  );
}
