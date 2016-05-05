var React = require('react')

class Hello extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>Hello, {this.props.name}!</div>
  }
}

export default Hello;
