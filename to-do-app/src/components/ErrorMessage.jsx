function ErrorMessage() {
  let fruits = ["Mango", "Apple", "Orange"];
  return <>{fruits.length === 0 ? <h2>Not Available</h2> : null}</>;
}

export default ErrorMessage;
