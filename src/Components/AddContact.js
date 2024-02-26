import React from "react";

const AddContact = () => {
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="name"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter email"/>
                        <div>
                            <button className="ui button blue">Add</button>
                        </div>
                </div>
            </form>
        </div>
    );
}

export default AddContact;