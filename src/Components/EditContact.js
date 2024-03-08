import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditContact = (props) => {
  const contact = props.location?.state?.contact || {};
  const { id, name, email } = contact;

  const [state, setState] = useState({
    id,
    name,
    email,
  });

  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("ALL the fields are mandatory!");
      return;
    }

    if (typeof props.updateContactHandler === "function") {
      props.updateContactHandler({ id, ...state });
      setState({ name: "", email: "" });
      navigate("/");
    } else {
      console.error("updateContactHandler is not a function");
    }
  };

  return (
    <div className="ui main">
      <h2>.</h2>
      <form className="ui form" onSubmit={update}>
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
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
