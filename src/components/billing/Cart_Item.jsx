import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

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
		<div className="my-8">
			<div className="label-text my-2 font-bold">{props.data.name}</div>
			<div className="flex place-content-between flex-wrap">
				<div className="label basis-full shrink-0 grow-0 lg:shrink-1 lg:basis-0 lg:grow-1">
					<button
						className="bg-[#004FE8] rounded-full p-2"
						onClick={() => {
							if (item_quantity > 0) {
								set_item_quantity(parseInt(item_quantity) - 1);
								props.set_cart_total(
									props.cart_total - props.data.price
								);
							}
						}}
					>
						<FaMinus size="1em" color="white"></FaMinus>
					</button>

					<div
						className={
							item_quantity === 0
								? "input input-md input-bordered w-full min-w-32 mx-4 flex items-center place-content-between bg-red-500/30"
								: "input input-md input-bordered w-full min-w-32 mx-4 flex items-center place-content-between"
						}
					>
						<div>{item_quantity}</div>
						<div>unit</div>
					</div>

					<button
						className="bg-[#004FE8] rounded-full p-2"
						onClick={() => {
							set_item_quantity(parseInt(item_quantity) + 1);
							props.set_cart_total(
								(prev) => prev + props.data.price
							);
						}}
					>
						<FaPlus size="1em" color="white"></FaPlus>
					</button>
				</div>
				<div className="">
					<p>price per unit</p>
					<p className="font-bold">{props.data.price}</p>
				</div>
				<div className="">
					<p>total</p>
					<p className="font-bold">
						{item_quantity * props.data.price}
					</p>
				</div>
				<div className="">
					<button
						className="btn btn-ghost mx-2"
						onClick={() => {
							props.set_cart_total(
								(prev) =>
									prev - props.data.price * item_quantity
							);

							props.handle_delete(props.data.name);
						}}
					>
						<GoTrash size="2em"></GoTrash>
					</button>
				</div>
			</div>
		</div>
	);
}
