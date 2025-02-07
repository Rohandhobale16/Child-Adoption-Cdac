package com.app.dto;

import com.app.pojos.Gender;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AddChildRequestDto extends BaseEntityDto{
	    private String name;
	    private int age;
	    private Gender gender;
	    private Long ch; 
}
