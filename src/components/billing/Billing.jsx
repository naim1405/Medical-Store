import { useEffect, useState } from "react";
export default function Billing() {
	let PAGE = 1;
	let PAGE_LIMIT = 12;

	const [billng_data, set_billing_data] = useState([]);
	useEffect(() => {
		fetch("billing_data.json")
			.then((res) => res.json())
			.then((data) => set_billing_data(data.slice(0, PAGE * PAGE_LIMIT)));
	}, []);

	return (
		<>
			<div className="bg-white p-4 rounded-lg">
				{/* header */}
				<div className="flex">
					<div className="flex-1 ">
						<span className="font-bold text-2xl px-8">Bills</span>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered input-primary w-full max-w-xs"
						/>
					</div>
					<div className="flex-none">
						<button className="btn btn-outline">
							Export Report
						</button>
					</div>
				</div>
				{/* table */}
				<div className="mt-4">
					<div className="overflow-x-auto">
						<table className="table">
							<thead className="">
								<tr>
									<th>Date and time</th>
									<th>Phone number</th>
									<th>Total Purchase</th>
									<th>Discount</th>
									<th>Accountant</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{billng_data.map((item, index) => {
									return (
										<tr key={index}>
											<td>
												{item.time} | {item.date}
											</td>
											<td>{item.phone}</td>
											<td>{item.total}</td>
											<td>{item.discount}</td>
											<td>{item.accountant}</td>
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
