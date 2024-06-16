package dev.lokeshbisht.url_shortener_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponseDto<T> {

    private T data;

    private MetadataDto metadataDto;
}
