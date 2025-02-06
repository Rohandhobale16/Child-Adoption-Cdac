package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class AddEventsDto extends BaseEntityDto {
	private String eventName;
	private String eventDate;
	private String eventDescription;
    private Long chId; 
    //events have to be childhome type
}