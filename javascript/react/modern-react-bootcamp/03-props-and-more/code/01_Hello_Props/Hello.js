class Hello extends React.Component {
  render() {
    const {to, from} = this.props;
    return <p>Well met, {to}.  From your friend, {from}.</p>
  }
}