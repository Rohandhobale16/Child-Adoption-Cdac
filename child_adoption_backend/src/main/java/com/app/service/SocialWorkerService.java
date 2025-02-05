package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.SocialWorkerDto;
import com.app.dao.SocialWorkerDao;
import com.app.dao.ChildHomeDao;
import com.app.dto.ApiResponse;
import com.app.pojos.SocialWorker;
import com.app.pojos.ChildHome;

@Service
@Transactional
public class SocialWorkerService {

    @Autowired
    private SocialWorkerDao socialWorkerDao;

    @Autowired
    private ChildHomeDao childHomeDao;

    public ApiResponse addSocialWorker(SocialWorkerDto dto) {
        SocialWorker socialWorker = new SocialWorker();
        socialWorker.setFname(dto.getFname());
        socialWorker.setLname(dto.getLname());
        socialWorker.setEmail(dto.getEmail());
        socialWorker.setPassword(dto.getPassword());
        socialWorker.setPhone(dto.getPhone());
        socialWorker.setAddress(dto.getAddress());

        ChildHome childHome = childHomeDao.findById(dto.getChId())
                .orElseThrow(() -> new RuntimeException("ChildHome not found"));
        socialWorker.setCh(childHome);

        socialWorkerDao.save(socialWorker);

        return new ApiResponse("added social worker with ID " + socialWorker.getId());
    }

    // ... other service methods (e.g., getSocialWorker, updateSocialWorker, etc.)
}