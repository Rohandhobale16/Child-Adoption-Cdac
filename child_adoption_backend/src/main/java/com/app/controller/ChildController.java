
package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.ChildDto;
import com.app.service.ChildService;

@RestController
@RequestMapping("/api/children") // Or a more appropriate path
public class ChildController {

    @Autowired
    private ChildService childService;

    @PostMapping
    public ResponseEntity<?> addChild(@RequestBody ChildDto childDto) {
        try {
            ApiResponse response = childService.addChild(childDto);
            return new ResponseEntity<>(response, HttpStatus.OK); // 200 OK
        } catch (Exception e) {
            // Important: Log the exception for debugging
            e.printStackTrace(); // Or use a proper logging framework (e.g., SLF4j)

            // Return a more informative error response
            return new ResponseEntity<>(new ApiResponse(e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR); // 500 Internal Server Error
            //Or
            // return new ResponseEntity<>(new ApiResponse("Failed to add child: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
