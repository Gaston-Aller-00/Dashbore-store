import { useState } from "react";
import {
  RiAddLine,
  RiUser3Line,
  RiMenu3Fill,
  RiPieChartLine,
  RiCloseLine,
} from "react-icons/ri";
//componentes
import SideBar from "./components/shared/SideBar";
function App() {
  // states
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  // functions
  // change visivility of menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <SideBar showMenu={showMenu} />
        {/* menu movil */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl ">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button className="p-2">
            <RiPieChartLine />
          </button>
          <button onClick={toggleMenu} className="text-white  p-2 ">
            {showMenu ?  <RiCloseLine/> : <RiMenu3Fill/>}
           
          </button>
        </nav>
      </div>
    </>
  );
}

export default App;
