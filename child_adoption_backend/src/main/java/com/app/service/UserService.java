package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressDao;
import com.app.dao.ChildHomeDao;
import com.app.dao.EmployeeDao;
import com.app.dao.ParentDao;
import com.app.dao.UserDao;
import com.app.mapper.UserMapper;
import com.app.dto.*;
import com.app.pojos.*;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
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
	public Object  findByEmailandPassword(LoginRequestDto loginDto) {
		User user=userDao.findByEmailAndPassword(loginDto.getEmail(),loginDto.getPassword());
		if(user.getRole().name().equals(UserRole.ADMIN.name())) {
			UserResponseDto obj1= mapper.map(user, UserResponseDto.class);
			return obj1;
		}
		else if(user.getRole().name().equals(UserRole.PARENT.name())) {
			List<Parent> obj=parentDao.findByU(user);
			Parent a=obj.get(0);
			ParentResponseDto obj1= mapper.map(a, ParentResponseDto.class);
			// ParentResponseDto obj1= UserMapper.INSTANCE.aToParentResponseDto(a);
			 System.out.print(a.getU());
			 return obj1;
		}
		else if(user.getRole().name().equals(UserRole.CHILDHOME.name())) {
			ChildHome obj=childHomeDao.findByU(user);
			 ChildHomeResponseDto obj1= mapper.map(obj, ChildHomeResponseDto.class);
			 return obj1;
		}
		else {
			Employee obj=employeeDao.findByU(user);
			 EmployeeResponseDto obj1= mapper.map(obj, EmployeeResponseDto.class);
			 return obj1;
		}
		
		
	}
	public ApiResponse addChildHome(AddChildHomeRequestDto dto) {
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
		user.setRole(dto.getRole());
		user.setStatus(true);
		userDao.save(user);
		 ChildHome obj= mapper.map(dto,ChildHome.class);
		 obj.setStatus(true);
		 obj.setU(user);
		 System.out.println(obj);
		 childHomeDao.save(obj);
		 return new ApiResponse("added order with ID " + obj.getId());
	}
	public ApiResponse addParentDto(AddParentRequestDto dto) {
		System.out.println(dto);
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
		user.setRole(dto.getRole());
		user.setStatus(true);
		userDao.save(user);
		Parent obj= mapper.map(dto,Parent.class);
		 obj.setStatus(true);
		 obj.setU(user);
		 System.out.println(obj);
		 parentDao.save(obj);
		 return new ApiResponse("added order with ID " + obj.getId());
	}
}
