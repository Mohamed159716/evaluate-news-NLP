import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/header.scss";
import "./styles/mainSection.scss";
import "./styles/resultsSection.scss";
import "./styles/loading.scss";
import "./styles/footer.scss";

import * as globalVariables from "./js/globalVariables";
import { resultHandler } from "./js/resultHandler";

import { handleNav } from "./js/navHandler";
import { toggleClasses } from "./js/toggleClasses";

import { showClearBtn } from "./js/showClearBtn";
import { clearHandler } from "./js/clearHandler";

import { fetchData } from "./js/fetchHandler";
import { formChecker } from "./js/formChecker";
import { handleSubmit } from "./js/formHandler";

export {
    globalVariables,
    resultHandler,
    toggleClasses,
    handleNav,
    clearHandler,
    showClearBtn,
    fetchData,
    formChecker,
    handleSubmit,
};
