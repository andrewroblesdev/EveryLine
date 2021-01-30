import Lead from '../lead/lead';
import Editor from '../editor/editor';

const exampleCode = 
`// Fibonacci
function fib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}`    

export default function Header() {
  return(
    <div className="bg-everyBlue text-white pt-9">
      <div className="container mx-auto flex flex-col sm:flex-row sm:px-9">
        <div id="lead-text" className="px-3 w-full order-last mt-8 sm:mt-0 sm:order-first">
          <h2>Create coding tutorials quickly and effortlessly.</h2>
          <p className="pb-6">Everything you need in one streamlined platform.</p>
          <Lead />
        </div>
        <div id="the-editor" className="px-3 w-full">
          <Editor code={exampleCode}/>
        </div>
      </div>
      <div className="hidden sm:block -mt-12">
        <svg className="fill-current text-white" viewBox="0 0 620 20">
          <path d="M309.498577,0 C448.456725,0 567.858086,7.91580119 620,19.2377506 L620,20 L0,20 L6.39488462e-14,19.0221788 C52.6583865,7.81544934 171.424053,0 309.498577,0 Z"></path>
        </svg>
      </div>
    </div>
  )
}

