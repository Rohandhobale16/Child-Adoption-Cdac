package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.EventsDto;
import com.app.dto.ApiResponse;
import com.app.service.EventService;

@RestController
@RequestMapping("/api/addevents")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping
    public ResponseEntity<?> addEvent(@RequestBody EventsDto eventsDto) {
        try {
            ApiResponse response = eventService.addEvent(eventsDto);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Use proper logging in production
            return new ResponseEntity<>(new ApiResponse("Failed to add event: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}