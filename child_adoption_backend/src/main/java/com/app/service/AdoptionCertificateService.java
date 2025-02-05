package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.AdoptionCertificateDao;
import com.app.dao.ChildDao; // Import ChildDao
import com.app.dao.ParentDao; // Import ParentDao
import com.app.dto.AdoptionCertificateDto;
import com.app.dto.ApiResponse;
import com.app.pojos.AdoptionCertificate;
import com.app.pojos.Child;
import com.app.pojos.Parent;

import java.io.IOException;

@Service
@Transactional
public class AdoptionCertificateService {

    @Autowired
    private AdoptionCertificateDao adoptionCertificateDao;

    @Autowired
    private ChildDao childDao; // Inject ChildDao

    @Autowired
    private ParentDao parentDao; // Inject ParentDao


    public ApiResponse uploadCertificate(AdoptionCertificateDto dto) throws IOException {

        Child child = childDao.findById(dto.getChildId())
                .orElseThrow(() -> new RuntimeException("Child not found"));

        Parent parent = parentDao.findById(dto.getParentId())
                .orElseThrow(() -> new RuntimeException("Parent not found"));

        AdoptionCertificate certificate = new AdoptionCertificate();
        certificate.setChild(child);  // Set the Child entity
        certificate.setParent(parent);  // Set the Parent entity

        MultipartFile file = dto.getCertificateFile();
        certificate.setFileName(file.getOriginalFilename());
        certificate.setCertificateFile(file.getBytes());

        adoptionCertificateDao.save(certificate);

        return new ApiResponse("Certificate uploaded successfully with ID: " + certificate.getId());
    }

    // ... other service methods if needed
}