import React from 'react'
import { tests } from "../testsData.js";
import Card from './Card.jsx';
const UniversityTest = () => {
  
    const university = tests.filter((t) => t.category === "university");
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {university.map((test) => (
        <Card key={test.id} {...test} />
      ))}
    </div>
  )
}

export default UniversityTest