package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChildDto {
    private Long id;
    private String name;

    public ChildDto(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
