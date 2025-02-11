package com.app.dao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Address;
import com.app.pojos.ChildHome;
import com.app.pojos.Parent;
import com.app.pojos.Request;
import com.app.pojos.User;

public interface RequestDao extends JpaRepository<Request, Long> {

	List<Request> findByStatus(String status);

	boolean existsByP_IdAndCh_IdAndDate(Long id, Long childHomeId, String string);

	int countByCh_IdAndDate(Long childHomeId, String string);

	@Query("SELECT r.ch.id, r.status FROM Request r WHERE r.p.id = :parentId")
	List<Object[]> findChildHomeAndStatusByParentId(@Param("parentId") Long parentId);

	List<Request> findByP(Parent p);



	List<Request> findByStatusAndCh(String string, ChildHome a);

	Optional<Request> findByPIdAndChId(Long id, Long childHomeId);


}
