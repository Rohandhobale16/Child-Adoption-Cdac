package com.app.pojos;

import jakarta.persistence.Entity;
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
	private String status;
	private String feedBack;
	//need to create document 
//	@Lob
//    private byte[] data;
}
