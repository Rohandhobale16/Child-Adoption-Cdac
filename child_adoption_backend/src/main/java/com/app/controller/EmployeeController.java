package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddEmployeeRequestDto;
import com.app.dto.ApiResponse;
import com.app.dto.UpdateEmployeeRequestDto;
import com.app.service.ChildHomeService;
import com.app.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	@Autowired
	 private EmployeeService employeeService;
	@PostMapping("/employee/updateemployee/{id}")
    public ResponseEntity<?> updateSocialWorker(@PathVariable Long id,@RequestBody UpdateEmployeeRequestDto dto) {
        try {
            ApiResponse response = employeeService.updateSocialWorker(id,dto);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	@GetMapping("/employee/getemployeedetails/{id}")
    public ResponseEntity<?> getSocialWorkerDetails(@PathVariable Long id) {
        try {
             
             return ResponseEntity.status(HttpStatus.OK).body(employeeService.getSocialWorkerDetails(id));
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	@GetMapping("/employee/getrequestdetails")
    public ResponseEntity<?> getRequestDetails() {
        try {
             
             return ResponseEntity.status(HttpStatus.OK).body(employeeService.getRequestDetails());
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	@PostMapping("/employee/updaterequest/{id}")
    public ResponseEntity<?> updateRequestStatus(@PathVariable Long id,@RequestBody String status) {
        try {
            ApiResponse response = employeeService.updateRequestStatus(id,status);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
}
