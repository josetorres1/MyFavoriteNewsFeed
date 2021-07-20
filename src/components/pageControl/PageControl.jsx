import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPage,
  getAmountOfPostPages,
  incrementPage,
  selectPage,
} from "../../redux/slices";
import styles from "./PageControl.module.css";

const PageControl = () => {
  const dispatch = useDispatch();
  const amountOfPages = useSelector(getAmountOfPostPages);
  const activePage = useSelector((state) => state.posts.page);

  const handleArrowControl = (control) => {
    if (control === "less") {
      dispatch(decrementPage());
    } else if (control === "more") {
      dispatch(incrementPage());
    }
  };

  const handleSelectPage = (page) => {
    dispatch(selectPage({ page }));
  };

  /* Function that creates dynamically page number indicators base on the
   state above (amountOfPages) */
  const createPagesIndicators = () => {
    const indicators = [];
    for (let index = 0; index < amountOfPages; index++) {
      indicators[index] = (
        <button
          className={activePage === index + 1 ? styles.active : null}
          onClick={() => handleSelectPage(index + 1)}
          key={index.toString()}
        >
          {index + 1}
        </button>
      );
    }

    return indicators;
  };

  return (
    <div className={styles.pageControl}>
      <button
        disabled={activePage === 1}
        onClick={() => handleArrowControl("less")}
      >
        {"<"}
      </button>
      {createPagesIndicators()}
      <button
        disabled={activePage === amountOfPages}
        onClick={() => handleArrowControl("more")}
      >
        {">"}
      </button>
    </div>
  );
};

export default PageControl;
