package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdoptionRequestDao;
import com.app.dao.ChildDao;
import com.app.dao.ParentDao;
import com.app.dto.AdoptionRequestDto;
import com.app.dto.ApiResponse;
import com.app.pojos.AdoptionRequest;
import com.app.pojos.AdoptionStatus; // Import AdoptionStatus enum
import com.app.pojos.Child;
import com.app.pojos.Parent;

@Service
@Transactional
public class AdoptionRequestService {

    @Autowired
    private AdoptionRequestDao adoptionRequestDao;

    @Autowired
    private ChildDao childDao;

    @Autowired
    private ParentDao parentDao;

    public ApiResponse createAdoptionRequest(AdoptionRequestDto dto) {

        Parent parent = parentDao.findById(dto.getParentId())
                .orElseThrow(() -> new RuntimeException("Parent not found"));

        Child child = childDao.findById(dto.getChildId())
                .orElseThrow(() -> new RuntimeException("Child not found"));

        AdoptionRequest request = new AdoptionRequest();
        request.setParent(parent);
        request.setChild(child);
        request.setStatus(AdoptionStatus.PENDING); // Set initial status

        adoptionRequestDao.save(request);

        return new ApiResponse("Adoption request created successfully with ID: " + request.getId());
    }

    
}