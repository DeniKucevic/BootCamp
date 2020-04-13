import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      number: "",
      phoneBook: [
        { name: "Abc", number: "+7898378532" },
        { name: "Xyz", number: "+9399452757" },
      ],
      showForm: true,
    };

    this.handleInputChange1 = (event) => {
      this.setState({
        name: event.target.value,
      });
    };

    this.handleInputChange2 = (event) => {
      this.setState({
        number: event.target.value,
      });
    };

    this.addContact = () => {
      const newContact = {
        name: this.state.name,
        number: this.state.number,
      };

      if (this.state.name === "" || this.state.number === "") {
        alert("Both fields are required.");
        return;
      }

      this.setState((prevState) => ({
        phoneBook: prevState.phoneBook.concat(newContact),
        name: "",
        number: "",
      }));
    };
  }

  render() {
    let form = null;
    form = (
      <div className="container">
        <form className="form">
          <div class="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.handleInputChange1}
              value={this.state.name}
              placeHolder="Name"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.handleInputChange2}
              value={this.state.number}
              placeHolder="Number"
            />
          </div>
          <button
            type="button"
            className="btn-primary"
            onClick={this.addContact}
          >
            Add
          </button>
        </form>
      </div>
    );

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-4">
            <div className="App">
              <h2 className="header">PhoneBook</h2>

              {form}

              {this.state.phoneBook.map((contact) => (
                <div className="contacts">
                  <h5>{contact.name}</h5>
                  <p>{contact.number}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
