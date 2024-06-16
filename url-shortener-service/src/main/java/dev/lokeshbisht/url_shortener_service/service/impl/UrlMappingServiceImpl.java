package dev.lokeshbisht.url_shortener_service.service.impl;

import dev.lokeshbisht.url_shortener_service.document.UrlMapping;
import dev.lokeshbisht.url_shortener_service.dto.ApiResponseDto;
import dev.lokeshbisht.url_shortener_service.dto.MetadataDto;
import dev.lokeshbisht.url_shortener_service.exception.BadRequestException;
import dev.lokeshbisht.url_shortener_service.repository.UrlMappingRepository;
import dev.lokeshbisht.url_shortener_service.service.UrlMappingService;
import dev.lokeshbisht.url_shortener_service.util.UrlValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

import static dev.lokeshbisht.url_shortener_service.constants.ErrorMessages.INVALID_URL;

@Service
public class UrlMappingServiceImpl implements UrlMappingService {

    @Autowired
    private UrlValidator urlValidator;

    @Autowired
    private UrlMappingRepository urlMappingRepository;

    @Value("${host.url}")
    private String hostUrl;

    private static final String BASE62 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    private static final Logger logger = LoggerFactory.getLogger(UrlMappingServiceImpl.class);

    private ApiResponseDto<String> mapToApiResponseDto(String url, long startTime) {
        MetadataDto metadataDto = MetadataDto.builder()
            .message("OK")
            .took(System.currentTimeMillis() - startTime + " ms")
            .build();
        return new ApiResponseDto<>(url, metadataDto);
    }

    @Override
    public ApiResponseDto<String> shortenUrl(String longUrl) {
        long startTime = System.currentTimeMillis();
        logger.info("Start shortening url: {}", longUrl);
        if (!urlValidator.isValidUrl(longUrl)) {
            logger.error("Invalid url.");
            throw new BadRequestException(INVALID_URL);
        }
        Optional<UrlMapping> existingUrlMapping = urlMappingRepository.findByLongUrl(longUrl);
        if (existingUrlMapping.isPresent()) {
            return mapToApiResponseDto(existingUrlMapping.get().getShortUrl(), startTime);
        }
        String shortUrl = generateShortUrl();
        UrlMapping urlMapping = UrlMapping.builder()
            .longUrl(longUrl)
            .shortUrl(shortUrl)
            .accessCount(0L)
            .createdAt(new Date())
            .build();
        return mapToApiResponseDto(urlMappingRepository.save(urlMapping).getShortUrl(), startTime);
    }

    private String generateShortUrl() {
        long id = urlMappingRepository.count() + 1;
        return hostUrl + "/" + encodeBase62(id);
    }

    private String encodeBase62(Long value) {
        StringBuilder sb = new StringBuilder();
        while (value > 0) {
            sb.append(BASE62.charAt((int) (value % 62)));
            value /= 62;
        }
        return sb.reverse().toString();
    }
}
