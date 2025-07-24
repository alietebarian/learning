import { BsTrash2 } from "react-icons/bs";
import { useCart } from "../context/CourseContext";

export default function ShoppingCart() {

    const { cart, removeFromCart } = useCart()

    const totalPrice = cart.reduce((sum, x) => sum + x.price, 0); 

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">
          🛒 سبد خرید شما
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-xl">سبد خرید شما خالی است </p>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-contain rounded-lg border"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        تعداد:{" "}
                        <span className="font-medium">{item.quantity}</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        قیمت: <span className="font-medium">${item.price}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 transition flex items-center gap-1 cursor-pointer"
                  >
                    <BsTrash2 size={20} className="cursor-pointer" />
                    حذف
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-right border-t pt-4">
              <p className="text-xl font-bold text-gray-800">
                مجموع قیمت کل:{" "}
                <span className="text-green-600">${totalPrice.toFixed(2)}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
