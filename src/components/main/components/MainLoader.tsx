import React from "react";
import classNames from "classnames";
import './MainLoader.scss';

interface IMainLoader {
  isLoading: boolean;
}

export const MainLoader = ({ isLoading }: IMainLoader) => {
  const loadingClassNames = classNames(
    "loading",
    !isLoading && "hide-loading"
  )

  return (
    <div className={loadingClassNames}>
    </div>
  )
}
