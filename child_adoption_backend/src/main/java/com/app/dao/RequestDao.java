package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Address;
import com.app.pojos.Request;

public interface RequestDao extends JpaRepository<Request, Long> {

}
