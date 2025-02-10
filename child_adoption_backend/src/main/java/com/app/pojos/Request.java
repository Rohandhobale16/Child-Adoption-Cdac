package com.app.pojos;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Request extends BaseEntity {

	@OneToOne
	@JoinColumn(name = "p", nullable = true, unique = false)
	private Parent p;
	@OneToOne
	@JoinColumn(name = "c", nullable = true, unique = false)
	private Child c;
	@ManyToOne
	@JoinColumn(name = "ch", nullable = true, unique = false)
	private ChildHome ch;
	private String status;
	private String feedBack;
	private String date;
	@Enumerated(EnumType.STRING)
	private Slot slot;
	// need to create document
	// @Lob
	// private byte[] data;
}
