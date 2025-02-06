package com.app.dto;

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
public class UpdateEmployeeRequestDto  {
	private String fname;
	private String lname;
	private String mobile;
	private String email;
	private String password;
	private String houseNo;
	private String street;
	private String district;
	private String state;
	private String pincode;
	private String city;
	private Long id;
}

