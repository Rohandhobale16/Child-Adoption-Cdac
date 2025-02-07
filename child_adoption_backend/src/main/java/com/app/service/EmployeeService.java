package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.EmployeeDao;
import com.app.dao.RequestDao;
import com.app.dto.AddEmployeeRequestDto;
import com.app.dto.ApiResponse;
import com.app.dto.EmployeeResponseDto;
import com.app.dto.RequestDto;
import com.app.dto.UpdateEmployeeRequestDto;
import com.app.pojos.Address;
import com.app.pojos.ChildHome;
import com.app.pojos.Employee;
import com.app.pojos.Request;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	@Autowired
	private EmployeeDao employeeDao;
	@Autowired
	private RequestDao requestDao;
	@Autowired
	private ModelMapper mapper;
	public ApiResponse updateSocialWorker(UpdateEmployeeRequestDto dto) {
		 Employee e = employeeDao.findById(dto.getId()) // Use getChId()
	                .orElseThrow(() -> new RuntimeException("ChildHome not found"));
		 e.u.setEmail(dto.getEmail());
		 e.u.setFname(dto.getFname());
		 e.u.setLname(dto.getLname());
		 e.u.setMobile(dto.getMobile());
		 e.u.setPassword(dto.getPassword());
		 Address a=new Address();
		 a.setCity(dto.getCity());
		 a.setDistrict(dto.getDistrict());
		 a.setHouseNo(dto.getHouseNo());
		 a.setPincode(dto.getPincode());
		 a.setState(dto.getState());
		 a.setStreet(dto.getStreet());
		 a.setStatus(true);
		 e.u.setAddress(a);
		return new ApiResponse("updated sucessfully" + e.getId());
	}
	public EmployeeResponseDto getSocialWorkerDetails(Long id) {
		Employee e = employeeDao.findById(id).orElseThrow(() -> new RuntimeException("ChildHome not found"));
		EmployeeResponseDto er=mapper.map(e,EmployeeResponseDto.class);
		return er;
		//add message to show success
	}
	public List<RequestDto> getRequestDetails() {
		List<Request> l=requestDao.findAll();
		List<RequestDto> li=l.stream().map(r->mapper.map(r,RequestDto.class)).collect(Collectors.toList());
		return li;
	}
	public ApiResponse updateRequestStatus(Long id, String status) {
		Request r=requestDao.findById(id) .orElseThrow(() -> new RuntimeException("ChildHome not found"));
		r.setStatus(status);
		return new ApiResponse("updated sucessfully" + r.getId());
	}

}
