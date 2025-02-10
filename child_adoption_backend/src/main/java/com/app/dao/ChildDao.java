package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.*;
import com.app.dto.ChildDto;
import com.app.pojos.Child;

public interface ChildDao extends JpaRepository<Child, Long> {
    @Query("SELECT new com.app.dto.ChildDto(c.id, c.name) FROM Child c WHERE c.ch.id = :childHomeId")
    List<ChildDto> findChildrenByChildHomeId(@Param("childHomeId") Long childHomeId);
}
