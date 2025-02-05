package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AdoptionCertificateDto;
import com.app.dto.ApiResponse;
import com.app.service.AdoptionCertificateService;

@RestController
@RequestMapping("/api/certificates")
public class AdoptionCertificateController {

    @Autowired
    private AdoptionCertificateService adoptionCertificateService;

    @PostMapping("/upload") // Use a more descriptive path
    public ResponseEntity<?> uploadCertificate(@ModelAttribute AdoptionCertificateDto adoptionCertificateDto) {
        try {
            ApiResponse response = adoptionCertificateService.uploadCertificate(adoptionCertificateDto);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Certificate upload failed: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

   
}