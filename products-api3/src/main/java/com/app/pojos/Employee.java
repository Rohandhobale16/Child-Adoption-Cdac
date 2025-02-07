package com.app.pojos;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@Entity
public class Employee extends BaseEntity{
	@OneToOne
	@JoinColumn(name="u",nullable=false)
private User u;
	@OneToOne
	@JoinColumn(name="c",nullable=false)
private ChildHome c;
}
