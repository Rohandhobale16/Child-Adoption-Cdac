package com.app.controller;



import lombok.Data;

@Data
public class PaymentRequest {
    private int amount;
    private String currency;
    private String receipt;
}
