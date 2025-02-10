package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.ParentService;
import com.app.dto.*;
import java.util.*;

@RestController
@RequestMapping("/api/parent")
@CrossOrigin(origins = "http://localhost:3000")
public class ParentController {

	@Autowired
	private ParentService parentService;

	@PostMapping("/parent/bookSlot/{id}")
	public ResponseEntity<?> bookSlot(@PathVariable Long id, @RequestBody SlotBookingDto slotBookingDto) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(parentService.bookSlot(id, slotBookingDto));
	}

	@GetMapping("/childhomes")
	public ResponseEntity<List<ChildHomeDTO>> getAllChildHomes() {
		List<ChildHomeDTO> childHomes = parentService.getAllChildHomes();
		if (childHomes.isEmpty()) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(childHomes);
	}

	@GetMapping("/profile/{id}")
	public ResponseEntity<ParentDTO> getParentProfile(@PathVariable Long id) {
		return ResponseEntity.ok(parentService.getParentProfile(id));
	}
	@PutMapping("/profile/{id}")
	public ResponseEntity<Map<String, Object>> updateParent(@PathVariable Long id, @RequestBody ParentDTO parentDTO) {
	    ParentDTO updatedParent = parentService.updateParentDetails(id, parentDTO);

	    Map<String, Object> response = new HashMap<>();
	    response.put("message", "success");
	    response.put("data", updatedParent); // Include updated data if needed

	    return ResponseEntity.ok(response);
	}
	
	 @GetMapping("/statusrequest/{parentId}")
	    public ResponseEntity<?> getChildHomeAndStatus(@PathVariable Long parentId) {
	         
	         return ResponseEntity.status(HttpStatus.CREATED).body(parentService.getChildHomeAndStatusByParentId(parentId));
	 }
	 
	 @PostMapping("/feedback/{id}")
	    public ResponseEntity<String> setFeedback(@PathVariable Long id, @RequestBody FeedbackRequestDto feedbackRequest) {
	        String response = parentService.setFeedback(id, feedbackRequest.getFeedback());
	        return ResponseEntity.ok(response);
	    }

}
