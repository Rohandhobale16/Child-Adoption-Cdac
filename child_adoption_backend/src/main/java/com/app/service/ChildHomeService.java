package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressDao;
import com.app.dao.ChildDao;
import com.app.dao.ChildHomeDao;
import com.app.dao.EmployeeDao;
import com.app.dao.EventsDao;
import com.app.dao.ParentDao;
import com.app.dao.UserDao;
import com.app.dto.AddChildHomeRequestDto;
import com.app.dto.AddChildRequestDto;
import com.app.dto.AddEmployeeRequestDto;
import com.app.dto.AddEventsDto;
import com.app.dto.ApiResponse;
import com.app.pojos.Address;
import com.app.pojos.Child;
import com.app.pojos.ChildHome;
import com.app.pojos.Employee;
import com.app.pojos.Events;
import com.app.pojos.Parent;
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
	private ChildHomeDao childHomeDao;
	@Autowired
	private EmployeeDao employeeDao;
	@Autowired
	private AddressDao addressDao;
	@Autowired
	private ModelMapper mapper;
    public ApiResponse addChild(AddChildRequestDto dto) {
        Child obj = new Child();
        obj.setName(dto.getName());
        obj.setAge(dto.getAge());
        obj.setGender(dto.getGender());

        // *** KEY CHANGE: Fetch ChildHome entity by ID ***
        ChildHome childHome = childHomeDao.findById(dto.getCh()) // Use getChId()
                .orElseThrow(() -> new RuntimeException("ChildHome not found")); // Handle not found

        obj.setCh(childHome); // Set the ChildHome entity
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

        return new ApiResponse("success"); 
	}

	public ApiResponse addSocialWorker(AddEmployeeRequestDto dto) {
		Address a=new Address();
		a.setCity(dto.getCity());
		a.setDistrict(dto.getDistrict());
		a.setHouseNo(dto.getHouseNo());
		a.setPincode(dto.getPincode());
		a.setState(dto.getState());
		a.setStreet(dto.getStreet());
		a.setStatus(true);
		addressDao.save(a);
		User user=new User();
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
        Employee obj= new Employee();
        obj.setC(childHome);
        obj.setU(user);

        employeeDao.save(obj);

        return new ApiResponse("success");
	}

}
