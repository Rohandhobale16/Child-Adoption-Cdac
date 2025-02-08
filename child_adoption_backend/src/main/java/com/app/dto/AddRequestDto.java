package com.app.dto;

import com.app.pojos.Gender;
import com.app.pojos.UserRole;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class AddRequestDto extends BaseEntityDto{
private Long pid;
private Long cid;
}
