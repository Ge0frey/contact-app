import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditContact = (props) => {
    const contact = props.location?.state?.contact || {};
    const { id, name, email } = contact;
    this.state = {
      id,
      name,
      email,
    }

  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("ALL the fields are mandatory!");
      return;
    }

    if (typeof props.addContactHandler === "function") {
      props.addContactHandler(state);
      setState({ name: "", email: "" });
      navigate("/");
    } else {
      console.error("addContactHandler is not a function");
    }
  };

  return (
    <div className="ui main">
      <h2>.</h2>
      <form className="ui form" onSubmit={this.update}>
        <div className="field">
          <label>name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default EditContact;