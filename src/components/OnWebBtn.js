import React from 'react'
import PropTypes from 'prop-types'

const onPageBtn = props => (
  <a
    href={props.to}
    target="_blank"
    className={`link ${props.block}__link`}
    rel="noopener noreferrer"
  >
    <p className="btn__text">{props.text}</p>
  </a>
)

export default onPageBtn

onPageBtn.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}
