import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [value, setValue] = useState(0);
  const prevValue = useRef(null);
  console.log(prevValue);
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return (
    <>
      <h2>{prevValue.current}</h2>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((value) => value + 1);
        }}
      >
        Click
      </button>
    </>
  );
}

// export default function UseRef() {
//   const [value, setValue] = useState(0);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setCount((count) => count + 1);
//   });
//   return (
//     <>
//       <button
//         onClick={() => {
//           setValue((value) => value - 1);
//         }}
//       >
//         -1
//       </button>
//       <h1>{value}</h1>
//       <button
//         onClick={() => {
//           setValue((value) => value + 1);
//         }}
//       >
//         +1
//       </button>
//       <h1>Render Count : {count}</h1>
//     </>
//   );
// }

// import { useEffect, useRef, useState } from "react";

// export default function UseRef() {
//   const [value, setValue] = useState(0);
//   const count = useRef(0);

//   useEffect(() => {
//     count.current += 1;
//   });

//   console.log(count);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setValue((value) => value - 1);
//         }}
//       >
//         -1
//       </button>
//       <h1>{value}</h1>
//       <button
//         onClick={() => {
//           setValue((value) => value + 1);
//         }}
//       >
//         +1
//       </button>
//       <h1>{count.current}</h1>
//     </>
//   );
// }
