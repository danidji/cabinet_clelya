import {useState, useEffect} from "react";
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

import PaymentService from "@/services/client/payment.services";

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
                createOrder={async () => {
                    return await PaymentService.createPayment(paypalAmount);
                }}
                onApprove={async (data) => {
                    try {
                        const details = await PaymentService.capturePayment(data.orderID);
                        handleSuccess(details);
                    } catch (error) {
                        console.log({error});
                        handleCancel();
                    }
                }}
            />
        </PayPalScriptProvider>
    );
}
