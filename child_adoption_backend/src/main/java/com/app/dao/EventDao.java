package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojos.Events; // Correct import

public interface EventDao extends JpaRepository<Events, Long> { // Use Events, not Event
}
