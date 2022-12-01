import { useEffect, useState, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import catPhoto from "./assets/cat1.png";

function DonateForm() {
  // ** State for the donation amount selected in the `AmountPicker` component  The amount is set onChange in the `AmountPicker` fieldset **
  const [amount, setAmount] = useState("5.00");

  return (
    <form className="DonateForm">
      <AmountPicker
        onAmountChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <div className=" w-full">
        {/* ** `currency` and `amount` get passed to the Donate button so that the selected amount is populated at checkout **  */}
        <DonateButton currency="USD" amount={amount} />
      </div>
    </form>
  );
}

function AmountPicker({ onAmountChange }) {
  // ** state `isCustomSelected` and function `handleCustomNotSelected` for conditional rendering of the number input for custom donation amount **
  const [isCustomSelected, setIsCustomSelected] = useState(false);

  function handleCustomNotSelected() {
    setIsCustomSelected(false);
  }

  return (
    <fieldset className="" onChange={onAmountChange}>
      <legend className="md:text-xl pb-2">Donation Amount</legend>
      <div className="form-control">
        <label className="label">
          <input
            type="radio"
            value="5.00"
            defaultChecked="true"
            name="amount"
            className="radio checked"
            id="amountChoice1"
            onFocus={handleCustomNotSelected}
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
            onFocus={handleCustomNotSelected}
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
            onFocus={handleCustomNotSelected}
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

function DonateButton({ currency, amount }) {
  // ** `amountRef` keeps track of the selected donation amount when a change is made in the `AmountPicker` component **
  const amountRef = useRef(amount);

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  function onApproveOrder(data, actions) {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Donation completed by ${name}`);
    });
  }

  return (
    <PayPalButtons
      style={{ color: "black", label: "donate" }}
      fundingSource="paypal"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amountRef.current,
                breakdown: {
                  item_total: {
                    currency_code: currency,
                    value: amountRef.current,
                  },
                },
              },
              items: [
                {
                  name: "Donate to Kitty's House",
                  description:
                    "All proceeds directly support Kitty's House Cat Rescue",
                  quantity: "1",
                  unit_amount: {
                    currency_code: currency,
                    value: amountRef.current,
                  },
                  category: "DONATION",
                },
              ],
            },
          ],
        });
      }}
      onApprove={(data, actions) => onApproveOrder(data, actions)}
    />
  );
}

export function DonateApp() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "test",
        components: "buttons",
        currency: "USD",
      }}
    >
      <DonationCardText>
        <DonateForm />
      </DonationCardText>
    </PayPalScriptProvider>
  );
}

function DonationCardText({ children }) {
  return (
    <div className="container w-[90%] md:w-[616px] grid justify-content-center h-96 py-8">
      <div className="card bg-base-100 shadow-xl ">
        <figure>
          <img
            src={catPhoto}
            alt="A black cat looking straight into the camera. A cat tree in the background"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-2xl md:text-5xl font-bold card-title pb-2">
            Donate to Kitty's House
          </h1>
          <p>
            Kitty's House is a non-profit cat rescue and retreat. We foster
            kittens until they reach adoption age. We also have senior cats who
            are eligible to be adopted into their forever home. They still have
            a lot of love to give!
          </p>
          <p>Help us continue our mission and donate to Kitty's House today.</p>

          {children}
        </div>
      </div>
    </div>
  );
}
