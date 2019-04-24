import React, { Component } from 'react';
import HeaderSelect from './header';
import MainSelect from './main';

import './../index.scss';

class AppSelect extends Component {
  render() {
    return (
      <>
        <HeaderSelect/>
        <MainSelect/>
      </>
    );
  }
}

export default AppSelect;
