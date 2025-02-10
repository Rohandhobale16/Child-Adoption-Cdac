package com.app.dto;

import com.app.pojos.Child;
import com.app.pojos.Parent;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class RequestDto extends BaseEntityDto{
	private ParentResponseDto p;
	private ChildResponseDto c;
	private ChildHomeResponseDto ch;
	private String status;
	private String feedBack;
	private String message;
}
