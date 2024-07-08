import { useEffect, useState } from "react";

export default function List_Item(props) {
	// console.log("props");
	// console.log(props);
	const [price, set_price] = useState(props.price);
	const [unit, set_unit] = useState(props.unit);
	useEffect(() => {
		props.handle_edit(props.name, unit, price);
	}, [price, unit]);
	return (
		<div className="my-4">
			{/* {console.log(props.name + " " + unit + " " + price)} */}
			<div>{props.name}</div>
			<div className="flex my-2">
				<div className="w-5/6 flex">
					<input
						className="input input-bordered w-3/6"
						typ
						e="number"
						value={unit}
						onChange={(e) => set_unit(e.target.value)}
						placeholder="Unit"
					/>
					<input
						className="input input-bordered w-3/6 mx-4"
						type="number"
						value={price}
						onChange={(e) => set_price(e.target.value)}
						placeholder="Per Unit Price"
					/>
				</div>
				<div className="w-1/6">
					<button
						className="btn "
						onClick={() => props.handle_delete(props.name)}
					>
						delete
					</button>
				</div>
			</div>
			<div className="my-4">
				<hr />
			</div>
		</div>
	);
}
