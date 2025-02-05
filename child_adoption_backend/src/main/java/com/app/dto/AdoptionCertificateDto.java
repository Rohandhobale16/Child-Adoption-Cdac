package com.app.dto;

import org.springframework.web.multipart.MultipartFile; // For file uploads

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AdoptionCertificateDto {

	 private Long childId; // Send the ID of the child
	    private Long parentId; // Send the ID of the parent
	    private MultipartFile certificateFile; // Use MultipartFile
}