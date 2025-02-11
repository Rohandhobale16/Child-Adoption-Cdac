package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.*;
import com.app.dto.ChildHomeDTO;
import com.app.dto.ParentDTO;
import com.app.dto.RequestDto;
import com.app.dto.SlotBookingDto;
import com.app.pojos.*;

import java.util.*;
import java.util.stream.Collectors;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ParentService {

    @Autowired
    private ChildHomeDao childHomeRepository;

    @Autowired
    private RequestDao requestRepository;

    @Autowired
    private ParentDao parentRepository;

    @Autowired
    private ParentCoupleDao parentCoupleRepository;

    @Autowired
    private UserDao userRepository;

    @Autowired
    private AddressDao addressRepository;
    
    @Autowired
    private RequestDao requestDao;
    @Autowired
    private ModelMapper mapper;

    // Method to get all child homes
    public List<ChildHomeDTO> getAllChildHomes() {
        List<ChildHome> childHomes = childHomeRepository.findAll();

        return childHomes.stream().map(childHome -> {
            ChildHomeDTO dto = new ChildHomeDTO();
            dto.setHouseName(childHome.getHouseName());

            if (childHome.getU() != null && childHome.getU().getAddress() != null) {
                dto.setHouseNo(childHome.getU().getAddress().getHouseNo());
                dto.setStreet(childHome.getU().getAddress().getStreet());
                dto.setCity(childHome.getU().getAddress().getCity());
                dto.setDistrict(childHome.getU().getAddress().getDistrict());
                dto.setState(childHome.getU().getAddress().getState());
                dto.setPincode(childHome.getU().getAddress().getPincode());
                dto.setUserMobile(childHome.getU().getMobile());
            }

            return dto;
        }).collect(Collectors.toList());
    }

    public SlotBookingDto bookSlot(Long userId, SlotBookingDto slotBookingDto) {
        ChildHome childHome = childHomeRepository.findByHouseName(slotBookingDto.getChildHomeName())
                .orElseThrow(() -> new RuntimeException("Child home not found"));

        Long childHomeId = childHome.getId();

        Parent parent = parentRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Parent not found"));

        Long parentId = parent.getId();

        // Check if the parent has already booked the same ChildHome on the same date
        boolean alreadyBooked = requestRepository.existsByP_IdAndCh_IdAndDate(parentId, childHomeId,
                slotBookingDto.getDate());
        if (alreadyBooked) {
            throw new RuntimeException("You have already booked a slot for this child home on the selected date.");
        }

        int count = requestRepository.countByCh_IdAndDate(childHomeId, slotBookingDto.getDate());
        if (count >= 10) {
            throw new RuntimeException("The selected slot is already fully booked.");
        }

        Request request = new Request();
        request.setP(parent);
        request.setCh(childHome);
        request.setDate(slotBookingDto.getDate());
        request.setSlot(slotBookingDto.getSlot());
        request.setStatus("booked");
        requestRepository.save(request);

        return slotBookingDto;
    }

    public ParentDTO getParentProfile(Long userId) {
        Parent parent = parentRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Parent not found"));

        ParentDTO dto = new ParentDTO();
        dto.setId(parent.getId());
        dto.setMarriageStatus(parent.getMarrigeStatus());
        dto.setFname(parent.getU().getFname());
        dto.setLname(parent.getU().getLname());
        dto.setEmail(parent.getU().getEmail());
        dto.setGender(parent.getGender().name());
        dto.setOccupation(parent.getOccupation());
        dto.setAnnualIncome(parent.getIncome());

        // Common Address Details
        Address address = parent.getU().getAddress();
        dto.setHouseNo(address.getHouseNo());
        dto.setStreet(address.getStreet());
        dto.setCity(address.getCity());
        dto.setDistrict(address.getDistrict());
        dto.setState(address.getState());
        dto.setPincode(address.getPincode());

        // Fetch partner details if present
        if (parent.getPc() != null) {
            ParentCouple partner = parent.getPc();
            dto.setPartnerFname(partner.getPartnerfname());
            dto.setPartnerLname(partner.getPartnerlname());
            dto.setPartnerEmail(partner.getPartneremail());
            dto.setPartnerGender(partner.getPartnergender().name());
            dto.setPartnerOccupation(partner.getPartneroccupation());
            dto.setPartnerIncome(partner.getPartnerincome());
        }

        return dto;
    }

    public ParentDTO updateParentDetails(Long userId, ParentDTO parentDTO) {
        Parent parent = parentRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Parent not found"));

        // Update User Details
        User user = userRepository.getById(userId);
        user.setFname(parentDTO.getFname());
        user.setLname(parentDTO.getLname());
        user.setEmail(parentDTO.getEmail());
        userRepository.save(user);

        // Update Address Details
        Address address = user.getAddress();
        address.setHouseNo(parentDTO.getHouseNo());
        address.setStreet(parentDTO.getStreet());
        address.setCity(parentDTO.getCity());
        address.setDistrict(parentDTO.getDistrict());
        address.setState(parentDTO.getState());
        address.setPincode(parentDTO.getPincode());
        addressRepository.save(address);

        // Update Parent Details
        parent.setIncome(parentDTO.getAnnualIncome());
        parent.setOccupation(parentDTO.getOccupation());
        parent.setMarrigeStatus(parentDTO.getMarriageStatus());

        // If married, update partner details
        if (parentDTO.getPartnerFname() != null) {
            ParentCouple partner = parent.getPc();
            if (partner == null) {
                partner = new ParentCouple();
            }
            partner.setPartnerfname(parentDTO.getPartnerFname());
            partner.setPartnerlname(parentDTO.getPartnerLname());
            partner.setPartneremail(parentDTO.getPartnerEmail());
            partner.setPartnergender(Gender.valueOf(parentDTO.getPartnerGender()));
            partner.setPartneroccupation(parentDTO.getPartnerOccupation());
            partner.setPartnerincome(parentDTO.getPartnerIncome());
            parentCoupleRepository.save(partner);
            parent.setPc(partner);
        } else {
            parent.setPc(null); // Remove partner if not married
        }

        parentRepository.save(parent);

        // Return updated parent details
        ParentDTO updatedDTO = new ParentDTO();
        updatedDTO.setFname(user.getFname());
        updatedDTO.setLname(user.getLname());
        updatedDTO.setEmail(user.getEmail());
        updatedDTO.setMarriageStatus(parent.getMarrigeStatus());
        updatedDTO.setOccupation(parent.getOccupation());
        updatedDTO.setAnnualIncome(parent.getIncome());

        if (parent.getPc() != null) {
            updatedDTO.setPartnerFname(parent.getPc().getPartnerfname());
            updatedDTO.setPartnerLname(parent.getPc().getPartnerlname());
            updatedDTO.setPartnerEmail(parent.getPc().getPartneremail());
            updatedDTO.setPartnerGender(parent.getPc().getPartnergender().toString());
            updatedDTO.setPartnerOccupation(parent.getPc().getPartneroccupation());
            updatedDTO.setPartnerIncome(parent.getPc().getPartnerincome());
        }

        return updatedDTO;
    }
    
   

//    public List<RequestDto> getChildHomeAndStatusByParentId(Long parentId) {
//    	User u=userRepository.findById(parentId).orElseThrow();
//    	Parent p=parentRepository.findByU(u);
//        List<Request> l = requestDao.findByP(p);
//        List<RequestDto> li=l.stream().map(r->mapper.map(r,RequestDto.class)).collect(Collectors.toList());
//          return li;    }

    public List<RequestDto> getChildHomeAndStatusByParentId(Long parentId) {
        User u = userRepository.findById(parentId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + parentId));

        Parent p = parentRepository.findByU(u);
        if (p == null) {
            throw new RuntimeException("Parent not found for user id: " + parentId);
        }

        List<Request> l = requestDao.findByP(p);
        if (l == null) {
            l = new ArrayList<>();
        }

        return l.stream()
                .map(r -> mapper.map(r, RequestDto.class))
                .collect(Collectors.toList());
    }

    public String setFeedback(Long id, String feedback) {
        Request request = requestDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Request not found"));

        request.setFeedBack(feedback);  // ✅ Stores only the feedback string
        requestDao.save(request);  // ✅ Saves feedback to the database

        return "Feedback submitted successfully!";
    }

    
}


