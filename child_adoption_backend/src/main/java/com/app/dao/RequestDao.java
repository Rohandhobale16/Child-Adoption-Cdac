package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Address;
import com.app.pojos.Request;

public interface RequestDao extends JpaRepository<Request, Long> {

	List<Request> findByStatus(String status);

}
