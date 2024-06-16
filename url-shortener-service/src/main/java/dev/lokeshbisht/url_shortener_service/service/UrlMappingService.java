package dev.lokeshbisht.url_shortener_service.service;

import dev.lokeshbisht.url_shortener_service.dto.ApiResponseDto;

public interface UrlMappingService {

    ApiResponseDto<String> shortenUrl(String longUrl);
}
