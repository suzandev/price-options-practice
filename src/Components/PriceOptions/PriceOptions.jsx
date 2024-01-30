import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Limited group fitness classes",
        "Locker room access",
        "Online workout videos",
        "Discounts on merchandise",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Full access to all gym equipment",
        "Unlimited group fitness classes",
        "Personalized workout plans",
        "Sauna and steam room access",
        "Nutritional counseling",
        "Priority class reservations",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: 79.99,
      features: [
        "Access for two adults and two children",
        "Discounts on personal training sessions",
        "Family-friendly fitness classes",
        "Childcare services",
        "Monthly family fitness events",
        "Free family guest passes",
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-5xl">Best Prices in the town</h3>
      {priceOptions.map((option) => (
        <PriceOption option={option} key={option.id} />
      ))}
    </div>
  );
};

export default PriceOptions;
