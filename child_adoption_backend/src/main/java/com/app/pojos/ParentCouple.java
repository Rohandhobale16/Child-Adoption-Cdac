package com.app.pojos;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class ParentCouple extends BaseEntity{
	private String partnerfname;
	private String partnerlname;
	@Enumerated(EnumType.STRING)
	private Gender partnergender;
	private String partneraadhar;
	private String partnermobile;
	private String partneremail;
	private String partnernationality;
	private String partnerdob;
	private String partneroccupation;
	private Long partnerincome;
	private boolean status;
}
