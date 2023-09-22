import React from 'react'
import MedicalStoresData from '../MedicalStoresData'
import { MedicalStoresPage } from './MedicalStoresPage'

export const MedicalStores = () => {

  const medicalStore = MedicalStoresData.filter((medical) => medical.type === "medicalStore")
  return (
    <>
      {medicalStore.map((medical) => (
        <MedicalStoresPage
          key={medical.id}
          medicalname={medical.name}
          medicaladdress={medical.address}
          medicalcontact={medical.contact}
          medicalsiteLink={medical.siteLink}
        />
      ))}
    </>
  );
}
