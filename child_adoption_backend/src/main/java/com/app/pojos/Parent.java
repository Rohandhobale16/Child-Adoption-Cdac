package com.app.pojos;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Parent extends BaseEntity {
	private boolean marrigeStatus;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	private String nationality;
	private String dob;
	private String occupation;
	private Long annualIncome;
//	@OneToOne
//	@JoinColumn(name="p",nullable=true)
//	private Parent p;
//	@OneToOne(mappedBy="p",cascade=CascadeType.ALL)
//	private Parent child;
	@OneToOne
	@JoinColumn(name="u",nullable=false)
	private User u;
	private boolean status;
}
