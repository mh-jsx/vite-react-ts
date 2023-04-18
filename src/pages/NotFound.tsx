import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <Link className="underline" to="/">
        GO HOME
      </Link>
    </>
  );
}

export default NotFound;
