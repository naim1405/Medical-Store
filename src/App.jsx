import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { MdNotifications } from "react-icons/md";

import { IoSearchOutline } from "react-icons/io5";
import { PiDatabase, PiSpeedometer, PiSpeedometerLight } from "react-icons/pi";
import { CiReceipt } from "react-icons/ci";
import { GiKeyLock } from "react-icons/gi";
import { VscNotebook } from "react-icons/vsc";
import { RiBillLine } from "react-icons/ri";

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
							<NavLink to="/dashboard">
								<PiSpeedometer size="1.5em"></PiSpeedometer>
								Dashboard
							</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="/inventory">
								<PiDatabase size="1.5em"></PiDatabase>Inventory
							</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="/billing">
								<CiReceipt size="1.5em"></CiReceipt>
								Billing
							</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="/create-billing">
								<RiBillLine size="1.5em"></RiBillLine>
								Create Billing
							</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="/parmissions">
								<GiKeyLock size="1.5em"></GiKeyLock>
								Permissions
							</NavLink>
						</li>
						<li className="my-3 w-full">
							<NavLink to="report">
								<VscNotebook size="1.5em"></VscNotebook>
								Reporting
							</NavLink>
						</li>
					</ul>
				</div>
			</div>

			<div className="col-span-5">
				<div>
					<div className="navbar bg-base-100">
						<div className="flex-1">
							<div className="join  no-outline bg-[#F4F4F4] p-2">
								<div className="join-item pr-4">
									<IoSearchOutline size="2em"></IoSearchOutline>
								</div>
								<input
									type="text"
									placeholder="Search"
									className="w-24 md:w-auto no-outline bg-[#F4F4F4]"
								/>
								<div className="join-item pl-4">
									<div className="bg-white rounded rounded-md px-2">
										<span className="text-2xl">⌘</span>
										<span className="text-2xl"> F</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-none gap-2">
							<div className="mr-4">
								<MdNotifications size="1.5em"></MdNotifications>
							</div>
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
