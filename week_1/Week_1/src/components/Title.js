import React from 'react'

export default function Title({data}) {
  return (
    <div>
        <h3>{data.id} {data.title}</h3>
        <h3> {data.description}
        </h3>
    </div>
  )
}
