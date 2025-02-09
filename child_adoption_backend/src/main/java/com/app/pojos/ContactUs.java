package com.app.pojos;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@Entity
@ToString
public class ContactUs extends BaseEntity {
    private String email;
    private String name;
    private String message;
}
