package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Employee;
import com.app.pojos.ParentCouple;

public interface ParentCoupleDao extends JpaRepository<ParentCouple, Long> {

}
