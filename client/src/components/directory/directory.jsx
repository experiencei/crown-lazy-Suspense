import React from 'react';
import { connect } from 'react-redux';
import { selectDirectory } from '../../redux/directory/directorySelector';
import { DirectoryMenu } from './directory.styled';
import{ createStructuredSelector } from "reselect"
import Menuitems from '../Menu-item/menu-item';

function Directory({sections}) {  
    return (
      <DirectoryMenu>
      {sections.map(({id , ...otherprops}) =>
      <Menuitems key={id} {...otherprops}/> )}
      </DirectoryMenu>
    )
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectory
})



export default connect(mapStateToProps)(Directory)

    
        

