import React, { useState } from 'react';
import '../CSS/Field.css';
import '../CSS/GeneralField.css';

const WorkForm = (props) => {
  const [companyName, setCompanyName] = useState('jobby');
  const [role, setRole] = useState('Role');
  const [date, setDate] = useState('Date');
  const [formName, setFormName] = useState(props.title + 'Form');

  const changeName = (event) => {
    setCompanyName(event.target.value);
  };
  const changeRole = (e) => {
    setRole({ role: e.target.value });
  };
  const changeDate = (e) => {
    setDate({ date: e.target.value });
  };

  const submitAnswer = (e) => {
    e.preventDefault();
    const inputz = document.getElementsByClassName(formName);
    for (var i = 0; i < inputz.length; i++) {
      inputz.item(i).style.display = 'none';
    }
  };
  const editText = () => {
    const inputz = document.getElementsByClassName(formName);
    for (var i = 0; i < inputz.length; i++) {
      inputz.item(i).style.display = 'unset';
    }
  };

  const removeItem = (e) => {
    e.currentTarget.parentNode.remove();
    document.getElementById(formName).remove();
  };
  return (
    <div className="eduWorkInformation">
      <div className="one">
        <h3 className="inputText">{companyName}</h3>
        <h3 className="inputText">{role}</h3>
        <h3 className="inputText">{date}</h3>
        <button id="editButton" onClick={editText}>
          Edit
        </button>
        <button onClick={removeItem}>Delete</button>
      </div>
      <div className="two">
        <form className={formName} id={formName} onSubmit={submitAnswer}>
          <label>
            <input
              type="text"
              placeholder={companyName}
              onChange={changeName}
            ></input>
            <input type="text" placeholder={role} onChange={changeRole}></input>
            <input type="date" onChange={changeDate}></input>
            <input type="submit" value="Submit"></input>
          </label>
        </form>
      </div>
    </div>
  );
};
export default WorkForm;
