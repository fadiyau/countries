import "../../src/App.css"
import Countries from "./data";
// import { Link } from "react-router-dom";
import Navbar from "./navbar";


export default function Homepage() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Countries />
    </>
  );
}