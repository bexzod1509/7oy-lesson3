import React, { useState } from "react";
import "./CreateUser.css";
import { addToUsers } from "../../context/usersSlice";
import { useDispatch } from "react-redux";
function CreateUser() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let newuser = {
      id: new Date().getTime(),
      name,
      profession,
      age: +age,
      gender,
      address,
      phone,
    };
    dispatch(addToUsers(newuser));
    setName("");
    setProfession("");
    setAge("");
    setGender("");
    setAddress("");
    setPhone("");
  };
  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
          placeholder="name"
        />
        <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
          type="text"
          placeholder="profession"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          type="number"
          placeholder="age"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          type="text"
          placeholder="Address"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="tel"
          placeholder="Phone"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          name=""
          id=""
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
