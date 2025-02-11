package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressDao;
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
	private AddressDao addressDao;
	@Autowired
	private RequestDao requestDao;
	@Autowired
	private ModelMapper mapper;
	public ApiResponse updateSocialWorker(Long id,UpdateEmployeeRequestDto dto) {
		System.out.println(dto);
		 Employee e = employeeDao.findById(dto.getId()) // Use getChId()
	                .orElseThrow(() -> new RuntimeException("ChildHome not found"));
		 e.u.setEmail(dto.getEmail());
		 e.u.setFname(dto.getFname());
		 e.u.setLname(dto.getLname());
		 e.u.setMobile(dto.getMobile());
		 e.u.setPassword(dto.getPassword()); 
		 e.u.address.setCity(dto.getCity());
		 e.u.address.setDistrict(dto.getDistrict());
		 e.u.address.setHouseNo(dto.getHouseNo());
		 e.u.address.setPincode(dto.getPincode());
		 e.u.address.setState(dto.getState());
		 e.u.address.setStreet(dto.getStreet());
		 e.u.address.setStatus(true);
		return new ApiResponse("success");
	}
	public EmployeeResponseDto getSocialWorkerDetails(Long id) {
		Employee e = employeeDao.findById(id).orElseThrow(() -> new RuntimeException("employee not found"));
		EmployeeResponseDto er=mapper.map(e,EmployeeResponseDto.class);
		er.setMessage("success");
		return er;
		//add message to show success
	}
	public List<RequestDto> getRequestDetails() {
		List<Request> l=requestDao.findByStatus("booked");
		List<RequestDto> li=l.stream().map(r->mapper.map(r,RequestDto.class)).collect(Collectors.toList());
		return li;
	}
	public ApiResponse updateRequestStatus(Long id, String status) {
		System.out.println("..............................");
		System.out.println(status);
		Request r=requestDao.findById(id) .orElseThrow(() -> new RuntimeException("request not found"));
		r.setStatus(status);
		return new ApiResponse("success");
	}

}
