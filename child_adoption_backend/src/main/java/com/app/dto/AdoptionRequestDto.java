package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AdoptionRequestDto {

    private Long parentId;
    private Long childId;
    // You might not need to send the status from the frontend when creating a request
    // as it will likely default to "Pending".
}