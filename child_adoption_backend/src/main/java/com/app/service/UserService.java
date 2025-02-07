package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.AddressDao;
import com.app.dao.ChildHomeDao;
import com.app.dao.EmployeeDao;
import com.app.dao.ParentCoupleDao;
import com.app.dao.ParentDao;
import com.app.dao.UserDao;
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
	@Autowired
	private ParentCoupleDao parentCoupleDao;
	@Autowired
	private PasswordEncoder passwordEncoder;
	public Object  findByEmailandPassword(LoginRequestDto loginDto) {
		User user=userDao.findByEmailAndPassword(loginDto.getEmail(),loginDto.getPassword());
		if(user.getRole().name().equals(UserRole.ROLE_ADMIN.name())) {
			UserResponseDto obj1= mapper.map(user, UserResponseDto.class);
			return obj1;
		}
		else if(user.getRole().name().equals(UserRole.ROLE_PARENT.name())) {
			List<Parent> obj=parentDao.findByU(user);
			Parent a=obj.get(0);
			ParentResponseDto obj1= mapper.map(a, ParentResponseDto.class);
			// ParentResponseDto obj1= UserMapper.INSTANCE.aToParentResponseDto(a);
			 System.out.print(a.getU());
			 return obj1;
		}
		else if(user.getRole().name().equals(UserRole.ROLE_CHILDHOME.name())) {
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
	public LoginResponseDto findByEmailandPassword1(LoginRequestDto loginDto) {
		User user=userDao.findByEmail(loginDto.getEmail()).orElseThrow();
		LoginResponseDto l=new LoginResponseDto();
		l.setId(user.getId());
		l.setRole(user.getRole().name());
		return l;
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
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
		user.setRole(UserRole.ROLE_CHILDHOME);
		user.setStatus(true);
		userDao.save(user);
		ChildHome obj= mapper.map(dto,ChildHome.class);
		 obj.setStatus(true);
		 obj.setU(user);
		 System.out.println(obj);
		 childHomeDao.save(obj);
		 return new ApiResponse("success");
	}
	public ApiResponse addParentDto(AddParentRequestDto dto) {
		//email validation need to be checked same email exists or not
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
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
		user.setRole(UserRole.ROLE_PARENT);
		user.setStatus(true);
		userDao.save(user);
		ParentCouple ps=new ParentCouple();
		if(dto.getPartneraadhar()!= null) {
		ps.setPartneraadhar(dto.getPartneraadhar());
		ps.setPartnerdob(dto.getPartnerdob());
		ps.setPartneremail(dto.getPartneremail());
		ps.setPartnerfname(dto.getPartnerfname());
		ps.setPartnergender(dto.getPartnergender());
		ps.setPartnerincome(dto.getPartnerincome());
		ps.setPartnerlname(dto.getPartnerlname());
		ps.setPartnermobile(dto.getPartnermobile());
		ps.setPartnernationality(dto.getPartnernationality());
		ps.setPartneroccupation(dto.getPartneroccupation());
		ps.setStatus(true);
		parentCoupleDao.save(ps);
		Parent obj= mapper.map(dto,Parent.class);
		 obj.setStatus(true);
		 obj.setU(user);
		 obj.setPc(ps);
		 System.out.println(obj);
		 parentDao.save(obj);
		 return new ApiResponse("success");
		}
		Parent obj= mapper.map(dto,Parent.class);
		 obj.setStatus(true);
		 obj.setU(user);
		 obj.setPc(null);
		 System.out.println(obj);
		 parentDao.save(obj);
		 return new ApiResponse("success");
	}
	public List<ChildHomeResponseDto> getChildHomeDetails() {
		List<ChildHome> l=childHomeDao.findByStatus(true);
		List<ChildHomeResponseDto> li=l.stream().map(r->mapper.map(r,ChildHomeResponseDto.class)).collect(Collectors.toList());
		return li;
	}
}
