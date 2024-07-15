import { useEffect, useState } from "react";
import { PiEyeLight } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { SlPrinter } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

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
			<div className="bg-white py-4 rounded-lg">
				{/* header */}
				<div className="flex px-4 justify-between">
					<div className="flex items-center">
						<div className="font-bold text-2xl">Bills</div>
						<div className="join  no-outline bg-[#F4F4F4] ml-4 p-2">
							<div className="join-item pr-4">
								<IoSearchOutline size="2em"></IoSearchOutline>
							</div>
							<input
								type="text"
								placeholder="Search bill with phone-number"
								className="w-1/2 lg:w-64 no-outline bg-[#F4F4F4]"
							/>
						</div>
					</div>
					<div className="block md:flex-none p-1 md:p-4">
						<button className="btn btn-outline">
							Export Report
						</button>
					</div>
				</div>
				{/* table */}
				<div className="mt-4">
					<div className="overflow-x-auto">
						<table className="table">
							<thead className="bg-[#EFEFEF]">
								<tr className="">
									<th>Date and time</th>
									<th>Phone number</th>
									<th>Total Purchase</th>
									<th>Discount</th>
									<th>Accountant</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="">
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
											<td className="flex ">
												<PiEyeLight
													size="1.5em"
													className="mx-2"
												></PiEyeLight>
												<CiEdit
													size="1.5em"
													className="mx-2"
												></CiEdit>
												<SlPrinter
													size="1.5em"
													className="mx-2"
												></SlPrinter>
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
