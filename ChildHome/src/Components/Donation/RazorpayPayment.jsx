import React, { useState } from "react";
 // Import Bootstrap CSS

const RazorpayPayment = () => {
  const [amount, setAmount] = useState("");

  const payNow = async () => {
    try {
      // Create order by calling the server endpoint
      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency: "INR",
          receipt: "receipt#1",
          notes: {},
        }),
      });

      const order = await response.json();

      // Open Razorpay Checkout
      const options = {
        key: "rzp_test_wBrQr87m3vtD3z", // Replace with your Razorpay key_id
        amount: order.amount,
        currency: order.currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: order.id, // This is the order_id created in the backend
        callback_url: "http://localhost:5000/payment-success", // Your success URL
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
        handler: function (response) {
          fetch("http://localhost:5000/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "ok") {
                window.location.href = "/payment-success";
              } else {
                alert("Payment verification failed");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("Error verifying payment");
            });
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Razorpay Payment Gateway</h1>
          <form id="payment-form">
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
                placeholder="Enter amount in INR"
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={payNow}
                className="btn btn-primary btn-lg w-100"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RazorpayPayment;
