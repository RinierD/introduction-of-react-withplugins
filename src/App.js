import { useEffect, useState } from "react";
// import Button from "./Button";
import styles from "./App.module.css";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);

//   const [] = useState();
//   // const iRunOnlyOnce = () => {
//   //   console.log("I run once");
//   // };
//   // useEffect(iRunOnlyOnce, []);

//   // useEffect(() => {
//   //   console.log("Call the API");
//   // }, []);

//   useEffect(() => {
//     console.log("Only run once");
//   }, []);

//   useEffect(() => {
//     console.log("Only run once keyword is change");
//   }, [keyword]);

//   useEffect(() => {
//     console.log("Only run once counter is change");
//   }, [counter]);

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search Here..."></input>
//       <h1 className={styles.title}>Hi! Welcome Back</h1>
//       <h1>{counter}</h1>
//       <button onClick={onClick}> Click to Count </button>
//       {/* <Button text={"Click Me"} onClick={onClick} /> */}
//     </div>
//   );
// }

function Hello() {
  // const closeFN = () => {
  //   console.log("Closed!");
  // };

  // const openFN = () => {
  //   console.log("Show!");
  //   return closeFN;
  // };
  // useEffect(openFN, []);
  // return <h1>Hello</h1>;

  useEffect(() => {
    console.log("Hi :O");
    return () => console.log("bye :(");
  }, []);

  // useEffect(function () {
  //   console.log("Hi :O");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
