import React, { useState } from "react";
import PropTypes from "prop-types";
import Arrow from "../images/icon-arrow.svg";
import styled from "styled-components";

const FormStyled = styled.div`
  padding: 0 20px;
  .formInput {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 160px;
  }

  .input {
    outline: none;
    border: none;
    border-radius: 12px;
    padding: 15px 0px 15px 15px;
    width: 100%;
  }

  .button {
    margin-left: -20px;
    height: 47px;
    background-color: #000;
    width: 60px;
    border: none;
    color: white;
    border-radius: 0 12px 12px 0;
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 300px;
    .formInput {
      margin-bottom: 120px;
    }
  }
`;

const Form = ({ ipAddress, setIpAddress }) => {
  const [value, setValue] = useState(ipAddress);

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIpAddress(value);
    console.log(value);
  };

  return (
    <FormStyled>
      <form onSubmit={onFormSubmit} className="formInput">
        <input
          className="input"
          type="text"
          name="location"
          value={value}
          onChange={onInputChange}
          placeholder="Search for any IP address or domain"
        />
        <button type="submit" className="button">
          <img src={Arrow} alt="enter" />
        </button>
      </form>
    </FormStyled>
  );
};

Form.propTypes = {
  ipAddress: PropTypes.string.isRequired,
  setIpAddress: PropTypes.func.isRequired,
};

export default Form;
