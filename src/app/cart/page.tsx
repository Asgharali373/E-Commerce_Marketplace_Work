
// "use client";

// import { Product } from "../../../types/products";
// import React, { useEffect, useState } from "react";
// import {
//   getCartItems,
//   removeFromCart,
//   updateCartQuantity,
// } from "../actions/actions";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);


//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);


//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to undo this action!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//         Swal.fire(
//           "Removed!",
//           "Item has been removed from your cart.",
//           "success"
//         );
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product) {
//       handleQuantityChange(id, product.inventory + 1);
//     }
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product && product.inventory > 1) {
//       handleQuantityChange(id, product.inventory - 1);
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.inventory,
//       0
//     );
//   };

//   const router=useRouter();
//   const handleProceed = () => {
//     Swal.fire({
//       title: "Processing your order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Proceed",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(
//           "Success!",
//           "Your order has been successfully processed!",
//           "success"
//         );
//         router.push("/checkout");
//         // Clear the cart after proceeding (optional)
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

//       <div className="space-y-6">
//         {cartItems.length > 0 ? (
//           cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
//             >
//               <div className="flex items-center">
//                 {item.image && (
//                   <Image
//                     src={urlFor(item.image).url()}
//                     className="w-16 h-16 object-cover rounded-lg"
//                     alt="image"
//                     width={500}
//                     height={500}
//                   />
//                 )}
//                 <div className="ml-4">
//                   <h2 className="text-lg font-semibold">{item.title}</h2>
//                   <p className="text-gray-500">Price: ${item.price}</p>
//                   <div className="flex items-center mt-2">
//                     <button
//                       onClick={() => handleDecrement(item._id)}
//                       className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{item.inventory}</span>
//                     <button
//                       onClick={() => handleIncrement(item._id)}
//                       className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   onClick={() => handleRemove(item._id)}
//                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600 text-center">Your cart is empty.</p>
//         )}
//       </div>

//       {cartItems.length > 0 && (
//         <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Total:</h2>
//             <p className="text-xl font-bold text-gray-800">
//               ${calculateTotal().toFixed(2)}
//             </p>
//           </div>
//           <button
//             onClick={handleProceed}
//             className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//           >
//             Proceed
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
"use client";

import { Product } from "../../../types/products";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff5252",
      cancelButtonColor: "#00bcd4",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#00e676",
      cancelButtonColor: "#ff5252",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        router.push("/checkout");
        setCartItems([]); // Clear cart after proceeding (optional)
      }
    });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-purple-400 text-center">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="text-gray-400">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-500"
                    >
                      -
                    </button>
                    <span className="mx-3 text-lg">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-500"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Total:</h2>
            <p className="text-2xl font-bold text-green-400">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-5 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-400 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
