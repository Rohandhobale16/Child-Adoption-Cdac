package com.app.service;

import java.util.List;
import java.util.stream.Collectors;
import com.app.dto.ChildDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import com.app.dto.EventResponseDto;
import com.app.dto.ParentResponseDto;
import com.app.dto.RequestDto;
import com.app.dto.StatusDto;
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
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private AdminService adminservice;
	
	
	@Autowired
	private UserDao userRepo;

	@Autowired
	private ParentDao parentRepo;

	@Autowired
	private RequestDao requestRepo;

	public ApiResponse addChild(AddChildRequestDto dto) {
		// Fetch the User by ID
//		User user = userDao.findById(dto.getCh())
//				.orElseThrow(() -> new RuntimeException("User not found"));

		// Fetch ChildHome associated with the User
		ChildHome childHome = childHomeDao.findById(dto.getCh()).orElseThrow();

		// Create a new Child entity
		Child obj = new Child();
		obj.setName(dto.getName());
		obj.setAge(dto.getAge());
		obj.setGender(dto.getGender());
		obj.setCh(childHome); // Assign the found ChildHome
		obj.setStatus(true);

		childDao.save(obj);

		return new ApiResponse("success");
	}

	public ApiResponse addEvent(AddEventsDto dto) {
		Events obj = new Events();
		obj.setEventName(dto.getEventName());
		obj.setEventDate(dto.getEventDate());
		obj.setEventDescription(dto.getEventDescription());

		ChildHome childHome = childHomeDao.findById(dto.getChId())
				.orElseThrow(() -> new RuntimeException("ChildHome not found"));
		obj.setCh(childHome);
		obj.setStatus(true);
		eventsDao.save(obj);
		
		List<ParentResponseDto> Parents=adminservice.getParent();
		List<String> parentEmails = Parents.stream()
			    .map(parent -> parent.getU().getEmail()) 
			    .collect(Collectors.toList());
         
		
		for (String email : parentEmails) {
		    String subject = "New Event Notification";
		    String message = "Dear Parent,\n\n" +
		                     "There is a new event at " + childHome.getHouseName() + ".\n\n" +
		                     "Event Name: " + dto.getEventName() + ".\n\n" +
		                     "Event Date: " + dto.getEventDate() + ".\n\n" +
		                     "Event Description: " + dto.getEventDescription() + ".\n\n" +
		                     "Regards,\nChild Adoption System Team";
		    emailService.sendEmail(email, subject, message);
		}
		
	

		return new ApiResponse("success");
	}

	public List<EventResponseDto> getAllEventDetails() {
		List<Events> l = eventsDao.findAll();
		List<EventResponseDto> li = l.stream().map(e -> mapper.map(e, EventResponseDto.class))
				.collect(Collectors.toList());
		return li;
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
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
		user.setRole(UserRole.ROLE_EMPLOYEE);
		user.setStatus(true);
		userDao.save(user);

		ChildHome childHome = childHomeDao.findById(dto.getChId())
				.orElseThrow(() -> new RuntimeException("ChildHome not found"));
		Employee obj = new Employee();
		obj.setC(childHome);
		obj.setU(user);

		String subject = "Child Home Registration Successful";
		String message = "Dear " + dto.getFname() + ",\n\n" +
				"Successfully registered as a Social Worker.\n\n" +
				"Thank you for joining our platform.\n\n" +
				"Regards,\nChild Adoption System Team";
		emailService.sendEmail(dto.getEmail(), subject, message);

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
		ChildHome l = childHomeDao.findById(id).orElseThrow();
		ChildHomeResponseDto li = mapper.map(l, ChildHomeResponseDto.class);
		return li;
	}

	public ApiResponse updateChildHome(Long id, UpdateChildHomeRequestDto dto) {
		ChildHome e = childHomeDao.findById(id).orElseThrow(() -> new RuntimeException("ChildHome not found"));
		e.u.setEmail(dto.getEmail());
		e.u.setFname(dto.getFname());
		e.u.setLname(dto.getLname());
		e.u.setMobile(dto.getMobile());
		e.u.setPassword(passwordEncoder.encode(dto.getPassword()));
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

		String subject = "Child Home Registration Successful";
		String message = "Dear " + dto.getFname() + ",\n\n" +
				"Successfully Updated Your Data..\n\n" +
				"Thank you for joining our platform.\n\n" +
				"Regards,\nChild Adoption System Team";
		emailService.sendEmail(dto.getEmail(), subject, message);
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

	public Long countChildHomeDetails() {
		Long s = childHomeDao.count();

		return s;
	}

	public Long countEmployee() {
		Long s = employeeDao.count();
		return s;
	}

	public List<ChildDto> getAllChilds(Long childHomeId) {
		// TODO Auto-generated method stub
		return childDao.findChildrenByChildHomeId(childHomeId);
	}

	public List<RequestDto> getRequestDetails1(Long id) {
		ChildHome a = childHomeDao.findById(id).orElseThrow();
		List<Request> l = requestDao.findByStatusAndCh("booked", a);
		List<RequestDto> li = l.stream().map(r -> mapper.map(r, RequestDto.class)).collect(Collectors.toList());
		return li;
	}
	
	public String updateRequestStatus(StatusDto std) {
		// Extract values from DTO
		String email = std.getEmail();
		Long childHomeId = std.getChildHomeId();
		Long childId = std.getChildId();

		// Find User by Email
		User user = userRepo.findByEmail(email).orElse(null);
		if (user == null) {
			return "User not found";
		}

		// Find Parent by User
		Parent parent = parentRepo.findByU(user);
		if (parent == null) {
			return "Parent not found";
		}

		// Find Request by Parent ID and ChildHome ID
		Request request = requestRepo.findByPIdAndChId(parent.getId(), childHomeId).orElse(null);
		if (request == null) {
			return "Request not found";
		}

		// Find Child by Child ID
		Child child = childDao.findById(childId).orElse(null);
		if (child == null) {
			return "Child not found";
		}

		// Update Request entity with Child and Status
		request.setC(child);
		request.setStatus("success");
		requestRepo.save(request);

		return "Request status updated successfully";
	}
	
}


