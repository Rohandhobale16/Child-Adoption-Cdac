package com.app.dto;

import com.app.pojos.ChildHome;
import com.app.pojos.User;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EventResponseDto extends BaseEntityDto{
	private String eventName;
	private String eventDate;
	private String eventDescription;
	private ChildHomeResponseDto ch;
	private boolean status;
}
