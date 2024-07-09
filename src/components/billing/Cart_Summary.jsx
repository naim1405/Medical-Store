import { useState } from "react";

export default function Cart_Summary(props) {
	const [summary_state, set_summary_state] = useState(true);
	const { cart_total, discount } = props;
	const total_discount = (cart_total * parseFloat(discount)) / 100;

	const total_tax = (cart_total * 5) / 100;
	const total_bill = Math.ceil(cart_total + total_tax - total_discount);
	const [user_payment, set_user_payment] = useState("");

	const cart_summary = (
		<>
			<h1 className="text-bolder text-xl">Total Summary</h1>
			<div className="">
				<div className="flex place-content-between m-4">
					<div>Total purchase</div>
					<div>{cart_total}</div>
				</div>

				<div className="flex place-content-between m-4">
					<div>Discount {discount} %</div>
					<div>{total_discount}</div>
				</div>

				<div className="flex place-content-between m-4">
					<div>Vat 5%</div>
					<div>{total_tax}</div>
				</div>
			</div>

			<div className="flex place-content-between border-dashed border-t-4 py-4 pr-4">
				<div>Total Bill</div>
				<div>{total_bill}</div>
			</div>
			<div className="flex justify-stretch p-4">
				<button
					className="btn w-full btn-neutral btn-wide"
					onClick={() => set_summary_state(false)}
				>
					Receive Money
				</button>
			</div>
		</>
	);
	const receive_money = (
		<>
			<div>
				<button
					className="btn btn-outline btn-accent mx-4"
					onClick={() => set_summary_state(true)}
				>
					Back
				</button>
				<span className="text-xl text-bolder">Receive Money</span>
			</div>
			<div className="flex place-content-between p-4">
				<div>Total Bill</div>
				<div className="text-xl">{total_bill}</div>
			</div>
			<div className="bg-[#004FE8]/10 border-2 border-[#004FE8] rounded-md p-4">
				<div className="bg-white border-2 border-[#004FE8] rounded-md join flex items-center">
					<input
						className="input focus:outline-none border-0 join-item w-2/4"
						placeholder="-"
						type="number"
						min="0"
						value={user_payment}
						onChange={(e) => set_user_payment(e.target.value)}
					/>
					<div className="join-item ml-8">Paid Amount</div>
				</div>
				<div className="my-4 text-[#004FE8] font-bold">
					<p>Amount Return</p>
					<h1 className="text-3xl">
						{user_payment === ""
							? 0
							: parseFloat(user_payment) - total_bill}
					</h1>
				</div>
				<div className="flex justify-stretch py-4">
					<button
						className="btn w-full btn-neutral btn-wide"
						onClick={() =>
							document.getElementById("my_modal_2").showModal()
						}
					>
						Save and Print
					</button>

					{/* Open the modal using document.getElementById('ID').showModal() method */}
					<dialog id="my_modal_2" className="modal">
						<div className="modal-box">
							<h3 className="font-bold text-lg">Hi!</h3>
							<p className="py-4">TO BE IMPLEMENTED</p>
						</div>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
				</div>
			</div>
		</>
	);
	return summary_state ? cart_summary : receive_money;
}
