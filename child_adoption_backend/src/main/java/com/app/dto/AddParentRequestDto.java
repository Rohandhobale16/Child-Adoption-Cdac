package com.app.dto;

import com.app.pojos.Gender;
import com.app.pojos.UserRole;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class AddParentRequestDto {
	private String fname;
	private String lname;
	private String mobile;
	private String email;
	private String password;
	private UserRole role;
	private String houseNo;
	private String street;
	private String district;
	private String state;
	private String pincode;
	private String city;
	private boolean marrigeStatus;
	private Gender gender;
	private String nationality;
	private String dob;
	private String occupation;
	private Long annualIncome;
}
