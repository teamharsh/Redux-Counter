import { FiPlus, FiMinus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

const Button = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="flex justify-between space-x-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md" onClick={handleIncrement}>
        <FiPlus className="text-xl mr-2" />
      </button>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-md" onClick={handleDecrement}>
        <FiMinus className="text-xl mr-2" />
      </button>
    </div>
  );
};

export default Button;
