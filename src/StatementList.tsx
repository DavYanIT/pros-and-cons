import React, { useMemo, useState } from "react";

export type StatementType = string;

export type StatementListType = Array<StatementType>;

interface StatementListProps {
  list: StatementListType;
}

export default (props: StatementListProps) => {
  const [statements, setStatements] = useState<StatementListType>(props.list);

  const makeChangeHandler = (index: number) => (
    nextValue: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStatements((statements) => {
      if (nextValue.target.value === "") {
        return [...statements.slice(0, index), ...statements.slice(index + 1)];
      }
      statements[index] = nextValue.target.value;
      return [...statements];
    });
  };

  const statemsToRender = useMemo(() => [...statements, ""], [statements]);

  return (
    <div className="list-wrapper">
      <ol>
        {statemsToRender.map((pro, index) => (
          <li key={index} className="statement">
            <input value={pro} onChange={makeChangeHandler(index)} />
          </li>
        ))}
      </ol>
    </div>
  );
};
