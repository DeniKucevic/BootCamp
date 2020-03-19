import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            number: '',
            phoneBook: [
                {
                    name: 'Denis Kucevic', number: '+381666361964', key: 1
                },
                {
                    name: 'Neko Drugi', number: '+381661234567', key: 2
                }],
            filtered: [],
            showForm: false,
            inputError: ''
        }

        this.handleInput1 = (event) => {
            this.setState({
                name: event.target.value
            })
        }

        this.handleInput2 = (event) => {
            this.setState({
                number: event.target.value
            })
        }

        this.Filter = (e) => {
            
            this.state.filtered = this.state.phoneBook.filter((kontakt) => kontakt.name.includes(e.target.value));
            console.log(this.state.filtered);
            this.setState({
                
            })
                }

        this.addContact = (e) => {

            e.preventDefault()
            
            if (!this.state.number.startsWith('+')) {
                this.setState({})
                return this.state.inputError="Broj mora biti unet u formatu +XXX XXXXXXXXX"
            };
            if (this.state.name === '' || this.state.number === '') {
                this.setState({})
                return this.state.inputError="Molimo popunite sva polja"
            }
            if (this.state.phoneBook.find(element => element.name === this.state.name)) {
                this.setState({})
                return (this.state.inputError = `Korisnik vec postoji! ${this.state.changenmb}`)
            }

            const newContact = {
                name: this.state.name,
                number: this.state.number,
                key: this.state.phoneBook.length + 1
            }

            this.setState((prevState) =>
             ({
                phoneBook: prevState.phoneBook.concat(newContact),
                name: "",
                number: "",
                key: "",
                inputError:""
            }))
        }
    }
    render() {
        let form = null;
        form=
           (
            <div className="app-holder">
            <form className="formica">
                <input type="text" className="input" onChange={this.handleInput1} value={this.state.name} placeholder="Ime i prezime" />
                <input type="text" className="input" onChange={this.handleInput2} value={this.state.number} placeholder="Broj telefona"/>
                <button type="submit" className="btn-primary" onClick={this.addContact}>Unesi!</button>
                <input type="text" className="input" placeholder="Filter" onChange={this.Filter}></input>
                </form>
                <div>
                    {this.state.inputError}
                </div>
            
            </div>
        )
        return (
        <div>
        <h2>Telefonski imenik</h2>
            
                {form}

                {this.state.filtered.map(contact =>
                    <div className="cont">
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
                        <hr />
                    </div>
                )}

            {this.state.phoneBook.map(contact =>
           <div className="contacts">
           <p>{contact.name}</p>
           <p>{contact.number}</p>
           <hr/>
            </div>
        )} 
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('root'));