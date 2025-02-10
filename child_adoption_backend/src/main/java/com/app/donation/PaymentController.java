package com.app.donation;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentController {

    // Fetch Razorpay keys from application.properties
    @Value("${razorpay.key_id}")
    private String RAZORPAY_KEY_ID;

    @Value("${razorpay.key_secret}")
    private String RAZORPAY_KEY_SECRET;

    // Endpoint to create the Razorpay order
    @PostMapping("/create-order")
    public String createOrder(@RequestBody PaymentRequest paymentRequest) throws RazorpayException {
        RazorpayClient razorpayClient = new RazorpayClient(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET);

        // Creating the order request
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", paymentRequest.getAmount() * 100); // Amount in paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "order_rcptid_11");
        orderRequest.put("payment_capture", 1);

        // Creating the order using Razorpay API
        Order order = razorpayClient.orders.create(orderRequest);
        return order.toString();
    }

    // Endpoint to verify the payment
    @PostMapping("/verify-payment")
    public String verifyPayment(@RequestBody PaymentVerificationRequest verificationRequest) throws RazorpayException {
        RazorpayClient razorpayClient = new RazorpayClient(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET);

        JSONObject options = new JSONObject();
        options.put("razorpay_order_id", verificationRequest.getRazorpayOrderId());
        options.put("razorpay_payment_id", verificationRequest.getRazorpayPaymentId());
        options.put("razorpay_signature", verificationRequest.getRazorpaySignature());

        // Verifying the payment signature
        boolean isValid = Utils.verifyPaymentSignature(options, RAZORPAY_KEY_SECRET);

        if (isValid) {
            return "{\"status\":\"ok\"}";
        } else {
            return "{\"status\":\"error\"}";
        }
    }
}
