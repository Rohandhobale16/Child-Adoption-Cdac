package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SocialWorkerDto {
    private Long id;
    private String fname;
    private String lname;
    private String email;
    private String password;
    private Long phone;
    private String address;
    private Long chId; // ID of the ChildHome
}
