import React from 'react'
import MedicalStoresData from '../MedicalStoresData'
import { GenericMedicalPage } from './GenericMedicalPage'

export const GenericMedical = () => {

  const medicalStore = MedicalStoresData.filter((medical) => medical.type === "genericMedical")

  return (
    <>
    {medicalStore.map((medical) => (
        <GenericMedicalPage
          key={medical.id}
          medicalname={medical.name}
          medicaladdress={medical.address}
          medicalcontact={medical.contact}
          medicalsiteLink={medical.siteLink}
        />
      ))}
    </>
  )
}
