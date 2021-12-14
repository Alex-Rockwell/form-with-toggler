import { Component } from 'react'
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import {StRoot, StToolbar, StMenuButton, StTitle, StGrow, StSearch, StSearchIcon, StAppBar, StInputBase} from './CustomComponents'
import france from './img/france.png'

class Navbar extends Component {
  render() {
    return (
      <StRoot>
        <StAppBar position='static' color='primary'>
          <StToolbar>
            <StMenuButton color='inherit'>
              <span style={{marginRight: '10px'}}><img src={france} height={'20px'}/></span>
              <StTitle variant='h6' color='inherit'>
                Text
              </StTitle>
              <Switch />
            </StMenuButton>
          </StToolbar>
          <StGrow></StGrow>
          <StSearch>
            <StSearchIcon>
              <SearchIcon />
            </StSearchIcon>
            <StInputBase placeholder='Search...'/>
          </StSearch>
        </StAppBar>
      </StRoot>
    )
  }
}
export default Navbar