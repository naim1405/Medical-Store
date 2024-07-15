import { useEffect, useState } from "react";
import Add_Invetory from "./Add_Inventory";

import { PiEyeLight } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

export default function Inventory() {
	let PAGE = 1;
	let PAGE_LIMIT = 12;
	const [inventory_data, set_inventory_data] = useState([]);

	useEffect(() => {
		fetch("inventory_data.json")
			.then((res) => res.json())
			.then((data) =>
				set_inventory_data(data.splice(0, PAGE * PAGE_LIMIT))
			);
	}, []);
	return (
		<>
			<div className="md:flex md:items-center bg-white p-4 justify-between border rounded-lg">
				<div className="flex justify-between lg:justify-normal items-center my-4 lg:my-0">
					<div className="font-bold text-2xl">Inventory</div>
					<div className="join  no-outline bg-[#F4F4F4] ml-4 p-2">
						<div className="join-item pr-4">
							<IoSearchOutline size="2em"></IoSearchOutline>
						</div>
						<input
							type="text"
							placeholder="Search Product"
							className="w-1/2 lg:w-no-outline bg-[#F4F4F4]"
						/>
					</div>
				</div>

				<div>
					<button className="btn btn-outline mr-4">
						Export Report
					</button>
					<Add_Invetory></Add_Invetory>
				</div>
			</div>

			{/* table */}

			<div className="bg-white rounded-lg mt-4 p-4">
				<div className="mt-4">
					<div className="overflow-x-auto">
						<table className="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Unit</th>
									<th>Per Unit Price</th>
									<th>Sold this month</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{inventory_data.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item.name}</td>
											<td>{item.unit}</td>
											<td>{item.price}</td>
											<td>{item.sold}</td>
											<td className="flex ">
												<PiEyeLight
													size="1.5em"
													className="mx-2"
												></PiEyeLight>
												<CiEdit
													size="1.5em"
													className="mx-2"
												></CiEdit>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className="mt-8 flex place-content-center">
						<button className="btn-sm flex content-center pt-1 text-gray-500">
							<MdArrowBack size="1.5em"></MdArrowBack>
							<span className="ml-2 hidden sm:block">
								Previous
							</span>
						</button>
						<button className="btn btn-primary btn-sm">1</button>
						<button className="btn-sm">2</button>
						<button className="btn-sm btn-disabled">...</button>
						<button className="btn-sm">99</button>
						<button className="btn-sm">100</button>
						<button className="btn-sm flex content-center pt-1.5">
							<span className="mr-2 hidden sm:block">Next</span>
							<MdArrowForward size="1.5em"></MdArrowForward>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
