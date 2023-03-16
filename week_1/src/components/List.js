import React from 'react'
import Title from './Title'
export default function List () {
  const arr = [
    {
      title: "India",
      id:1,
      description: "India is growing economy with huge youth power"
    },
    {
      title: "China",
      id:2,
      description: "China has cheap labour"
    },
    {
      title: "USA",
      id:3,
      description: "USA is superpower with great technology"
    }
  ]
  const render_arr = arr.map((item)=>
  (<Title key={item.title} data={item}/>)
  )
  return (
    <div>
      {render_arr}
    </div>
  )
}
