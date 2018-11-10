import React from 'react'
import PropTypes from 'prop-types'

import { Link as Anchor } from 'react-scroll'

const Button = props => (
  <Anchor
    to={props.to}
    spy={true}
    smooth={true}
    duration={700}
    className={props.btn}
  >
    <p className="btn__text">{props.text}</p>
  </Anchor>
)

export default Button

Button.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}
