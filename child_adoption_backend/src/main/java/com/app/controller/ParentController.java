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
	
//	@PostMapping("/parent/bookSlot")
//		public ResponseEntity<?> bookSlot(@RequestBody SlotBookingDto slotBookingDto){
//			return ResponseEntity.status(HttpStatus.CREATED)
//					.body(parentService.bookSlot(slotBookingDto));
//	    }
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
    
    
//    @PutMapping("/{id}")
//    public ResponseEntity<ParentDTO> updateParent(@PathVariable Long id, @RequestBody ParentDTO parentDTO) {
//        ParentDTO updatedParent = parentService.updateParentDetails(id, parentDTO);
//        return ResponseEntity.ok(updatedParent);
//    }
}
	
	

