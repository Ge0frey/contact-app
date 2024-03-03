import React from "react";

class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("ALL the fields are mandatory!");
            return;
        }
        if (typeof this.props.addContactHandler === 'function') {
            this.props.addContactHandler(this.state);
            this.setState({ name: "", email: "" });
          } else {
            console.error("addContactHandler is not a function");
          }
    }

    render () {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>name</label>
                        <input
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="email" 
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;