package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.dao.AddressDao;
import com.app.dao.ChildHomeDao;
import com.app.dao.ParentCoupleDao;
import com.app.dao.ParentDao;
import com.app.dao.RequestDao;
import com.app.dao.UserDao;
import com.app.dto.ChildHomeDTO;
import com.app.dto.ParentDTO;
import com.app.dto.SlotBookingDto;
import com.app.pojos.Address;
import com.app.pojos.ChildHome;
import com.app.pojos.Gender;
import com.app.pojos.Parent;
import com.app.pojos.ParentCouple;
import com.app.pojos.Request;
import com.app.pojos.User;

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

    public SlotBookingDto bookSlot(SlotBookingDto slotBookingDto) {

        ChildHome childHome = childHomeRepository.findByHouseName(slotBookingDto.getChildHomeName())
                .orElseThrow(() -> new RuntimeException("Child home not found"));

        Long childHomeId = childHome.getId();
        Long id = 2L;
        Parent parent = parentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Parent not found"));

        // Check if the parent has already booked the same ChildHome on the same date
        boolean alreadyBooked = requestRepository.existsByP_IdAndCh_IdAndDate(id, childHomeId,
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

        requestRepository.save(request);

        return slotBookingDto;
    }

    public ParentDTO getParentProfile(Long id) {
        Parent parent = parentRepository.findById(id)
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

    // public ParentDTO updateParentDetails(Long id, ParentDTO parentDTO) {
    // Parent parent = parentRepository.findById(id)
    // .orElseThrow(() -> new RuntimeException("Parent not found"));

    // // Update User Details
    // User user = parent.getU();
    // user.setFname(parentDTO.getFname());
    // user.setLname(parentDTO.getLname());
    // user.setEmail(parentDTO.getEmail());
    // userRepository.save(user);

    // // Update Address Details
    // Address address = user.getAddress();
    // address.setHouseNo(parentDTO.getHouseNo());
    // address.setStreet(parentDTO.getStreet());
    // address.setCity(parentDTO.getCity());
    // address.setDistrict(parentDTO.getDistrict());
    // address.setState(parentDTO.getState());
    // address.setPincode(parentDTO.getPincode());
    // addressRepository.save(address);

    // // Update Parent Details
    // parent.setIncome(parentDTO.getAnnualIncome());
    // parent.setOccupation(parentDTO.getOccupation());
    // parent.setMarrigeStatus(parentDTO.isMarriageStatus());

    // // If married, update partner details
    // if (parentDTO.isMarriageStatus() && parentDTO.getPartnerFname() != null) {
    // ParentCouple partner = parent.getPc();
    // if (partner == null) {
    // partner = new ParentCouple();
    // }
    // partner.setPartnerfname(parentDTO.getPartnerFname());
    // partner.setPartnerlname(parentDTO.getPartnerLname());
    // partner.setPartneremail(parentDTO.getPartnerEmail());
    // partner.setPartnergender(Gender.valueOf(parentDTO.getPartnerGender()));
    // partner.setPartneroccupation(parentDTO.getPartnerOccupation());
    // partner.setPartnerincome(parentDTO.getPartnerIncome());

    // parentCoupleRepository.save(partner);
    // parent.setPc(partner);
    // } else {
    // parent.setPc(null); // Remove partner if not married
    // }

    // parentRepository.save(parent);

    // return parentDTO;
    // }

}
