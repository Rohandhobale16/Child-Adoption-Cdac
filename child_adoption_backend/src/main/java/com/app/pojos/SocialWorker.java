package com.app.pojos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class SocialWorker {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
private Long id;
	private String fname;
	private String lname;
	private String email;
	private String password;
	private Long phone;
	private String address;
	@OneToOne
	@JoinColumn(name="ch_id")
	private ChildHome ch;

}
