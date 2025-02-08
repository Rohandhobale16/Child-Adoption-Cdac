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
	private String marrigeStatus;
	private Gender gender;
	private String nationality;
	private String dob;
	private String occupation;
	private Long income;
	private String aadhar;
	private String partneraadhar;
	private String partnerdob;
	private String partneremail;
	private String partnerfname;
	private Long partnerincome;
	private String partnerlname;
	private String partnermobile;
	private String partnernationality;
	private String partneroccupation;
	private Gender partnergender;
}


/*
 aadhar
: 
"22"
city
: 
"a"
district
: 
"a"
dob
: 
"2025-02-06"
email
: 
"a"
fname
: 
"a"
gender
: 
"Male"
houseNo
: 
"a"
income
: 
"a"
lname
: 
"a"
material
: 
"Married"
mobile
: 
"20"
nationality
: 
"Indian"
occupation
: 
"15"
partneraadhar
: 
"22"
partnerdob
: 
"2025-02-06"
partneremail
: 
"b@gmail.com"
partnerfname
: 
"a"
partnergender
: 
"Female"
partnerincome
: 
"22"
partnerlname
: 
"a"
partnermobile
: 
"19"
partnernationality
: 
"Indian"
partneroccupation
: 
"16"
password
: 
"a"
pincode
: 
"a"
state
: 
"a"
street
: 
"a"
 */