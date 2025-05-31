export default function withAuth(Component) {
  const isAuthenticated = false;
  return (props) => {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <h1>Please Login for access</h1>;
    }
  };
}
