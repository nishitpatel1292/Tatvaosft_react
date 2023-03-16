import React from 'react'
import '../Title.css'
export default function Title(props) {
  return (
    <>
        <h3 className='title'>{props.data.id} {props.data.title}</h3>
        <h3 className='desc'> {props.data.description}
        </h3>
    </>
  )
}
