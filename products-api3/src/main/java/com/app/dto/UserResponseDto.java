package com.app.dto;

import com.app.pojos.Address;
import com.app.pojos.Gender;
import com.app.pojos.UserRole;
import com.app.dto.*;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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
public class UserResponseDto extends BaseEntityDto{
	private String fname;
	private String lname;
	private String mobile;
	private String email;
	private String password;
	private UserRole role;
	private AddressDto address;
	private boolean status;
}
