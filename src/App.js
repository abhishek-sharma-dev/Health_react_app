// import logo from './logo.svg';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import { Navbar } from "./Component/Navbar";
import { Container } from "./Component/Container";
import { Footer } from "./Component/Footer";
import { Cardiology } from "./CardPage/Cardiology";
import { About } from "./NavbarItem/About";
import { Service } from "./NavbarItem/Service";
import { Contact } from "./NavbarItem/Contact";
import { Orthopedic } from "./CardPage/Orthopedic";
import { Gastroenterology } from "./CardPage/Gastroenterology";
import { Neurology } from "./CardPage/Neurology";
import { EntSurgeon } from "./CardPage/EntSurgeon";
import { ObstetricianAndGynaecologist } from "./CardPage/ObstetricianAndGynaecologist";
import { Homeopathic } from "./CardPage/Homeopathic";
import { Pathology } from "./CardPage/Pathology";
import { Pediatric } from "./CardPage/Pediatric";
import { DoctorPage } from "./CardPage/DoctorPage";
import { GovernmentHospital } from "./CardPage/GovernmentHospital";
import { MedicalStores } from "./CardPage/MedicalStores";
import { Disease } from "./CardPage/Disease";
import { BottomNavbar } from "./Component/BottomNavbar";
import { RegistrationForm } from "./Component/RegistrationForm";
import { GenericMedical } from "./CardPage/GenericMedical";
import { ForDoctorRegistration } from "./Component/ForDoctorRegistration";
import { checkIsAuthenticated, getJwtTokenFromCookie } from "../src/utils";

function App() {
  
  useEffect(() => {
    const token = getJwtTokenFromCookie();

    const isAuthenticated = checkIsAuthenticated(token);

    console.log({ isAuthenticated, token });
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={true} />
      <BottomNavbar />
      <div className="app-container">
        <Routes>
          {/* ------------------------------Login and Registration Form--------------------------------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route
            path="/DoctorRegistration"
            element={<ForDoctorRegistration />}
          />
          {/* ------------------------------Navbar items--------------------------------- */}
          <Route path="/" element={<Container />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Service" element={<Service />} />

          {/* ------------------------------BottomNavbar items--------------------------------- */}
          <Route path="/Disease" element={<Disease />} />

          <Route path="/MedicalStores" element={<MedicalStores />} />
          <Route path="/GenericMedical" element={<GenericMedical />} />
          <Route path="/GovernmentHospital" element={<GovernmentHospital />} />

          {/* ------------------------------Disease Card items--------------------------------- */}
          {/* <Route path="/GeneralPhysician" element={<GeneralPhysician />} /> */}

          <Route path="/Cardiology" element={<Cardiology />} />
          <Route path="/DoctorPage" element={<DoctorPage />} />
          <Route path="/Orthopedic" element={<Orthopedic />} />
          <Route path="/Gastroenterology" element={<Gastroenterology />} />
          <Route path="/Neurology" element={<Neurology />} />
          <Route path="/EntSurgeon" element={<EntSurgeon />} />
          <Route
            path="/ObstetricianAndGynaecologist"
            element={<ObstetricianAndGynaecologist />}
          />
          <Route path="/Homeopathic" element={<Homeopathic />} />
          <Route path="/Pathology" element={<Pathology />} />
          <Route path="/Pediatric" element={<Pediatric />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
