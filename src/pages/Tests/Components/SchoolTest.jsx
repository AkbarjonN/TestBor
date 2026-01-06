import React from 'react'
import { tests } from "../testsData.js";
import Card from './Card.jsx';
const SchoolTest = () => {
  const school = tests.filter((t) => t.category === "school");
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {school.map((test) => (
        <Card key={test.id} {...test} />
      ))}
    </div>
  )
}

export default SchoolTest