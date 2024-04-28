import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <>
        <div className="card-header container mx-auto">
          <nav
            className="navbar"
            style={{ background: "", height: 65 }}
          >
            <div style={{ width: "100%" }} className="flex">
              <div className="">
                <img 
                  src="src/assets/fionezrofve.png" alt="" 
                  width="35%"
                  color="#CA8787"
                />
              </div>                       
              
            </div>
          </nav>
          <div className="mt-5"
            style={{
              height: "4px",
              width: "100%",
              border: "1px solid #948979",
              background: "#948979",
            }}
          ></div>
        </div>
      </>
    );
  }
  