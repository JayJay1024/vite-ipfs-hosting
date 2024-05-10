import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <img alt="Pangolin" width={32} height={32} src="images/react.svg" />
      <span>This is Team Page</span>
      <Link to="/" className="underline">{`Home Page ->`}</Link>
    </>
  );
}
