package dev.lokeshbisht.url_shortener_service.controller;

import dev.lokeshbisht.url_shortener_service.dto.ApiResponseDto;
import dev.lokeshbisht.url_shortener_service.dto.UrlShortenerRequestDto;
import dev.lokeshbisht.url_shortener_service.service.UrlMappingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UrlMappingController {

    @Autowired
    private UrlMappingService urlMappingService;

    @PostMapping("/shortener")
    public ResponseEntity<ApiResponseDto<String>> shortenUrl(@RequestBody UrlShortenerRequestDto urlShortenerRequestDto) {
        return new ResponseEntity<>(urlMappingService.shortenUrl(urlShortenerRequestDto.getUrl()), HttpStatus.CREATED);
    }
}
