import React, { Component } from 'react';


class SectionSelect extends Component {
  render() {
    return (
      <section>
        { this.props.sectionContent }
      </section>
    );
  }
}

export default SectionSelect;
