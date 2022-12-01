import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import DonateForm from "./DonateForm";
import DonationCardText from "./DonationCardText";

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
