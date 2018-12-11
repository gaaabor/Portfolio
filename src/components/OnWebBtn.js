import React from 'react'

const onPageBtn = props => (
  <a
    href={props.to}
    target="_blank"
    className={`btn btn__${props.type} ${props.className}`}
    rel="noopener noreferrer"
  >
    <p className={`btn__${props.type}--text`}>{props.text}</p>
  </a>
)

export default onPageBtn
