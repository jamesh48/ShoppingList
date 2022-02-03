import React from "react";
import runningTotalStyles from "@Styles/RunningTotal.module.scss";

interface RunningTotalProps {
  checkedTodos: { cost: string }[];
}

const RunningTotal: React.FC<RunningTotalProps> = (props) => {
  const handleTotalCost = () => {
    let checkedTodos = props.checkedTodos.slice();
    checkedTodos.sort((a, b) => {
      if (a.cost.indexOf("-") > -1) {
        return -1;
      }

      if (b.cost.indexOf("-") > -1) {
        return 1;
      }
      return 0;
    });

    console.log(checkedTodos);
    const totalCost = checkedTodos.reduce(
      (accCost, checkedItem) => {
        if (checkedItem.cost.indexOf("-") > -1) {
          let [lowCost, highCost] = checkedItem.cost.split("-");
          const lowNum = Number(lowCost.replaceAll("$", "").trim());
          const highNum = Number(highCost.replaceAll("$", "").trim());
          accCost[0] = accCost[0] + lowNum;
          accCost[1] = accCost[1] + highNum;
          return accCost;
        }
        accCost[0] = accCost[0] + Number(checkedItem.cost.replaceAll("$", "").trim());
        if (accCost[1]) {
          accCost[1] = accCost[1] + Number(checkedItem.cost.replaceAll("$", "").trim());
        }
        return accCost;
      },
      [0, 0]
    );
    if (!totalCost[1]) {
      return "Running total: $".concat(totalCost[0].toString());
    }
    return "Running total: $".concat(totalCost.join("-$"));
  };

  return props.checkedTodos.length ? (
    <div className={runningTotalStyles.runningTotalContainer}>
      <h4 className={runningTotalStyles.runningTotal}>{handleTotalCost()}</h4>
    </div>
  ) : null;
};

export default RunningTotal;
