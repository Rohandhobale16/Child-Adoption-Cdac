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
public class ParentCoupleResponseDto extends BaseEntityDto{
	private String partneraadhar;
	private String partnerdob;
	private String partneremail;
	private String partnerfname;
	private String partnerincome;
	private String partnerlname;
	private String partnermobile;
	private String partnernationality;
	private String partneroccupation;
	private String partnergender;
}
