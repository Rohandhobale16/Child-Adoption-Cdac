package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Parent;
import com.app.pojos.User;
import java.util.List;
public interface ParentDao extends JpaRepository<Parent, Long>{
	List<Parent> findByU(User u);
}
