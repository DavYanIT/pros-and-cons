import CircumstanceList from "./CircumstanceList";
import "./App.css";

import type { CircumstanceListType } from "./CircumstanceList";

const prosData: CircumstanceListType = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
];

const consData: CircumstanceListType = [
  "Lorem Ipsum 1",
  "Lorem Ipsum 2",
  "Lorem Ipsum 3",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
  "Lorem Ipsum 4",
];

function App() {
  return (
    <div className="app">
      <header>
        <h2>Should I eat at MCD</h2>
      </header>
      <div className="content">
        <div className="column">
          <header>pros</header>
          <CircumstanceList list={prosData} />
        </div>
        <div className="column">
          <header>cons</header>
          <CircumstanceList list={consData} />
        </div>
      </div>
    </div>
  );
}

export default App;
