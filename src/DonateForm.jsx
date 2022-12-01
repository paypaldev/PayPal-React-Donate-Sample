import AmountPicker from "./AmountPicker";
import DonateButton from "./DonateButton";

import { useState } from "react";

export default function DonateForm() {
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
