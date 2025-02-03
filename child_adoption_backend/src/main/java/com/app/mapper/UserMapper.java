package com.app.mapper;
import com.app.dto.ParentResponseDto;
import com.app.pojos.Parent;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
    ParentResponseDto parentToParentResponeDto(Parent parent);
    Parent parentResponseDtoToParent(ParentResponseDto parentResponseDto);
	ParentResponseDto aToParentResponseDto(Parent a);
}

