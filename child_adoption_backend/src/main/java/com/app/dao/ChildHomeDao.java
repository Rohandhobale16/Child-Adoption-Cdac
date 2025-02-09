package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ChildHome;
import com.app.pojos.Parent;
import com.app.pojos.User;

import java.util.List;
import java.util.Optional;

public interface ChildHomeDao extends JpaRepository<ChildHome, Long> {
	ChildHome findByU(User u);

	List<ChildHome> findByStatus(boolean status);

	Optional<ChildHome> findByHouseName(String childHomeName);
}
