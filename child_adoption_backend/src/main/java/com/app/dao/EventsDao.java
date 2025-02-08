package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Events;

public interface EventsDao extends JpaRepository<Events, Long>{

	List<Events> findByStatus(boolean b);

}
