import React from 'react'
import { tests } from "../testsData.js";
import Card from './Card.jsx';
const NationalCertificate = () => {
const national = tests.filter((t) => t.category === "national");
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {national.map((test) => (
        <Card key={test.id} {...test} />
      ))}
    </div>
  )
}

export default NationalCertificate