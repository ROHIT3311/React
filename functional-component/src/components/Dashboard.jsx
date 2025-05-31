import EnhnacedComponent from "./Counter";

function Dashboard({ flag, render }) {
  return (
    <>
      <EnhnacedComponent />
      {render(flag)}
    </>
  );
}

export default Dashboard;
