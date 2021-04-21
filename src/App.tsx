import "./App.css";
import StatementList from "./StatementList";

import type { StatementListType } from "./StatementList";

const prosData: StatementListType = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
];

const consData: StatementListType = [
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
          <StatementList list={prosData} />
        </div>
        <div className="column">
          <header>cons</header>
          <StatementList list={consData} />
        </div>
      </div>
    </div>
  );
}

export default App;
