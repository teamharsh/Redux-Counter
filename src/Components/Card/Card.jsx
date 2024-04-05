import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import Button from '../Button/Button';

const Card = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <Header />
      <div className="mt-8">
        <Counter />
        <div className="mt-8">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Card;
