package com.app.pojos;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Child extends BaseEntity{
	private String name;
	private int age;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@ManyToOne
	@JoinColumn(name="ch")
	private ChildHome ch;
	
}
