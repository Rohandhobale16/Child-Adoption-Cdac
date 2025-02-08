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
	private String marrigeStatus;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	private String nationality;
	private String dob;
	private String occupation;
	private Long income;//changed now from annualIncome
	@OneToOne
	@JoinColumn(name="pc",nullable=true)
	private ParentCouple pc;
//	@OneToOne(mappedBy="p",cascade=CascadeType.ALL)
//	private Parent child;
	@OneToOne
	@JoinColumn(name="u",nullable=false)
	private User u;
	private boolean status;
	private String aadhar;
}
