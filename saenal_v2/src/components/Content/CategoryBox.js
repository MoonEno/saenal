import React from 'react'

function CategoryBox({content, clickCategoryBox, curIdx}) {

  return (
    <a className={'box ' + (curIdx === (content.order-1) ? 'active':'')} onClick={()=> clickCategoryBox(content.order)}>
        <img src={content.icon} alt="" />
        <p>{content.category}</p>
    </a>
  )
}

export default CategoryBox;