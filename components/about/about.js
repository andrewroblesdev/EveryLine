import '@fortawesome/fontawesome-free/js/all.js';

export default function About() {
  return(
    <div>
      <h2>Why EveryLine?</h2>
      <p>Making tutorials by manually writing code while screen recording is: </p>
      <section>
        <i className="fas fa-car-crash fa-2x"></i>
        <h3>Error Prone</h3>
        <p>Syntax errors or typos in code can be overlooked and make the uploaded final cut</p>
      </section>

      <section>
        <i className="fas fa-hourglass-half fa-2x"></i>
        <h3>Time consuming</h3>
        <p>Having to do multiple takes or excessive preplanning can be time costly</p>
      </section>

      <section>
        <i className="fas fa-trash-alt fa-2x"></i>
        <h3>Not Reusable</h3>
        <p>Video footage of code cannot be altered to be used for other tutorials</p>
      </section>
    </div>
  )
}
