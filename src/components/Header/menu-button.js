import React from 'react'

export default ({handleClick, open, status}) => (
  <button
    className={`menu-button ${status !== null ? (status ? 'open' : 'closed') : 'closed'}`}
    onClick={handleClick}
  >
    <b>{`${open ? 'X' : '≡'}`}</b>
  </button>
)
