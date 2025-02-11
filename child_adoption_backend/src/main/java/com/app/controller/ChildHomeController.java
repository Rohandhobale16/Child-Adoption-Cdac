package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddChildHomeRequestDto;
import com.app.dto.AddChildRequestDto;
import com.app.dto.AddEmployeeRequestDto;
import com.app.dto.ApiResponse;
import com.app.dto.UpdateChildHomeRequestDto;
import com.app.dto.UpdateEmployeeRequestDto;
import com.app.dto.AddEventsDto;
import com.app.dto.AddRequestDto;
import com.app.service.ChildHomeService;
import java.util.*;
import com.app.dto.ChildDto;
import com.app.dto.StatusDto;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ChildHomeController {
    @Autowired
    private ChildHomeService childHomeService;

    @PostMapping("/childhome/addchild")
    public ResponseEntity<?> addChild(@RequestBody AddChildRequestDto childDto) {
        try {
            ApiResponse response = childHomeService.addChild(childDto);
            return new ResponseEntity<>(response, HttpStatus.OK); // 200 OK
        } catch (Exception e) {
            // Important: Log the exception for debugging
            e.printStackTrace(); // Or use a proper logging framework (e.g., SLF4j)

            // Return a more informative error response
            return new ResponseEntity<>(new ApiResponse(e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR); // 500
                                                                                                            // Internal
                                                                                                            // Server
                                                                                                            // Error
            // Or
            // return new ResponseEntity<>(new ApiResponse("Failed to add child: " +
            // e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/childhome/allEventsDetails")
    public ResponseEntity<?> getAllEventsDetails() {
        try {

            return ResponseEntity.status(HttpStatus.OK).body(childHomeService.getAllEventDetails());
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/childhome/addevents")
    public ResponseEntity<?> addEvent(@RequestBody AddEventsDto dto) {
        try {
            ApiResponse response = childHomeService.addEvent(dto);

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to add event: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/childhome/addemployee")
    public ResponseEntity<?> addSocialWorker(@RequestBody AddEmployeeRequestDto dto) {
        try {
            ApiResponse response = childHomeService.addSocialWorker(dto);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to add social worker: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/childhome/addrequest")
    public ResponseEntity<?> addRequest(@RequestBody AddRequestDto dto) {
        try {
            ApiResponse response = childHomeService.addRequest(dto);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to add social worker: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/childhome/getchildhomedetails/{id}")
    public ResponseEntity<?> getChildHomeDetails(@PathVariable Long id) {
        try {

            return ResponseEntity.status(HttpStatus.OK).body(childHomeService.getChildHomeDetails(id));
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/childhome/updatechildhome/{id}")
    public ResponseEntity<?> updateSocialWorker(@PathVariable Long id, @RequestBody UpdateChildHomeRequestDto dto) {
        System.out.println("updatechildhome request");
        try {
            ApiResponse response = childHomeService.updateChildHome(id, dto);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/childhome/updaterequest/{id}")
    public ResponseEntity<?> updateRequestStatus(@PathVariable Long id, @RequestBody String status) {
        try {
            ApiResponse response = childHomeService.updateRequestStatus(id, status);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/childhome/allChildhomedetails")
    public ResponseEntity<?> getAllChildHomeDetails() {
        try {

            return ResponseEntity.status(HttpStatus.OK).body(childHomeService.getAllChildHomeDetails());
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/childhome/childhomecount")
    public ResponseEntity<?> countChildHomeDetails() {
        try {

            return ResponseEntity.status(HttpStatus.OK).body(childHomeService.countChildHomeDetails());
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/childhome/employeecount")
    public ResponseEntity<?> countEmployee() {
        try {

            return ResponseEntity.status(HttpStatus.OK).body(childHomeService.countEmployee());
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/childhome/getchilds/{id}")
    public ResponseEntity<?> getAllChilds(@PathVariable Long id) {
        try {
            List<ChildDto> response = childHomeService.getAllChilds(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to get Childs: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/employee/getrequest/{id}")
    public ResponseEntity<?> up(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(childHomeService.getRequestDetails1(id));
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to update employee: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    @PutMapping("/childhome/updatestatus")
    public String updateRequestStatus(@RequestBody StatusDto std) {
        return childHomeService.updateRequestStatus(std);
    }
}
