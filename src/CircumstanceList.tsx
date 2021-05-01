import React, { useState } from "react";
import "./CircumstanceList.css";

export type CircumstanceType = string;

export type CircumstanceListType = Array<CircumstanceType>;

interface CircumstanceListProps {
  list: CircumstanceListType;
}

export default ({ list }: CircumstanceListProps) => {
  const [circumstances, setCircumstances] = useState<CircumstanceListType>(
    list
  );

  const makeChangeHandler = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const clonedCircumstances = [...circumstances];
    if (event.target.value === "") {
      clonedCircumstances.splice(index, 1);
    } else {
      clonedCircumstances[index] = event.target.value;
    }
    setCircumstances(clonedCircumstances);
  };

  return (
    <div className="list-wrapper">
      <ol>
        {[...circumstances, ""].map((circumstance, index) => (
          <li key={index} className="circumstance">
            <input value={circumstance} onChange={makeChangeHandler(index)} />
          </li>
        ))}
      </ol>
    </div>
  );
};
