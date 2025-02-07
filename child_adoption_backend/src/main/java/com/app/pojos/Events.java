package com.app.pojos;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Events extends BaseEntity {
	private String eventName;
	private String eventDate;
	private String eventDescription;
	@ManyToOne
	@JoinColumn(name="ch")
	private ChildHome ch;
	private boolean status;
}