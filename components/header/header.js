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
        <div id="lead-text" className="px-3 w-full order-last sm:order-first">
          <h2>Create coding tutorials quickly and effortlessly.</h2>
          <p className="pb-6">Everything you need in one streamlined platform.</p>
          <Lead />
        </div>
        <div id="the-editor" className="px-3 w-full">
          <Editor code={exampleCode}/>
        </div>
      </div>
      <div id="white-curve" className="whitecurves">
      </div>
    </div>
  )
}
