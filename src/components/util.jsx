export const calculateDiscount = (price, discount) => {
  const discountedPrice = price - (price * discount) / 100;
  return (
    <p className="">
      ${discountedPrice} <span className="text-gray-500 line-through"> ${price}</span>
    </p>
  );
};
