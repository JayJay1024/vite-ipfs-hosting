import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <img alt="Pangolin" width={24} height={24} src="images/react.svg" className="w-6 h-6 shrink-0 rounded-full" />
      <span>This is Home Page</span>
      <Link to="/team" className="underline">{`Team Page ->`}</Link>
    </>
  );
}
