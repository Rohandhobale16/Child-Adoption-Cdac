package com.app.controller;

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
		 System.out.println(authToken.isAuthenticated());
		 return ResponseEntity.status(HttpStatus.CREATED)
	                .body(new AuthResponseDto("Successful Auth !",jwtUtils.generateJwtToken(authToken)));

//		try {
			
//			Object o=userService.findByEmailandPassword(loginDto);
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
/*@PostMapping("/signin")
    @Operation(description = "User sign in")
    public ResponseEntity<?> userSignIn(@RequestBody @Valid
            AuthRequest dto) {
        System.out.println("in sign in "+dto);
        //1. Create auth token using suser supplied em n pwd
        UsernamePasswordAuthenticationToken 
        authenticationToken = new UsernamePasswordAuthenticationToken
        (dto.getEmail(),dto.getPassword());
        System.out.println(authenticationToken.isAuthenticated());//f
        //2. invoke Spring sec supplied auth mgr's authenticate method
        Authentication authToken = 
                authenticationManager.authenticate(authenticationToken);
        //=> auth success
        System.out.println(authToken.isAuthenticated());//t
        //3 . Send auth respone to the client containing JWTS
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AuthResp("Successful Auth !",
                        jwtUtils.generateJwtToken(authToken)));     
        
    }*/