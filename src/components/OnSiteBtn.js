import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

const onPageBtn = props => (
  <Link to={props.to} className={`btn btn__${props.type} ${props.className}`}>
    <p className={`btn__${props.type}--text`}>{props.text}</p>
  </Link>
)

export default onPageBtn

onPageBtn.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}
