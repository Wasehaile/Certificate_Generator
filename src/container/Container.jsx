import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Certificate from "../assets/Certificate.jpg";
import { PDFController } from "../controller/pdfController";

const Container = () => {
  const [template, setTemplate] = useState("Template1");
  const [users, setUsers] = useState([
    {
      name: "",
    },
  ]);

  const handleName = (e, index) => {
    const updatedUsers = [...users];
    updatedUsers[index].name = e.target.value;
    setUsers(updatedUsers);
  };

  const handleTemplate = (e) => {
    setTemplate(e.target.value);
  };

  const addUser = () => {
    setUsers([...users, { name: "" }]);
  };

  return (
    <div className="w-full h-fit pb-8 flex items-center gap-5 justify-start absolute top-[10%] flex-col">
      <img className="w-32" src={Certificate} alt="" />
      <div className="flex w-full flex-col justify-center items-center gap-2">
        <h1 className="font-bold text-slate-700 text-xl">
          Generate Your Certificate
        </h1>
        <h2 className="text-sm font-light">
          This is a program to generate custom certificate
        </h2>
        <p className="font-semibold text-slate-400"> select a template</p>
        <select
          className="p-2 border-slate-400 rounded-sm outline-none border"
          value={template}
          onChange={(e) => {
            handleTemplate(e);
          }}
        >
          <option value="Template1">Template-1</option>
          <option value="Template2">Template-2</option>
        </select>
      </div>
      {users.map((user, index) => (
        <Input key={index} onChange={(e) => handleName(e, index)} />
      ))}
      <Button
        onClick={() => PDFController(users, template)}
        label={"Generate Certificates"}
      />
      <Button onClick={addUser} label={"Add a person"} />
    </div>
  );
};

export default Container;
