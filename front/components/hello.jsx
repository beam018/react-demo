var React = require('react')

class Hello extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Hello, {this.props.count}!</div>
    );
  }
}

export default Hello;
