package com.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@PreAuthorize("hasAuthority('PARENT')")
public class ParentController {

	@GetMapping("/parent")
	public ResponseEntity<?> getRequestData(){
		return ResponseEntity.status(HttpStatus.OK)
				.body("hello parent");
	}
}
