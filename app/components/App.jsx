import React from 'react';
import View from 'reapp-kit';

export default React.createClass({
  render() {
    var { photos } = this.state;

    return (
      <View title="Flickr Search" styles={{ inner: { padding: 20 } }}>
        <p>Hello World</p>
      </View>
    );
  }
});