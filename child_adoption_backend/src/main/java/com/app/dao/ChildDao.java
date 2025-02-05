package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Child;

public interface ChildDao extends JpaRepository<Child, Long> {

}
