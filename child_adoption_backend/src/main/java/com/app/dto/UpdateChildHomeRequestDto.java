package com.app.dto;

import com.app.pojos.UserRole;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class UpdateChildHomeRequestDto {
	private String houseNo;
	private String street;
	private String district;
	private String state;
	private String pincode;
	private String city;
	private String houseName;
	private int inHome;
	private int adoptable;
	private String fname;
	private String lname;
	private String mobile;
	private String email;
	private String password;
	private String bankAccount;
	private String ifscCode;
	private Long id;
}
