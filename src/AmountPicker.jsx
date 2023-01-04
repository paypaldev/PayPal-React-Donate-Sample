import { useState } from "react";

export default function AmountPicker({ onAmountChange }) {
  // ** state `isCustomSelected` and function `handleCustomNotSelected` for conditional rendering of the number input for custom donation amount **
  const [isCustomSelected, setIsCustomSelected] = useState(false);

  return (
    <fieldset onChange={onAmountChange}>
      <legend>Donation Amount</legend>
      <div className="form-control">
        <p>
          To donate to Kitty's House, choose a donation amount or enter a custom
          amount and click the donate button. We appreciate your generosity and
          thank you for your support!
        </p>
        <label className="label">
          <input
            type="radio"
            value="5.00"
            defaultChecked="true"
            name="amount"
            className="radio checked"
            id="amountChoice1"
            onFocus={() => setIsCustomSelected(false)}
          />
          <span className="label-text md:text-lg">$5.00</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <input
            type="radio"
            value="10.00"
            name="amount"
            id="amountChoice2"
            className="radio"
            onFocus={() => setIsCustomSelected(false)}
          />
          <span className="label-text md:text-lg">$10.00</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <input
            type="radio"
            value="15.00"
            name="amount"
            id="amountChoice3"
            className="radio"
            onFocus={() => setIsCustomSelected(false)}
          />
          <span className="label-text md:text-lg">$15.00</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <input
            type="radio"
            value="enter a custom amount"
            name="amount"
            className="radio"
            id="customAmountChoice"
            onFocus={() => {
              setIsCustomSelected(true);
            }}
          />
          <span className="label-text md:text-lg">
            Custom donation amount: $
          </span>
          {isCustomSelected && (
            <input
              type="number"
              name="amount"
              id="customAmountNumberInput"
              className="input input-sm md:input-md input-bordered w-24"
              placeholder="25.00"
            />
          )}
        </label>
      </div>
    </fieldset>
  );
}
