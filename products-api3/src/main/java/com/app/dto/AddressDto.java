package com.app.dto;

import com.app.pojos.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto extends BaseEntityDto{
	private String houseNo;
	private String street;
	private String district;
	private String state;
	private String pincode;
	private String city;
	private boolean status;
}
