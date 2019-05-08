import React from 'react';

class HobbyList extends React.Component {
  render() {
    const style = {fontSize: '1.5em'};
    return (
              <ul>
                <li style={style}>Sleeping</li>
                <li style={style}>Eating</li>
              </ul>
  )}
}

export default HobbyList