import React from 'react';
import { withRouter } from 'react-router';
import './menuitem.scss'

export default withRouter(function Menuitems({title ,imageUrl , size , linkUrl , history , match}) {
    return (
        <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ 
    background : `url(${imageUrl})`}} />
          <div className='content'>
           <h1 className='title'>{title.toUpperCase()}</h1>
           <span className='subtitle'>Shop Now</span>
          </div>
        </div>
    )
})
