import { useId } from "react";
import PropTypes from "prop-types";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();

  // Validate amount to ensure it's a number
  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      onAmountChange && onAmountChange(value);
    }
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.length > 0 ? (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          ) : (
            <option value="">No currencies available</option>
          )}
        </select>
      </div>
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  selectCurrency: PropTypes.string,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
