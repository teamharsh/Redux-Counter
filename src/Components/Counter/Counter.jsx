import { useSelector } from "react-redux";

const Counter = () => {
  const counterValue = useSelector((state) => state.counter);
  console.log(typeof counterValue);
  console.log(counterValue);

  return (
    <div className="text-xl py-4 px-2 text-center bg-gray-200 rounded-md shadow-md">
      Current Counter: {counterValue}
    </div>
  );
};

export default Counter;
