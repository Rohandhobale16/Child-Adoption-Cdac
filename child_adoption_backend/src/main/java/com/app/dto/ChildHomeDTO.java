package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChildHomeDTO {
    private String houseName;
    
    // Address details
    private String houseNo;
    private String street;
    private String city;
    private String district;
    private String state;
    private String pincode;
    
    // Contact details
    private String userMobile;
}
