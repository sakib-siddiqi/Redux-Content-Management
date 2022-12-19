import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  decrimentCart,
  incrimentCart,
  remove_from_cart,
} from "../../../redux/slice/cart.slice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  function on_remove_from_cart() {
    dispatch(remove_from_cart(product.id));
  }
  return (
    <figure className="p-2 rounded-md border-2 border-indigo-600/20 mb-3 relative hover:border-indigo-600/50">
      <div className="grid grid-cols-6 gap-4">
        <img
          src={product.image}
          alt={product.title}
          className=" h-20 object-contain object-center mx-auto"
        />
        <div className="col-span-4">
          <h5 className="text-md font-semibold mb-2 text-stale-800">
            {product.title}
          </h5>
          <span className="inline-block rounded-md p-1 text-xs font-semibold tracking-wide border border-indigo-400 text-indigo-900 bg-indigo-100">
            {product.category}
          </span>
          <span className="ml-4 inline-block rounded-md p-1 text-xs font-bold tracking-wide border border-green-500 text-green-900 bg-green-100">
            $ {product.price}
          </span>
        </div>
        <div className="grid place-items-center">
          <div className="flex gap-2">
            <button
              className="mx-auto p-1 rounded-md ring-2 ring-slate-300 active:ring-offset-1 bg-slate-600 hover:bg-slate-700 text-white font-bold border-2"
              onClick={() => dispatch(decrimentCart(product.id))}
            >
              <MinusIcon className="h-4 w-4" aria-label="Remove from cart" />
            </button>
            <span className="inline-grid place-items-center rounded-full ring-2 text-md font-bold tracking-wide bg-indigo-500 text-white h-8 w-8">
              {product.quantity}
            </span>
            <button
              onClick={() => dispatch(incrimentCart(product.id))}
              className="mx-auto p-1 rounded-md ring-2 ring-slate-300 active:ring-offset-1 bg-slate-600 hover:bg-slate-700 text-white font-bold border-2"
            >
              <PlusIcon className="h-4 w-4" aria-label="Remove from cart" />
            </button>
          </div>
          <button
            className="mx-auto p-1 rounded-md ring-2 ring-rose-300 active:ring-offset-1 bg-rose-600 hover:bg-rose-700 text-white font-bold border-2"
            onClick={on_remove_from_cart}
          >
            <XMarkIcon className="h-6 w-6" aria-label="Remove from cart" />
          </button>
        </div>
      </div>
    </figure>
  );
};

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <div>
      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6 items-start">
          <div className="col-span-2">
            {!!cart.length ? (
              cart.map((product) => <CartCard product={product} />)
            ) : (
              <p className="text-md font-semibold font-mono text-rose-600">
                No item in the cart.{" "}
                <NavLink
                  to="/"
                  className="underline underline-offset-4 text-indigo-400"
                >
                  Shop Now
                </NavLink>
              </p>
            )}
          </div>
          <div className="min-h-[300px] bg-slate-200 rounded-md">
            <h4 className="text-xl font-semibold text-slate-900 tracking-wide  p-2">
              Price
            </h4>
            <h4 className="text-2xl font-semibold tracking-wider font-mono text-indigo-50 bg-slate-900 p-3">
              $
              {Math.round(
                cart.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
