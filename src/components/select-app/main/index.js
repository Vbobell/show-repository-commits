import React, { Component } from 'react';
import SectionSelect from '../section';
import Select from '../select';
import RepositorySelected from '../repository-selected';
import RepositoryCommit from '../repository-commit';

class MainSelect extends Component {
  render() {
    return (
      <main>
        <SectionSelect sectionContent={<Select/>}/>
        <RepositorySelected/>
        <RepositoryCommit/>
      </main>
    );
  }
}

export default MainSelect;