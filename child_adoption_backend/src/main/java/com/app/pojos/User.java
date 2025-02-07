package com.app.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Setter
@Getter
@NoArgsConstructor
@Entity
@ToString
public class User extends  BaseEntity{
private String fname;
private String lname;
private String mobile;
@Column(unique=true,nullable=false)
private String email;
private String password;
@Enumerated(EnumType.STRING)
private UserRole role;
@ManyToOne
@JoinColumn(name="address",nullable=false)
public Address address;
private boolean status;
}
