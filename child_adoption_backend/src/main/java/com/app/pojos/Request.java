package com.app.pojos;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Request extends BaseEntity{

	@OneToOne
	@JoinColumn(name="p",nullable=true)
	private Parent p;
	@OneToOne
	@JoinColumn(name="c",nullable=true)
	private Child c;
    @OneToOne
    @JoinColumn(name = "ch", nullable = true)
    private ChildHome ch;
	private String status;
	private String feedBack;
    private LocalDate date;
    @Enumerated(EnumType.STRING)
    private Slot slot;
	//need to create document 
//	@Lob
//    private byte[] data;
}
