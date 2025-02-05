package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional; // Import Transactional

import com.app.dto.EventsDto;
import com.app.dao.EventDao;
import com.app.dao.ChildHomeDao;
import com.app.dto.ApiResponse;
import com.app.pojos.Events;
import com.app.pojos.ChildHome;

@Service
@Transactional // Add Transactional annotation
public class EventService {

    @Autowired
    private EventDao eventDao;

    @Autowired
    private ChildHomeDao childHomeDao;

    public ApiResponse addEvent(EventsDto dto) {
        Events obj = new Events();
        obj.setEventName(dto.getEventName());
        obj.setEventDate(dto.getEventDate());
        obj.setEventDescription(dto.getEventDescription());

        ChildHome childHome = childHomeDao.findById(dto.getChId())
                .orElseThrow(() -> new RuntimeException("ChildHome not found"));
        obj.setCh(childHome);

        eventDao.save(obj);

        return new ApiResponse("added event with ID " + obj.getId()); // Corrected message
    }
}