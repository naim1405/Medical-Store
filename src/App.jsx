import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="grid grid-cols-6 px-8 py-4 ">
			{/* nav */}
			<div className="h-svh mt-4">
				<h1 className="font-bold text-2xl">
					<NavLink to="/">Medical store</NavLink>
				</h1>

				<div className="menu grid grid-cols-1 navbar ">
					<ul className="menu">
						<li className="my-3 w-full">
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="/inventory">Inventory</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="/billing">Billing</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="/create-billing">
								Create Billing
							</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="/parmissions">Permissions</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="report">Reporting</NavLink>
						</li>
					</ul>
				</div>
			</div>

			<div className="col-span-5">
				<div>
					<div className="navbar bg-base-100">
						<div className="flex-1">
							<div className="form-control">
								<input
									type="text"
									placeholder="Search"
									className="input input-bordered w-24 md:w-auto"
								/>
							</div>
						</div>
						<div className="flex-none gap-2">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="p-5 bg-[#E4E4E4] min-h-screen">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
}

export default App;
