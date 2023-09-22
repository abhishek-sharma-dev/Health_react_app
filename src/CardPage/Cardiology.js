import React from "react";
import { DoctorDetailCard } from "./DoctorDetailCard";
import DoctorData from "../DoctorData";

export const Cardiology = () => {

  const CardiologyData = DoctorData.filter((doctor) => doctor.type === "Cardiology");
  return (
    <>
      {CardiologyData.map((doctor) => (
        <DoctorDetailCard
          key={doctor.id}
          doctorimage={doctor.img}
          doctorname={doctor.doctorName}
          hospitalname={doctor.hospitalname}
          address={doctor.address}
          hospitallocation={doctor.hospitallocation}
          doctorcontact={doctor.contact}
          navigation={doctor.navLink}
        />
      ))}
    </>
  );
}


