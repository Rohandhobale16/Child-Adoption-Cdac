
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
public class AddEmployeeRequestDto extends BaseEntityDto{
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
	private Long chId;
	private boolean status;
}
