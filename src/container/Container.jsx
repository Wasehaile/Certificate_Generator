import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Certificate from "../assets/Certificate.jpg";
import { PDFGenerator } from "../controller/PDFGenerator";
import temp1 from "../assets/Temp_Images/Temp-1.png";
import temp2 from "../assets/Temp_Images/Temp-2.png";
import DatePicker from "../components/DatePicker";
import { PiCertificateThin } from "react-icons/pi";
import { BsPersonPlus } from "react-icons/bs";
const Container = () => {
  const [template, setTemplate] = useState("Template1");
  const [users, setUsers] = useState([
    {
      name: "",
      date: "",
    },
  ]);

  const handleName = (e, index) => {
    const updatedUsers = [...users];
    updatedUsers[index].name = e.target.value;
    setUsers(updatedUsers);
  };

  const handleDate = (e, index) => {
    const updatedUsers = [...users];
    updatedUsers[index].date = e.target.value;
    setUsers(updatedUsers);
  };

  const handleTemplate = (e) => {
    setTemplate(e.target.value);
  };

  const addUser = () => {
    setUsers([...users, { name: "" }]);
  };

  return (
    <div className="w-full h-fit pb-8 flex items-center gap-5 justify-start absolute top-[5%] flex-col">
      <img className="w-32" src={Certificate} alt="" />
      <div className="flex w-full flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-slate-700 text-xl">
          Generate Your Certificate
        </h1>
        <h2 className="text-sm font-light">
          This is a program to generate custom certificate
        </h2>
        <p className="font-semibold text-slate-700 capitalize">
          {" "}
          select a template
        </p>
        <div className="flex gap-3">
          <label>
            <input
              type="radio"
              value="Template1"
              checked={template === "Template1"}
              onChange={handleTemplate}
              className="hidden"
            />
            <img
              className={`w-32 cursor-pointer ${
                template === "Template1" && "border-4 border-primary opacity-70"
              }`}
              src={temp1}
              alt="Template 1"
            />
          </label>
          <label>
            <input
              type="radio"
              value="Template2"
              checked={template === "Template2"}
              onChange={handleTemplate}
              className="hidden"
            />
            <img
              className={`w-32 cursor-pointer ${
                template === "Template2" && "border-4 border-primary opacity-70"
              }`}
              src={temp2}
              alt="Template 2"
            />
          </label>
        </div>
      </div>
      {users.map((user, index) => (
        <div className="flex items-center gap-3">
          <Input key={index} onChange={(e) => handleName(e, index)} />
          <DatePicker onChange={(e) => handleDate(e, index)} />
        </div>
      ))}
      <div className="flex w-fit gap-4">
      <Button
        onClick={() => PDFGenerator(users, template)}
        label={"Generate Certificates"}
        Icon={<PiCertificateThin className="w-6 h-6" />}
      />
      <Button
        onClick={addUser}
        label={"Add a person"}
        Icon={<BsPersonPlus className="w-6 h-6" />}
      />
      </div>
    </div>
  );
};

export default Container;
