import './Admindashboard.css'
import MainDash from './MainDash/MainDash';
import RightSide from './RigtSide/RightSide';
import Sidebar from './Sidebar/Sidebar';

function Admindashboard() {
  return (
    <div className="">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default Admindashboard;
