package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojos.SocialWorker;

public interface SocialWorkerDao extends JpaRepository<SocialWorker, Long> {
}