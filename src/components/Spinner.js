import React from 'react'
import loading from './loading.gif'

export default function spinner() {
  return (
    <div>
      <img src={loading} alt="loading"/>
    </div>
  )
}
