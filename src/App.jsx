import { useState } from "react";

function App() {
  return (
    <>
      <Main>
        <Inputs>
          <Bill />
          <SelectTipPercent />
          <NumberOfPeople />
        </Inputs>
        <Outputs>
          <TipAmountPerPerson />
          <TotalPerPerson />
          <Reset />
        </Outputs>
      </Main>
    </>
  );
}

function Main() {
  return <div className="main"></div>;
}

function Inputs() {
  return <div className="inputs-box"></div>;
}

function Bill() {
  return <div className="input-bill"></div>;
}

function SelectTipPercent() {
  return <div className="input-tip"></div>;
}

function NumberOfPeople() {
  return <div className="input-people"></div>;
}

function Outputs() {
  return <div className="outputs-box"></div>;
}

function TipAmountPerPerson() {
  return <div className="output-tip"></div>;
}

function TotalPerPerson() {
  return <div className="output-total"></div>;
}

function Reset() {
  return <button className="btn-reset"></button>;
}

export default App;
