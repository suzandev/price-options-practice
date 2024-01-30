import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="flex flex-col rounded-md bg-blue-500 p-4 text-white ">
      <h3 className="text-center">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-3xl">/mo</span>
      </h3>

      <h3 className="my-8 text-center text-2xl font-bold">{name}</h3>
      <ul className=" flex-grow pl-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FaRegCheckCircle className="mr-2" size={22} /> {feature}
          </li>
        ))}
      </ul>

      <button className="btn btn-primary mt-4 w-full rounded-lg text-lg">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.node,
};

export default PriceOption;
