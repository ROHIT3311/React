import withAuth from "../../utils/withAuth";

function DashBoard() {
  return <h1>Welcome to Dashboards</h1>;
}

export default withAuth(DashBoard);
