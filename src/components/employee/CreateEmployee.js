import React from "react";
import PropTypes from "prop-types";

const CreateEmployee = ({ onChange, onSubmit, errors }) => {
  return (
    <div className="row" onSubmit={onSubmit}>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              name="firstName"
              id="first_name"
              type="text"
              onChange={onChange}
            />
            <label htmlFor="first_name">First Name</label>
            {errors && errors["firstName"] && <p>{errors["firstName"]}</p>}
          </div>
          <div className="input-field col s6">
            <input
              name="lastName"
              id="last_name"
              type="text"
              onChange={onChange}
            />
            <label htmlFor="last_name">Last Name</label>
            {errors && errors["lastName"] && <p>{errors["lastName"]}</p>}
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input name="city" id="city" type="text" onChange={onChange} />
            <label htmlFor="city">City</label>
            {errors && errors["city"] && <p>{errors["city"]}</p>}
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button className="btn btn-block orange" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

CreateEmployee.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CreateEmployee;
