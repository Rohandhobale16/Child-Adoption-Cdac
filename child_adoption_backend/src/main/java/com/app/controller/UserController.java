package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ChildHomeResponseDto;
import com.app.dto.EmployeeResponseDto;
import com.app.dto.LoginRequestDto;
import com.app.dto.ParentResponseDto;
import com.app.dto.UserResponseDto;
import com.app.security.JwtUtils;
import com.app.service.UserService;
import com.app.dto.*;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtils jwtUtils;
	@PostMapping("/Login")
	public ResponseEntity<?> login(@RequestBody LoginRequestDto loginDto) {
		UsernamePasswordAuthenticationToken 
        authenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getEmail(),loginDto.getPassword());
		Authentication authToken = authenticationManager.authenticate(authenticationToken);
		LoginResponseDto l=userService.findByEmailandPassword1(loginDto);
		 System.out.println(authToken.isAuthenticated());
		 return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResponseDto("success",jwtUtils.generateJwtToken(authToken), l.getId(),l.getRole()));

//		try {Object o=userService.findByEmailandPassword(loginDto);
//		
//		if(o instanceof ParentResponseDto) {
//			ParentResponseDto ob=(ParentResponseDto)o;
//			return ResponseEntity.status(HttpStatus.OK)
//					.body(ob);
//		}
//		else if(o instanceof ChildHomeResponseDto) {
//			ChildHomeResponseDto ob=(ChildHomeResponseDto)o;
//			return ResponseEntity.status(HttpStatus.OK)
//					.body(ob);
//		}
//		else if(o instanceof EmployeeResponseDto) {
//			EmployeeResponseDto ob=(EmployeeResponseDto)o;
//			return ResponseEntity.status(HttpStatus.OK)
//					.body(ob);
//		}
//		else
//		{
//			UserResponseDto ob=(UserResponseDto)o;
//			return ResponseEntity.status(HttpStatus.OK)
//					.body(ob);
//		}
//		
//		
//	}catch(RuntimeException e) {
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//				.body(new ApiResponse(e.getMessage()));
//	}
}
	@PostMapping("/addchildhome")
	public ResponseEntity<?> addCategory( @RequestBody AddChildHomeRequestDto dto ){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addChildHome(dto));
	}
	@PostMapping("/contactus")
	public ResponseEntity<?> addContactus( @RequestBody AddContactUsDto dto ){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addContactUs(dto));
	}
	@PostMapping("/addparent")
	public ResponseEntity<?> addParent( @RequestBody AddParentRequestDto dto ){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addParentDto(dto));
	}
	@GetMapping("/getchildhomedetails")
	public ResponseEntity<?> getChildHomeDetails( ){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.getChildHomeDetails());
	}
	@GetMapping("/geteventdetails")
	public ResponseEntity<?> getEventDetails( ){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.getChildHomeDetails());
	}
}
/*
@RestController
@RequestMapping("/Category")
public class CategoryController {
	
	@PostMapping("/add/{foodType}")
	public ResponseEntity<?> addCategory( @PathVariable FoodType foodType ){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(categoryService.addcategory(foodType));
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteRestaurent(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(categoryService.deleteCategory(id));
	}
}*/