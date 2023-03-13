import {useState, useEffect} from "react";
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

interface PaypalButtonProps {
    amount: number;
}

export default function PaypalButton({amount}: PaypalButtonProps) {
    const [paypalAmount, setPaypalAmount] = useState(amount);

    useEffect(() => {
        setPaypalAmount(amount);
    }, [amount]);

    const handleSuccess = (details: any) => {
        const name = details.payer.name.given_name;
        alert(`Merci ${name}, votre paiement à bien été effectué`);
    };

    const handleCancel = () => {
        alert(`Ouups ! Votre paiement a été annulé`);
    };

    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
        currency: "EUR",
        intent: "capture",
        components: "buttons",
    };

    return (
        <PayPalScriptProvider options={initialOptions} deferLoading={false}>
            <PayPalButtons
                forceReRender={[paypalAmount]}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: paypalAmount.toString(),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions: any) => {
                    return actions.order
                        .capture()
                        .then((details: any) => {
                            handleSuccess(details);
                        })
                        .catch((error: any) => {
                            console.log({error});
                            handleCancel();
                        });
                }}
            />
        </PayPalScriptProvider>
    );
}
