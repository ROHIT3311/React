import WithAuth from "../utils/WithAuth";

function Counter() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

const EnhnacedComponent = WithAuth(Counter);

export default EnhnacedComponent;
