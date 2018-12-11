import React from 'react'

import { Link as Anchor } from 'react-scroll'

const onPageBtn = props => (
  <Anchor
    to={props.to}
    spy={true}
    smooth={true}
    duration={700}
    className={`btn btn__${props.type} ${props.className}`}
  >
    <p className={`btn__${props.type}--text`}>{props.text}</p>
  </Anchor>
)

export default onPageBtn
