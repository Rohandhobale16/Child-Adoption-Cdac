package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


	@Getter
	@Setter
	@AllArgsConstructor
	@NoArgsConstructor
	public class AuthResponseDto {
	    private String message;
	    private String jwt;
	    private Long id;
	    private String role;
	}

