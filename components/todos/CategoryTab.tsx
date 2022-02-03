import React from "react";
import todoStyles from "@Styles/Todo.module.scss";

interface CategoryTabProps {
  categoryCallback: (category: string) => void;
  category: string;
}

const CategoryTab: React.FC<CategoryTabProps> = (props) => {
  const input1 = React.useRef(null);

  React.useEffect(() => {
    if (props.category === "All" && input1.current) {
      // @ts-ignore
      input1.current.focus();
    }
  }, [props.category]);
  return (
    <button
      ref={input1}
      className={todoStyles.categoryTab}
      onClick={() => props.categoryCallback(props.category)}
    >
      <h5>{props.category}</h5>
    </button>
  );
};

export default CategoryTab;
