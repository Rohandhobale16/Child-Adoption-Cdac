
package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ChildDao;
import com.app.dao.ChildHomeDao; // Import ChildHomeDao
import com.app.dto.ApiResponse;
import com.app.dto.ChildDto;
import com.app.pojos.Child;
import com.app.pojos.ChildHome;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ChildService {
    @Autowired
    private ChildDao childDao;

    @Autowired
    private ChildHomeDao childHomeDao; // Inject ChildHomeDao

    public ApiResponse addChild(ChildDto dto) {
        Child obj = new Child();
        obj.setName(dto.getName());
        obj.setAge(dto.getAge());
        obj.setGender(dto.getGender());

        // *** KEY CHANGE: Fetch ChildHome entity by ID ***
        ChildHome childHome = childHomeDao.findById(dto.getChId()) // Use getChId()
                .orElseThrow(() -> new RuntimeException("ChildHome not found")); // Handle not found

        obj.setCh(childHome); // Set the ChildHome entity

        childDao.save(obj);

        return new ApiResponse("added child with ID " + obj.getId());
    }
}
