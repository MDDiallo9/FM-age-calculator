import "./App.css";
import { intervalToDuration } from "date-fns";
import Form from "./components/Form";

let result = intervalToDuration({
  start: new Date(1997, 3, 1),
  end: Date.now(),
});

function App() {
  console.log(result);
  return (
    <>
      {/* <h1>
        <p>{result.years} years</p>
        <p>{result.months} months</p>
        <p>{result.days} days</p>
      </h1> */}
      <Form />
    </>
  );
}

export default App;
