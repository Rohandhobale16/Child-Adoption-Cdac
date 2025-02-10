package com.app.dto;

import com.app.pojos.Gender;

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
public class ParentResponseDto extends BaseEntityDto{
private String marrigeStatus;
private Gender gender;
private String nationality;
private String dob;
private String occupation;
private Long annualIncome;
private UserResponseDto u;
private ParentCoupleResponseDto pc;
}
