import React from 'react'

export default function Title(props) {
  return (
    <div>
        <h3>{props.data.id} {props.data.title}</h3>
        <h3> {props.data.description}
        </h3>
    </div>
  )
}
