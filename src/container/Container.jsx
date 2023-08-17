import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Certificate from '../assets/Certificate.png'

const Container = () => {
  return (
    <div className="w-full h-screen flex items-center gap-5 justify-center flex-col">
     <img className="w-32" src={Certificate} alt=""/>
      <div className="flex w-full flex-col justify-center items-center gap-2">
        <h1 className="font-bold text-slate-700 text-xl">Generate Your Certificate</h1>
        <h2 className="text-sm font-light">This is a program to generate custom certificate</h2>
      </div>
      <Input />
      <Button />
    </div>
  );
};

export default Container;
