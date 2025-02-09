package com.app.dto;

import com.app.pojos.User;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
public class ChildHomeResponseDto extends BaseEntityDto {
private String houseName;
private int inHome;
private int adoptable;
private boolean status;
private String bankAccount;
private String ifscCode;
private User u;
}
