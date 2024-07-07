import { useEffect, useState } from "react";
import Cart_Item from "./Cart_Item";
import Cart_Summary from "./Cart_Summary";

export default function Create_Billing() {
	const [all_items, set_all_items] = useState([]);
	const [filtered_items, set_filtered_items] = useState([]);
	const [product_info, set_product_info] = useState();
	const [cart_total, set_cart_total] = useState(0.0);
	const [cart_data, set_cart_data] = useState([]);
	useEffect(() => {
		fetch("inventory_data.json")
			.then((res) => res.json())
			.then((data) => set_product_info(data));
	}, []);
	useEffect(() => {
		fetch("all_products.json")
			.then((res) => res.json())
			.then((data) => {
				set_all_items(data.names);
				set_filtered_items(data.names);
			});
	}, []);
	const [form_data, set_form_data] = useState({
		current_item: "",
		phone: "",
		discount: 0,
	});
	function handleChange(e) {
		if (e.target.name === "item-name") {
			set_form_data({
				...form_data,
				current_item: e.target.value,
			});
		} else if (e.target.name === "phone") {
			set_form_data({
				...form_data,
				phone: e.target.value,
			});
		} else if (e.target.name === "discount") {
			if (e.target.value === "") {
				set_form_data({
					...form_data,
					discount: 0,
				});
			} else {
				set_form_data({
					...form_data,
					discount: parseFloat(e.target.value),
				});
			}
		}
	}

	useEffect(() => {
		const filtered_list = all_items.filter((item) =>
			item.toLowerCase().includes(form_data.current_item)
		);
		set_filtered_items(filtered_list);
	}, [form_data.current_item]);

	function handleAddItem(e) {
		const item_name = e.target.innerHTML;
		for (let i = 0; i < cart_data.length; i++) {
			if (cart_data[i].name === item_name) {
				return;
			}
		}
		let item_price = 0;
		for (let i = 0; i < product_info.length; i++) {
			if (product_info[i].name === item_name) {
				item_price = product_info[i].price;
				break;
			}
		}
		set_cart_data([
			...cart_data,
			{
				name: item_name,
				price: item_price,
				quantity: 0,
			},
		]);
	}

	function handle_delete(product) {
		const updated_cart_list = cart_data.filter(
			(item) => item.name !== product
		);
		set_cart_data(updated_cart_list);
	}

	return (
		<>
			<div className="grid grid-cols-4 gap-10 bg-white p-4 rounded-lg">
				<div className="col-span-2">
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text text-lg text-black text-bold">
								Create Bill
							</span>
						</div>

						<input
							type="text"
							placeholder="Search and add"
							className="input input-bordered w-full max-w-xs"
							onClick={() =>
								document
									.getElementById("my_modal_3")
									.showModal()
							}
						/>
					</label>
					<dialog id="my_modal_3" className="modal">
						<div className="modal-box">
							<form method="dialog">
								<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
									✕
								</button>
							</form>
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text text-lg text-black text-bold">
										Create Bill
									</span>
								</div>

								<input
									type="text"
									placeholder="Search and add"
									className="input input-bordered w-full max-w-xs"
									value={form_data.current_item}
									onChange={handleChange}
									name="item-name"
								/>
							</label>
							{filtered_items.map((item, index) => {
								return (
									<div
										key={index}
										role="button"
										onClick={handleAddItem}
									>
										{item}
									</div>
								);
							})}
						</div>
					</dialog>
				</div>
				<div className="col-span-1">
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text text-lg text-black text-bold">
								Enter Phone number
							</span>
						</div>
						<input
							type="tel"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							value={form_data.phone}
							onChange={handleChange}
							name="phone"
						/>
					</label>
				</div>
				<div className="col-span-1">
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text text-lg text-black text-bold">
								Discount
							</span>
						</div>
						<input
							type="number"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							value={form_data.discount}
							onChange={handleChange}
							name="discount"
							min="0"
						/>
					</label>
				</div>
			</div>

			<div className="mt-8 grid grid-cols-6 gap-10 ">
				<div className="col-span-4 bg-white p-4 rounded-lg h-min">
					{cart_data.map((item, idx) => (
						<Cart_Item
							key={idx}
							data={item}
							set_cart_total={set_cart_total}
							cart_total={cart_total}
							cart_data={cart_data}
							set_cart_data={set_cart_data}
							handle_delete={handle_delete}
						></Cart_Item>
					))}
				</div>
				<div className="col-span-2 bg-white p-4 rounded-lg h-fit grid-none">
					<Cart_Summary
						cart_total={cart_total}
						discount={
							isNaN(form_data.discount) ? 0 : form_data.discount
						}
					></Cart_Summary>
				</div>
			</div>
		</>
	);
}
