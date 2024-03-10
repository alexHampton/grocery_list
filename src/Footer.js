import React from 'react'

const Footer = ({ length }) => {
    const today = new Date();
  return (
    <footer>
        {length} List {length === 1 ? "item" : "items"}
    </footer>
  )
}

export default Footer