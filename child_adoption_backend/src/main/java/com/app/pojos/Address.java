package com.app.pojos;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Setter
@Getter
@NoArgsConstructor
@Entity
@ToString
public class Address extends BaseEntity{
private String houseNo;
private String street;
private String district;
private String state;
private String pincode;
private String city;
private boolean status;
}
