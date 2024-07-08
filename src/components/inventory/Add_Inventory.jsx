import { useEffect, useState } from "react";
import List_Item from "./List_Item";

export default function Add_Invetory() {
	const [item_list, set_item_list] = useState([]);
	const [filtered_list, set_filtered_list] = useState([]);
	const [added_items, set_added_items] = useState([]);
	const [is_searching, set_is_searching] = useState(false);
	const [search_word, set_search_word] = useState("");
	useEffect(() => {
		fetch("all_products.json")
			.then((res) => res.json())
			.then((data) => set_item_list(data.names));
	}, []);

	useEffect(() => {
		if (search_word === "") {
			set_is_searching(false);
		} else {
			set_is_searching(true);
		}
		set_filtered_list(
			item_list.filter((item) => item.includes(search_word))
		);
	}, [search_word]);

	function handle_add_to_list(item) {
		set_search_word("");
		for (let i = 0; i < added_items.length; i++) {
			if (added_items[i].name === item) {
				return;
			}
		}
		set_added_items([...added_items, { name: item, unit: "", price: "" }]);
	}

	function handle_edit(item, quantity, price) {
		// console.log("editing");
		// console.log(item + " " + quantity + " " + price);

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
		// console.log(item_name);
		const update_list = added_items.filter(
			(item) => item.name !== item_name
		);
		// console.log(update_list);
		set_added_items(update_list);
	}

	const search_div = (
		<>
			{filtered_list.map((item, index) => (
				<div key={index} onClick={() => handle_add_to_list(item)}>
					{item}
				</div>
			))}
		</>
	);
	const selected_div = (
		<>
			{/* {console.log("rerender")} */}
			{added_items.map((item, index) => {
				// console.log(item.name + " " + item.unit + " " + item.price);

				return (
					<List_Item
						key={index}
						name={item.name}
						price={item.price}
						unit={item.unit}
						handle_edit={handle_edit}
						handle_delete={handle_delete}
					></List_Item>
				);
			})}
		</>
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
				<div className="modal-box">
					{/* modal control */}
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>
					{/* modal content */}
					<h3 className="font-bold text-lg">Add New Items</h3>
					<div>
						<input
							type="text"
							className="input input-bordered w-full my-4 bg-gray-300"
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
