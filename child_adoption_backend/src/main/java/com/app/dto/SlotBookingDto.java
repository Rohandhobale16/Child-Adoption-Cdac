package com.app.dto;

import com.app.pojos.Slot;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
public class SlotBookingDto {
    private Long parentId;
    private String childHomeName;
    private String date;
    private Slot slot;
    private String status;
}
