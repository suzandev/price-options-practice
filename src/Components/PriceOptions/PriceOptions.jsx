import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29,
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
      price: 49,
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
      price: 79,
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
    <div className="mt-12 px-4">
      <h3 className="text-center text-2xl md:text-5xl">
        Best prices in the town
      </h3>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
