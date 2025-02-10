package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Parent;
import com.app.pojos.User;
import java.util.List;
import java.util.Optional;

public interface ParentDao extends JpaRepository<Parent, Long> {
	Parent findByU(User u);

	@Query("SELECT p FROM Parent p WHERE p.u.id = :userId")
	Optional<Parent> findByUserId(@Param("userId") Long userId);

	List<Parent> findByStatus(boolean b);
}
