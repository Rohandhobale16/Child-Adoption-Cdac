package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ChildHomeResponseDto;
import com.app.dto.EmployeeResponseDto;
import com.app.dto.LoginRequestDto;
import com.app.dto.ParentResponseDto;
import com.app.dto.UserResponseDto;
import com.app.service.UserService;

import com.app.dto.*;
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	@PostMapping("/Login")
	public ResponseEntity<?> login(@RequestBody LoginRequestDto loginDto) {
		try {Object o=userService.findByEmailandPassword(loginDto);
		
		if(o instanceof ParentResponseDto) {
			ParentResponseDto ob=(ParentResponseDto)o;
			return ResponseEntity.status(HttpStatus.OK)
					.body(ob);
		}
		else if(o instanceof ChildHomeResponseDto) {
			ChildHomeResponseDto ob=(ChildHomeResponseDto)o;
			return ResponseEntity.status(HttpStatus.OK)
					.body(ob);
		}
		else if(o instanceof EmployeeResponseDto) {
			EmployeeResponseDto ob=(EmployeeResponseDto)o;
			return ResponseEntity.status(HttpStatus.OK)
					.body(ob);
		}
		else
		{
			UserResponseDto ob=(UserResponseDto)o;
			return ResponseEntity.status(HttpStatus.OK)
					.body(ob);
		}
		
		
	}catch(RuntimeException e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new ApiResponse(e.getMessage()));
	}
}
	@PostMapping("/addchildhome")
	public ResponseEntity<?> addCategory( @RequestBody AddChildHomeRequestDto dto ){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addChildHome(dto));
	}
	@PostMapping("/addparent")
	public ResponseEntity<?> addParent( @RequestBody AddParentRequestDto dto ){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addParentDto(dto));
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