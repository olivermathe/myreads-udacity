import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography
} from "@material-ui/core";

const HomeHeader = props => {
  return(
    <AppBar position='fixed'>
      <Toolbar>
        <Typography 
          variant='title' 
          color='inherit' 
          align='justify'
        >
          <div>My Reads</div>
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default HomeHeader;