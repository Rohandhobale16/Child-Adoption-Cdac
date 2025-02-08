package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ParentDTO {
    private Long id;
    private String marriageStatus;

    // Parent Details
    private String fname;
    private String lname;
    private String email;
    private String gender;
    private String occupation;
    private Long annualIncome;

    // Partner Details (Only if married)
    private String partnerFname;
    private String partnerLname;
    private String partnerEmail;
    private String partnerGender;
    private String partnerOccupation;
    private Long partnerIncome;

    // Common Address Details
    private String houseNo;
    private String street;
    private String city;
    private String district;
    private String state;
    private String pincode;
}
