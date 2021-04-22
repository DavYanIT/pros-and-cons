import React, { useMemo, useState } from "react";
import "./CircumstanceList.css";

export type CircumstanceType = string;

export type CircumstanceListType = Array<CircumstanceType>;

interface CircumstanceListProps {
  list: CircumstanceListType;
}

export default (props: CircumstanceListProps) => {
  const [circumstances, setCircumstances] = useState<CircumstanceListType>(props.list);

  const makeChangeHandler = (index: number) => (
    nextValue: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCircumstances((circumstances) => {
      if (nextValue.target.value === "") {
        return [...circumstances.slice(0, index), ...circumstances.slice(index + 1)];
      }
      circumstances[index] = nextValue.target.value;
      return [...circumstances];
    });
  };

  const statemsToRender = useMemo(() => [...circumstances, ""], [circumstances]);

  return (
    <div className="list-wrapper">
      <ol>
        {statemsToRender.map((pro, index) => (
          <li key={index} className="circumstance">
            <input value={pro} onChange={makeChangeHandler(index)} />
          </li>
        ))}
      </ol>
    </div>
  );
};
