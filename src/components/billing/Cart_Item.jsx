import { useEffect, useState } from "react";

export default function Cart_Item(props) {
	const [item_quantity, set_item_quantity] = useState(
		parseInt(props.data.quantity)
	);
	useEffect(() => {
		let updated_data = props.cart_data;
		for (let i = 0; i < updated_data.length; i++) {
			if (updated_data[i].name === props.data.name) {
				updated_data[i].quantity = item_quantity;
			}
		}
		props.set_cart_data(updated_data);
	}, [item_quantity]);

	return (
		<div className="my-4">
			<div className="label-text my-2">{props.data.name}</div>
			<div className="flex gap-10 place-content-between">
				<div className="label">
					<button
						className="btn btn-circle btn-sm btn-neutral"
						onClick={() => {
							if (item_quantity > 0) {
								set_item_quantity(parseInt(item_quantity) - 1);
								props.set_cart_total(
									props.cart_total - props.data.price
								);
							}
						}}
					>
						-
					</button>

					<div className="input input-md input-bordered w-full min-w-32 mx-4 flex items-center place-content-between">
						<div>{item_quantity}</div>
						<div>unit</div>
					</div>

					<button
						className="btn btn-circle btn-sm btn-neutral"
						onClick={() => {
							set_item_quantity(parseInt(item_quantity) + 1);
							props.set_cart_total(
								props.cart_total + props.data.price
							);
						}}
					>
						+
					</button>
				</div>
				<div>
					<p>price per unit</p>
					<p>{props.data.price}</p>
				</div>
				<div>
					<p>total</p>
					<p>{item_quantity * props.data.price}</p>
				</div>
				<div>
					<button
						className="btn btn-outline"
						onClick={() => {
							props.set_cart_total(
								props.cart_total -
									props.data.price * item_quantity
							);

							props.handle_delete(props.data.name);
						}}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
