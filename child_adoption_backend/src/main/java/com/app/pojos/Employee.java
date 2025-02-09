package com.app.pojos;
import jakarta.persistence.Entity;
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
public class Employee extends BaseEntity{
	@OneToOne
	@JoinColumn(name="user_id",nullable=false)
	public User u;
	@ManyToOne
	@JoinColumn(name="child_home_id",nullable=false)
private ChildHome c;
}
