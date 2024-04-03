import { Routes, Route, Link} from "react-router-dom";
import  Signin from './components/Auth/Signin';
import  VolunteerRegister from './components/Auth/VolunteerRegister'
import OrganizerRegister from "./components/Auth/OrganizerRegister";
import Annonces from "./components/Organizer/Annonces";
import CreateAnnonces from "./components/Organizer/CreateAnnonces";
import EditAnnounces from "./components/Organizer/EditAnnounces";
import AllAnnounces from "./components/Volunteer/AllAnnounces";
import MyVolunteers from "./components/Volunteer/MyVolunteers";
function App() {
  return (
    <div className="bg-sky-50 h-screen">
      <div className="px-52 bg-sky-100 shadow-sky-100 shadow-xl mx-auto flex justify-between items-center py-3">
        <div className="text-4xl font-bold font-serif">YouCare</div>
        <div className="flex gap-4">
            <Link to="/signin" className="bg-black text-white font-medium hover:text-black hover:bg-white hover:border-black border-2 rounded-md duration-500 px-6 py-2">
                Sign In
            </Link>
            <Link to="/VolunteerRegister" className="bg-white text-black font-medium  border-black hover:bg-black hover:border-white border-2  hover:text-white rounded-md duration-500 px-6 py-2">
                Sign Up
            </Link>
        </div>
      </div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/OrganizerRegister" element={<OrganizerRegister />} />
        <Route path="/VolunteerRegister" element={<VolunteerRegister />} />
        <Route path="/annonces" element={<Annonces />} />
          <Route path="/CreateAnnonces" element={<CreateAnnonces />} />
          <Route path="/EditAnnounces" element={<EditAnnounces />} />
          <Route path="/AllAnnounces" element={<AllAnnounces />} />
          <Route path="/MyVolunteers" element={<MyVolunteers />} />
      </Routes>
    </div>
  );
}

export default App;
