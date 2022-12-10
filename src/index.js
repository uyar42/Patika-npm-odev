import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  const types = [props.type]
  console.log(types)

  return (

<div style={{marginLeft:"600px",marginTop:"60px",}}>
      {types.map((typ, index) => (
        <button key={index} className={styles[typ]}>
          {props.children}
        </button>
      ))}
</div>

  )
}
