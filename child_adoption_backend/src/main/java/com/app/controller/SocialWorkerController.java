package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.SocialWorkerDto;
import com.app.dto.ApiResponse;
import com.app.service.SocialWorkerService;

@RestController
@RequestMapping("/api/addsocialworkers")
public class SocialWorkerController {

    @Autowired
    private SocialWorkerService socialWorkerService;

    @PostMapping
    public ResponseEntity<?> addSocialWorker(@RequestBody SocialWorkerDto socialWorkerDto) {
        try {
            ApiResponse response = socialWorkerService.addSocialWorker(socialWorkerDto);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to add social worker: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ... other controller methods (e.g., get, update, delete)
}