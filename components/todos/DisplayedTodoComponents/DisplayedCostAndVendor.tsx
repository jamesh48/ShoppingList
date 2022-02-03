import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
interface DisplayedCostAndVendorProps {
  vendor: string;
  cost: string;
}
const DisplayedCostAndVendor: React.FC<DisplayedCostAndVendorProps> = (props) => {
  return (
    <div className={todoStyles.costAndVendor}>
      {props.vendor && <h5 className={todoStyles.todoTitle}>{props.vendor}</h5>}
      {props.vendor && <h5 className={todoStyles.todoTitle}>/</h5>}
      {props.cost && <h5 className={todoStyles.todoTitle}>{props.cost}</h5>}
    </div>
  );
};

export default DisplayedCostAndVendor;
