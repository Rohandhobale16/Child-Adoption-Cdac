package com.app.dto;

import com.app.pojos.Gender;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EventsDto {
	private Long id;
	private String eventName;
	private String eventDate;
	private String eventDescription;
    private Long chId; 
}
