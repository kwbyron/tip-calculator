import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [customTip, setCustomTip] = useState("");

  const tipPerPerson =
    bill && people && customTip
      ? customTip / people
      : bill && people && tipPercent && ((tipPercent / 100) * bill) / people;

  const totalPerPerson = tipPerPerson && bill / people + tipPerPerson;

  function handleSetBill(e) {
    e.preventDefault();

    setBill(e.target.value);
  }

  function handleSetPeople(e) {
    e.preventDefault();
    setPeople(e.target.value);
  }

  function handleSetTipPercent(num) {
    setTipPercent(num);
  }

  function handleCustomTip(e) {
    e.preventDefault();
    setCustomTip(e.target.value);
    setTipPercent(0);
  }

  function handleOnFocus() {
    setTipPercent(0);
  }

  function handleReset() {
    setBill("");
    setPeople("");
    setTipPercent(0);
    setCustomTip("");
  }

  return (
    <div className="content">
      <h1>SPLITTER</h1>
      <Main>
        <Inputs>
          <Bill bill={bill} onSetBill={handleSetBill} />
          <SelectTipPercent
            onSetTipPercent={handleSetTipPercent}
            onSetCustomTip={handleCustomTip}
            onFocus={handleOnFocus}
            customTip={customTip}
            tipPercent={tipPercent}
          />
          <NumberOfPeople people={people} onSetPeople={handleSetPeople} />
        </Inputs>
        <Outputs>
          <div className="output-values">
            <TipAmount tipPercent={tipPercent} tipPerPerson={tipPerPerson}>
              Tip Amount
            </TipAmount>
            <TotalAmount
              tipPercent={tipPercent}
              totalPerPerson={totalPerPerson}
            >
              Total
            </TotalAmount>
          </div>
          <Reset onReset={handleReset}>RESET</Reset>
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

function Bill({ onSetBill, bill }) {
  return (
    <form className="input-bill">
      <label>Bill</label>
      <input
        id="input-bill-total"
        type="text"
        placeholder="＄0"
        value={bill}
        onChange={(e) => onSetBill(e)}
      ></input>
    </form>
  );
}

function SelectTipPercent({
  onSetTipPercent,
  tipPercent,
  customTip,
  onSetCustomTip,
  onFocus,
}) {
  return (
    <div className="input-tip">
      <p>Select Tip %</p>
      <div className="percent-grid">
        <button
          onClick={() => onSetTipPercent(5)}
          className={`btn-percent ${tipPercent == 5 ? "btn-selected" : ""}`}
        >
          5%
        </button>
        <button
          onClick={() => onSetTipPercent(10)}
          className={`btn-percent ${tipPercent == 10 ? "btn-selected" : ""}`}
        >
          10%
        </button>
        <button
          onClick={() => onSetTipPercent(15)}
          className={`btn-percent ${tipPercent == 15 ? "btn-selected" : ""}`}
        >
          15%
        </button>
        <button
          onClick={() => onSetTipPercent(25)}
          className={`btn-percent ${tipPercent == 25 ? "btn-selected" : ""}`}
        >
          25%
        </button>
        <button
          onClick={() => onSetTipPercent(50)}
          className={`btn-percent ${tipPercent == 50 ? "btn-selected" : ""}`}
        >
          50%
        </button>
        <input
          onChange={(e) => onSetCustomTip(e)}
          onFocus={onFocus}
          id="custom"
          placeholder="Custom"
          value={customTip}
        ></input>
      </div>
    </div>
  );
}

function NumberOfPeople({ onSetPeople, people }) {
  return (
    <form className="input-people">
      <label>Number of People</label>
      <input
        id="input-people-total"
        type="text"
        placeholder="0"
        value={people}
        onChange={(e) => onSetPeople(e)}
      ></input>
    </form>
  );
}

function Outputs({ children }) {
  // return <div className="outputs-box"></div>;
  return <div className="outputs-box">{children}</div>;
}

function TipAmount({ children, tipPerPerson }) {
  return (
    <div className="output-amount">
      <div className="output-amount-info">
        <p>{children}</p>
        <p className="per-person">/ person</p>
      </div>
      <div className="output-amount-calculated">
        {tipPerPerson ? `$${tipPerPerson.toFixed(2)}` : "$0.00"}
      </div>
    </div>
  );
}

function TotalAmount({ children, totalPerPerson }) {
  return (
    <div className="output-amount">
      <div className="output-amount-info">
        <p>{children}</p>
        <p className="per-person">/ person</p>
      </div>
      <div className="output-amount-calculated">
        {totalPerPerson ? `$${totalPerPerson.toFixed(2)}` : "$0.00"}
      </div>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <button onClick={() => onReset()} className="btn-reset">
      RESET
    </button>
  );
}

export default App;
