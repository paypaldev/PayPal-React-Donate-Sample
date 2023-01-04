import { useRef, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function DonateButton({ amount }) {
  // ** `amountRef` keeps track of the selected donation amount when a change is made in the `AmountPicker` component without a rerendering **
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
  const fundingSources = ["paypal", "venmo"];
  const buttons = fundingSources.map((fundingSource) => (
    <li key={fundingSource}>
      <PayPalButtons
        style={{ label: "donate" }}
        // ** `fundingSource="paypal` to show only the PayPal Donate button **
        fundingSource={fundingSource}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amountRef.current,
                  breakdown: {
                    item_total: {
                      currency_code: "USD",
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
                      currency_code: "USD",
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
    </li>
  ));

  return <ul>{buttons}</ul>;
}
