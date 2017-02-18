  //CHILD
  // Whenever the button is clicked we'll add to the child's click count.
  // Then use the parent's setParent function to set that as well.
  handleClick: function() {
    // this.setState is ansynchronous for performance reasons. To ensure that the
    // setParent function get the updated number in time we will pass it the newNumber variable
    var newNumber = this.state.number + 1;
    this.setState({
      number: newNumber
    });
    this.props.setParent(newNumber);
  },
  //PARENT
    // We will give the Child component access to this function by passing it as a prop
  setParent: function(user) {
    this.setState({
      login: user
    });
  },
  <Child setParent={this.setParent} />
 // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ clicks: this.state.clicks + 1 });
  },
  <Child clicks={this.state.clicks} />
  //CHILD
  <h1>{this.props.clicks * 2}</h1>