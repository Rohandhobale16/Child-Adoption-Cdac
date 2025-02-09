package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressDao;
import com.app.dao.ChildDao;
import com.app.dao.ChildHomeDao;
import com.app.dao.EmployeeDao;
import com.app.dao.EventsDao;
import com.app.dao.ParentDao;
import com.app.dao.RequestDao;
import com.app.dao.UserDao;
import com.app.dto.AddChildHomeRequestDto;
import com.app.dto.AddChildRequestDto;
import com.app.dto.AddEmployeeRequestDto;
import com.app.dto.AddEventsDto;
import com.app.dto.AddRequestDto;
import com.app.dto.ApiResponse;
import com.app.dto.ChildHomeResponseDto;
import com.app.dto.EmployeeResponseDto;
import com.app.dto.RequestDto;
import com.app.dto.UpdateChildHomeRequestDto;
import com.app.pojos.Address;
import com.app.pojos.Child;
import com.app.pojos.ChildHome;
import com.app.pojos.Employee;
import com.app.pojos.Events;
import com.app.pojos.Parent;
import com.app.pojos.Request;
import com.app.pojos.User;
import com.app.pojos.UserRole;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ChildHomeService {
	@Autowired
	private ChildDao childDao;
	@Autowired
	private EventsDao eventsDao;
	// Inject ChildHomeDao
	@Autowired
	private UserDao userDao;
	@Autowired
	private ParentDao parentDao;
	@Autowired
	private RequestDao requestDao;
	@Autowired
	private ChildHomeDao childHomeDao;
	@Autowired
	private EmployeeDao employeeDao;
	@Autowired
	private AddressDao addressDao;
	@Autowired
	private ModelMapper mapper;

	public ApiResponse addChild(AddChildRequestDto dto) {

		User user = userDao.findById(dto.getCh())
				.orElseThrow(() -> new RuntimeException("User not found"));

		ChildHome childHome = childHomeDao.findByU(user);

		Child obj = new Child();
		obj.setName(dto.getName());
		obj.setAge(dto.getAge());
		obj.setGender(dto.getGender());
		obj.setCh(childHome);
		obj.setStatus(true);

		childDao.save(obj);

		return new ApiResponse("success");
	}

	public ApiResponse addEvent(AddEventsDto dto) {
		Events obj = new Events();
		obj.setEventName(dto.getEventName());
		obj.setEventDate(dto.getEventDate());
		obj.setEventDescription(dto.getEventDescription());

		User user = userDao.findById(dto.getChId())
				.orElseThrow(() -> new RuntimeException("User not found"));

		ChildHome childHome = childHomeDao.findByU(user);
		obj.setCh(childHome);
		obj.setStatus(true);
		eventsDao.save(obj);

		return new ApiResponse("success");
	}

	public ApiResponse addSocialWorker(AddEmployeeRequestDto dto) {
		Address a = new Address();
		a.setCity(dto.getCity());
		a.setDistrict(dto.getDistrict());
		a.setHouseNo(dto.getHouseNo());
		a.setPincode(dto.getPincode());
		a.setState(dto.getState());
		a.setStreet(dto.getStreet());
		a.setStatus(true);
		addressDao.save(a);
		User user = new User();
		user.setAddress(a);
		user.setEmail(dto.getEmail());
		user.setFname(dto.getFname());
		user.setLname(dto.getLname());
		user.setMobile(dto.getMobile());
		user.setPassword(dto.getPassword());
		user.setRole(UserRole.ROLE_EMPLOYEE);
		user.setStatus(true);
		userDao.save(user);

		ChildHome childHome = childHomeDao.findById(dto.getChId())
				.orElseThrow(() -> new RuntimeException("ChildHome not found"));
		Employee obj = new Employee();
		obj.setC(childHome);
		obj.setU(user);

		employeeDao.save(obj);

		return new ApiResponse("success");
	}

	public ApiResponse addRequest(AddRequestDto dto) {
		Child child = childDao.findById(dto.getCid()).orElseThrow(() -> new RuntimeException("Child not found"));
		Parent parent = parentDao.findById(dto.getPid()).orElseThrow(() -> new RuntimeException("parent not found"));
		Request r = new Request();
		r.setP(parent);
		r.setC(child);
		r.setStatus("initiated");
		requestDao.save(r);
		return new ApiResponse("success");
	}

	public ChildHomeResponseDto getChildHomeDetails(Long id) {
		User user = userDao.findById(id)
				.orElseThrow(() -> new RuntimeException("User not found"));

		ChildHome l = childHomeDao.findByU(user);
		ChildHomeResponseDto li = mapper.map(l, ChildHomeResponseDto.class);
		return li;
	}

	public ApiResponse updateChildHome(UpdateChildHomeRequestDto dto) {
		ChildHome e = childHomeDao.findById(dto.getId()).orElseThrow(() -> new RuntimeException("ChildHome not found"));
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
		e.setAdoptable(dto.getAdoptable());
		e.setBankAccount(dto.getBankAccount());
		e.setIfscCode(dto.getIfscCode());
		e.setInHome(dto.getInHome());
		return new ApiResponse("success");
	}

	public ApiResponse updateRequestStatus(Long id, String status) {
		Request r = requestDao.findById(id).orElseThrow(() -> new RuntimeException("request not found"));
		r.setStatus(status);
		return new ApiResponse("success");
	}

	public List<ChildHomeResponseDto> getAllChildHomeDetails() {
		List<ChildHome> l = childHomeDao.findAll();
		List<ChildHomeResponseDto> li = l.stream().map(e -> mapper.map(e, ChildHomeResponseDto.class))
				.collect(Collectors.toList());

		return li;
	}
}
