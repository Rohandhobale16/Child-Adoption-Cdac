//package com.app;
//
//import com.app.pojos.ChildHome;
//import com.app.pojos.Gender;
//import com.app.pojos.User;
//
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@NoArgsConstructor
//public class ChildDto {
//	private Long id;
//	private String name;
//	private int age;
//	private Gender gender;
//	private ChildHome ch;
//}


// ChildDto.java
package com.app.dto;

import com.app.pojos.Gender;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChildDto {
    private Long id;
    private String name;
    private int age;
    private Gender gender;
    private Long chId; // Use Long for ID,  important, change type to Long
}
