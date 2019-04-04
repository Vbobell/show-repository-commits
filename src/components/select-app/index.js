import React, { Component } from 'react';
import HeaderSelect from './header';
import MainSelect from './main';

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
