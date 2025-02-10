package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ChildHomeDao;
import com.app.dao.ParentDao;
import com.app.dao.RequestDao;
import com.app.dto.ApiResponse;
import com.app.dto.ChildHomeResponseDto;
import com.app.dto.ParentResponseDto;
import com.app.dto.RequestDto;
import com.app.pojos.ChildHome;
import com.app.pojos.Parent;
import com.app.pojos.Request;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminService {
	@Autowired
	private ChildHomeDao childHomeDao;
	@Autowired
	private ParentDao parentDao;
	@Autowired
	private RequestDao requestDao;
	@Autowired
	private ModelMapper modelMapper;
	public  ApiResponse deleteChildHome(Long id) {
		System.out.println(id);
		ChildHome ch=childHomeDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!!!"));
		ch.setStatus(false);
		return new ApiResponse("success");
	}

	public ApiResponse deleteParent(Long id) {
		Parent p=parentDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!!!!"));
		p.setStatus(false);
		return new ApiResponse("success");
	}

	public List<RequestDto> getRequestData() {
		List<Request> l=requestDao.findAll();
		List<RequestDto> li=l.stream()
				.map(r->modelMapper.map(r,RequestDto.class))
				.collect(Collectors.toList());
		return li;
	}

	public RequestDto getFeedback(Long id) {
		Request r=requestDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!!!!"));
		RequestDto obj1= modelMapper.map(r, RequestDto.class);
		obj1.setMessage("success");
		return obj1;
	}

	public List<ChildHomeResponseDto> getChildHome() {
		List<ChildHome> l=childHomeDao.findByStatus(true);
		List<ChildHomeResponseDto> li=l.stream()
				.map(r->modelMapper.map(r,ChildHomeResponseDto.class))
				.collect(Collectors.toList());
		return li;
	}

	public List<ParentResponseDto> getParent() {
		
		List<Parent> l=parentDao.findByStatus(true);
		List<ParentResponseDto> li=l.stream()
				.map(r->modelMapper.map(r,ParentResponseDto.class))
				.collect(Collectors.toList());
		return li;
	}
	
}
