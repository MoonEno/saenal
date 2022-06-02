import React from 'react'

function CategoryBox({content}) {

  return (
    <a href="#" className="box">
        <img src={content.icon} alt="" />
        <p>{content.category}</p>
    </a>
  )
}

export default CategoryBox;