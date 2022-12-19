import "./App.css";
// import AdminRoutes from "./AdminRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home/Home";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Eventadmin from "./pages/admin/Event/Event";
import Event from "./pages/public/Events/Event"
import Keytalk from "./pages/admin/Keytalk/Keytalk";
import Sponsor from "./pages/admin/Sponsor/Sponsor";
import Faq from "./pages/admin/Faq/Faq";
import TeamMember from "./pages/admin/TeamMember/TeamMember";
import Webinar from "./pages/admin/Webinar/Webinar";
import Workshop from "./pages/admin/Workshop/Workshop";
import  OldSponsor from "./pages/public/Sponsors/Sponsor";
// import Navbar from "./components/admin/Navbar/Navbar";
function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/sponsor" element={<OldSponsor />} />
                  <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/event" element={<Eventadmin />} />
                    <Route path="/admin/faq" element={<Faq />} />
                    <Route path="/admin/webinar" element={<Webinar />} />
                    <Route path="/admin/workshop" element={<Workshop />} />
                    <Route path="/admin/sponsor" element={<Sponsor />} />
                    <Route path="/admin/teamMember" element={<TeamMember />} />
                    <Route path="/admin/keytalk" element={<Keytalk />} />
                </Routes>
            </BrowserRouter>
            {/* <Layout> */}
            {/* </Layout> */}
        </div>
    );
}

export default App;
