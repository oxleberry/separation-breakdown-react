import React, { Component } from 'react';

class Overview extends Component {

  displyOverviewData = (type) => {
    let output = [];
    // Display all but the Reset button data
    for (var i = 0; i < this.props.buttons.length - 1; i++) {
      const data = this.props.buttons[i];
      if (type === 'label') {
        output.push(<div key={i} className={`overview-btn ${data.labelColor} ${data.inkColor}`}>{data.name}</div>);
      } else if (type === 'image') {
        output.push(<div key={i} className="img-container"><div className={`img-wrapper img${data.id}`}></div></div>);
      }
    }
    return output
  }

  render() {
    return (
      <section className="overview">
        <h2>OVERVIEW</h2>
        <div className="shirt-wrapper">
          <div className="ink-button-list">
            <div className="darkText overview-btn white">all</div>
            {this.displyOverviewData('label')}
          </div>
          <div className="overview-image-list">
            <div className="img-container"><div className="img-wrapper img-all"></div></div>
            {this.displyOverviewData('image')}
          </div>
        </div>
      </section>
    )
  }
}

export default Overview;
