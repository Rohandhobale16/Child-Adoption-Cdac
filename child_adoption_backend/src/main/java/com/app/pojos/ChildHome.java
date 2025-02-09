package com.app.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "ChildHome")
public class ChildHome extends BaseEntity {
	@Column(unique = true)
	private String houseName;
	private int inHome;
	private int adoptable;
	private boolean status;
	private String bankAccount;
	private String ifscCode;
	@OneToOne
	@JoinColumn(name = "u", nullable = false)
	public User u;
}
