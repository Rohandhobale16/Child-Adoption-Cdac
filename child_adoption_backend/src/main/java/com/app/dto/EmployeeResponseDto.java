package com.app.dto;

import com.app.pojos.ChildHome;
import com.app.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
public class EmployeeResponseDto extends BaseEntityDto{
private User u;
private ChildHome c;
private String message;
}
