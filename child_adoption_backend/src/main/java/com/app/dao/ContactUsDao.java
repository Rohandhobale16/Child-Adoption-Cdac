package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Child;
import com.app.pojos.ContactUs;

public interface ContactUsDao extends JpaRepository<ContactUs, Long>{

}
