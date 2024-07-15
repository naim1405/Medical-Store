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
	function handle_menu_click() {
		const elem = document.activeElement;
		if (elem) {
			elem?.blur();
		}
	}
	return (
		<div className="lg:grid lg:grid-cols-6 px-2 py-4 ">
			{/* nav */}
			<div className="lg:h-svh mt-4 hidden lg:block">
				<h1 className="font-bold text-2xl ml-8">
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

			<div className="lg:col-span-5">
				<div className="">
					<div className="navbar bg-base-100">
						{/* nav for small screen */}
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow lg:hidden"
							>
								<li
									className="my-3 w-full"
									onClick={handle_menu_click}
								>
									<NavLink to="/dashboard">
										<PiSpeedometer size="1.5em"></PiSpeedometer>
										Dashboard
									</NavLink>
								</li>
								<li
									className="my-3 w-full"
									onClick={handle_menu_click}
								>
									<NavLink to="/inventory">
										<PiDatabase size="1.5em"></PiDatabase>
										Inventory
									</NavLink>
								</li>
								<li
									className="my-3 w-full"
									onClick={handle_menu_click}
								>
									<NavLink to="/billing">
										<CiReceipt size="1.5em"></CiReceipt>
										Billing
									</NavLink>
								</li>
								<li
									className="my-3 w-full"
									onClick={handle_menu_click}
								>
									<NavLink to="/create-billing">
										<RiBillLine size="1.5em"></RiBillLine>
										Create Billing
									</NavLink>
								</li>
								<li
									className="my-3 w-full"
									onClick={handle_menu_click}
								>
									<NavLink to="/parmissions">
										<GiKeyLock size="1.5em"></GiKeyLock>
										Permissions
									</NavLink>
								</li>
								<li
									className="my-3 w-full"
									onClick={handle_menu_click}
								>
									<NavLink to="report">
										<VscNotebook size="1.5em"></VscNotebook>
										Reporting
									</NavLink>
								</li>
							</ul>
						</div>
						{/* end nav for small screen */}
						{/* search drop down */}
						<div className="dropdown md:hidden">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost m-1"
							>
								<IoSearchOutline size="2rem"></IoSearchOutline>
							</div>
							<div
								tabIndex={0}
								className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
							>
								<div className="join no-outline bg-[#F4F4F4] p-2">
									<input
										type="text"
										placeholder="Search"
										className="join-item w-auto no-outline bg-[#F4F4F4]"
									/>
									<div className="join-item pl-4">
										<div className="bg-white rounded rounded-md px-2">
											<span className="text-sm lg:text-xl">
												⌘
											</span>
											<span className="text-sm lg:text-xl">
												F
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* end search drop down */}

						<div className="flex-1">
							<div className="join no-outline bg-[#F4F4F4] p-2 hidden md:flex">
								<div className="join-item pr-4">
									<IoSearchOutline size="2rem"></IoSearchOutline>
								</div>
								<input
									type="text"
									placeholder="Search"
									className="w-auto no-outline bg-[#F4F4F4]"
								/>
								<div className="join-item pl-4">
									<div className="bg-white rounded rounded-md px-2">
										<span className="text-sm lg:text-xl">
											⌘
										</span>
										<span className="text-sm lg:text-xl">
											F
										</span>
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

				<div className="p-5 bg-[#E4E4E4] min-h-screen w-full">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
}

export default App;
