import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventory from "./components/inventory/inventory";
import Billing from "./components/billing/Billing.jsx";
import Create_Billing from "./components/billing/Create_Billing.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		errorElement: <h1> 404 Not Found</h1>,
		children: [
			{
				path: "/",
				element: <h1>Hello world</h1>,
			},
			{
				path: "/inventory",
				element: <Inventory></Inventory>,
			},
			{
				path: "/billing",
				element: <Billing></Billing>,
			},
			{
				path: "/create-billing",
				element: <Create_Billing></Create_Billing>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
