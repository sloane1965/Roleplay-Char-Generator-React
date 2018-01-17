import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class CharacterBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Surname:
          <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        </label>
        <label>
          Race:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Sex:
          <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        </label>
        <label>
          Class:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Subclass:
          <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        </label>
        <label>
          Weight:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Age:
          <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        </label>
        <label>
          Backstory:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Hair Color:
          <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        </label>
        <label>
          Eye Color:
          <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        </label>
		<label>
		Character Bio:
        <textarea cols="30" rows="10" value={this.state.value} onchange={this.handleChange} /> <br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CharacterBio;