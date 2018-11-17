import React from 'react'
import PropTypes from 'prop-types'

import { Link as Anchor } from 'react-scroll'

const onPageBtn = props => (
  <Anchor
    to={props.to}
    spy={true}
    smooth={true}
    duration={700}
    className={`link ${props.block}__link`}
  >
    <p className="link__text">{props.text}</p>
  </Anchor>
)

export default onPageBtn

onPageBtn.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}
