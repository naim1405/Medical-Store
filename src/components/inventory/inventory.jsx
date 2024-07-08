import { useEffect, useState } from "react";
import Add_Invetory from "./Add_Inventory";

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
			<div className="flex bg-white p-4 justify-between border rounded-lg">
				<div>
					<span className="text-2xl font-bold">Inventory</span>
					<input type="text" placeholder="Search Product" />
				</div>

				<div>
					<button className="btn btn-outline mx-4">
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
											<td>Action</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className="mt-8 flex place-content-center  gap-2">
						<button className="btn-sm">Previous</button>
						<button className="btn btn-neutral btn-sm">1</button>
						<button className="btn-sm">2</button>
						<button className="btn-sm btn-disabled">...</button>
						<button className="btn-sm">99</button>
						<button className="btn-sm">100</button>
						<button className="btn-sm">Next</button>
					</div>
				</div>
			</div>
		</>
	);
}
