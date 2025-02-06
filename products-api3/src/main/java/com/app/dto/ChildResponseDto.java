package com.app.dto;

import com.app.pojos.ChildHome;
import com.app.pojos.Gender;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class ChildResponseDto extends BaseEntityDto{
	private String name;
	private int age;
	private Gender gender;
	private ChildHomeResponseDto ch;
}
