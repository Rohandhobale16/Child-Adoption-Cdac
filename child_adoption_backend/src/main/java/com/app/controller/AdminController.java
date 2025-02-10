package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddChildHomeRequestDto;
import com.app.service.AdminService;
import com.app.service.UserService;
@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class AdminController {
	@Autowired
	private AdminService adminService;
	@DeleteMapping("/admin/deletechildhome/{id}")
	public ResponseEntity<?> deleteChildHome(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.deleteChildHome(id));
	}
	@DeleteMapping("/admin/deleteperent/{id}")
	public ResponseEntity<?> deleteParent(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.deleteParent(id));
	}
	@GetMapping("/admin")
	public ResponseEntity<?> getRequestData(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getRequestData());
	}
	@GetMapping("/admin/feedback/{id}")
	public ResponseEntity<?> getFeedback(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getFeedback(id));
	}
	@GetMapping("/admin/child")
	public ResponseEntity<?> getChildHome(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getChildHome());
	}
	@GetMapping("/admin/parent")
	public ResponseEntity<?> getParent(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getParent());
	}
	
}
