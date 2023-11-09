import { useState } from "react";

function App() {
  return (
    <div className="content">
      <h1>SPLITTER</h1>
      <Main>
        <Inputs>
          <Bill />
          <SelectTipPercent />
          <NumberOfPeople />
        </Inputs>
        <Outputs>
          <Amount />
          <Amount />
          <Reset>RESET</Reset>
        </Outputs>
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

function Inputs({ children }) {
  return <div className="inputs-box">{children}</div>;
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

function Outputs({ children }) {
  // return <div className="outputs-box"></div>;
  return <div className="outputs-box">{children}</div>;
}

function Amount() {
  return (
    <div className="output-amount">
      <div className="output-amount-info">
        <p>Tip Amount</p>
        <p>/ person</p>
      </div>
      <div className="output-amount-calculated">$0.00</div>
    </div>
  );
}

function Reset() {
  return <button className="btn-reset"></button>;
}

export default App;
