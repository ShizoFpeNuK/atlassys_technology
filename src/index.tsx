import "./index.scss";
import PersonalAccountPage from "./pages/personal_account/PersonalAccountPage";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<PersonalAccountPage />
	</React.StrictMode>,
);
