import React from 'react'
import { DoctorDetailCard } from './DoctorDetailCard';
import DoctorData from "../DoctorData";

export const Pediatric = (props) => {
  const PediatriccData = DoctorData.filter((doctor) => doctor.type === "Pediatric");

  return (
    <>
      {PediatriccData.map((doctor) => (
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
