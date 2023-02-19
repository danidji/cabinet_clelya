import {useState} from "react";

import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

interface PaypalButtonProps {
    amount: number;
}

export default function PaypalButton({amount}: PaypalButtonProps) {
    // const [paid, setPaid] = useState(false);

    // const handleSuccess = () => {
    //     setPaid(true);
    //     // Envoyer une notification au backend pour confirmer le paiement
    // };

    // const handleCancel = () => {
    //     // Gérer l'annulation du paiement
    // };

    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
        currency: "EUR",
        intent: "capture",
        components: "buttons",
    };

    return (
        <div className="paypal_buttons_container">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        console.log({amount});
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: `${amount}`,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions: any) => {
                        return actions.order.capture().then((details: any) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}
