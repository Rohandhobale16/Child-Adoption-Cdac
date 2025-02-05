package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojos.AdoptionCertificate;

public interface AdoptionCertificateDao extends JpaRepository<AdoptionCertificate, Long> {
}