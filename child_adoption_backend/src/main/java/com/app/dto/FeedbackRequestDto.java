package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeedbackRequestDto {
    private String feedback;  // Only contains the feedback text
}