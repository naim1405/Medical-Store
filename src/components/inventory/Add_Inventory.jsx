import { useEffect, useState } from "react";
import List_Item from "./List_Item";
import { SlMagnifierAdd } from "react-icons/sl";

export default function Add_Invetory() {
	const [item_list, set_item_list] = useState([]);
	const [filtered_list, set_filtered_list] = useState([]);
	const [added_items, set_added_items] = useState([]);
	const [is_searching, set_is_searching] = useState(false);
	const [search_word, set_search_word] = useState("");
	useEffect(() => {
		fetch("all_products.json")
			.then((res) => res.json())
			.then((data) => set_item_list(data));
	}, []);

	useEffect(() => {
		if (search_word === "") {
			set_is_searching(false);
		} else {
			set_is_searching(true);
		}
		set_filtered_list(
			item_list.filter((item) => item.name.includes(search_word))
		);
	}, [search_word]);

	function handle_add_to_list(item) {
		set_search_word("");
		for (let i = 0; i < added_items.length; i++) {
			if (added_items[i].name === item.name) {
				return;
			}
		}
		set_added_items([
			...added_items,
			{ id: item.id, name: item.name, unit: "", price: "" },
		]);
	}

	function handle_edit(item, quantity, price) {
		const temp_list = added_items;
		for (let i = 0; i < temp_list.length; i++) {
			if (temp_list[i].name === item) {
				temp_list[i].price = price;
				temp_list[i].unit = quantity;
				break;
			}
		}
		set_added_items(temp_list);
	}

	function handle_delete(item_name) {
		const update_list = added_items.filter(
			(item) => item.name !== item_name
		);
		set_added_items(update_list);
	}

	const search_div = (
		<div className="shadow-lg shadow-gray-300 p-4 h-80 overflow-y-scroll">
			{filtered_list.map((item) => (
				<div
					className="my-1 btn btn-block btn-ghost"
					key={item.id}
					onClick={() =>
						handle_add_to_list({ name: item.name, id: item.id })
					}
				>
					{item.name}
				</div>
			))}
		</div>
	);
	const selected_div = (
		<div className="h-80">
			{added_items.map((item) => {
				return (
					<List_Item
						key={item.id}
						name={item.name}
						price={item.price}
						unit={item.unit}
						handle_edit={handle_edit}
						handle_delete={handle_delete}
					></List_Item>
				);
			})}
		</div>
	);

	return (
		<>
			<button
				className="btn btn-neutral"
				onClick={() =>
					document.getElementById("my_modal_3").showModal()
				}
			>
				Add New Items
			</button>
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box  h-128">
					{/* modal control */}
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>
					{/* modal content */}
					<h3 className="font-bold text-lg">Add New Items</h3>
					<div className="join  no-outline bg-[#DDDDDD] my-4 p-4 w-full">
						<div className="join-item pr-4">
							<SlMagnifierAdd size="2em"></SlMagnifierAdd>
						</div>
						<input
							type="text"
							className="w-full no-outline bg-[#DDDDDD]"
							placeholder="Search and Add"
							value={search_word}
							onChange={(e) => set_search_word(e.target.value)}
						/>
					</div>
					<div>{is_searching ? search_div : selected_div}</div>
				</div>
			</dialog>
		</>
	);
}
