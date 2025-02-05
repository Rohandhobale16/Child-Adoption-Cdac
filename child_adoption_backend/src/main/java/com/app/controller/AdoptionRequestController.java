package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.AdoptionRequestDto;
import com.app.dto.ApiResponse;
import com.app.service.AdoptionRequestService;

@RestController
@RequestMapping("/api/adoption-requests")
public class AdoptionRequestController {

    @Autowired
    private AdoptionRequestService adoptionRequestService;

    @PostMapping
    public ResponseEntity<?> createAdoptionRequest(@RequestBody AdoptionRequestDto adoptionRequestDto) {
        try {
            ApiResponse response = adoptionRequestService.createAdoptionRequest(adoptionRequestDto);
            return new ResponseEntity<>(response, HttpStatus.CREATED); // 201 Created
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to create adoption request: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
}