package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojos.AdoptionRequest;

public interface AdoptionRequestDao extends JpaRepository<AdoptionRequest, Long> {
}