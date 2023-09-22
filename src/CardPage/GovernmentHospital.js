import React from 'react'
import GovernmentHospitalData from '../GovernmentHospitalData';
import { GovernmentHospitalPage } from './GovernmentHospitalPage';

export const GovernmentHospital = () => {
  return (
    <>
      {GovernmentHospitalData.map((government) => (
        <GovernmentHospitalPage
          key={government.id}
          hospitalname={government.hospitalName}
          hospitaladdress={government.hospitalAddress}
          hospitalcontact={government.hospitalContact}
        />
      ))}
    </>
  );
}
