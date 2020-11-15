class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the DOM element
    this.nameEl = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.nameEl.current.value);
  }

  render() {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" ref={nameEl} />
            <input type="password" placeholder="password" ref={passwordEl} />
            <button type="submit" className="myButton">Login</button>
        </form>
    )
  }
}