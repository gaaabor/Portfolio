import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

const onPageBtn = props => (
  <Link to={props.to} className={`link ${props.block}__link`}>
    <p className="btn__text">{props.text}</p>
  </Link>
)

export default onPageBtn

onPageBtn.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}
