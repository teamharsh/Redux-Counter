import { useRef } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="flex justify-between space-x-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md"
          onClick={handleIncrement}
        >
          <FiPlus className="text-xl mr-2" />
        </button>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-md"
          onClick={handleDecrement}
        >
          <FiMinus className="text-xl mr-2" />
        </button>
      </div>
      <div className="mt-4 flex justify-between space-x-4">
        <input
          type="number"
          placeholder="Enter Number"
          className="border border-gray-300 rounded-md px-3 py-2"
          ref={inputElement}
        />
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-md"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Button;
