package dev.lokeshbisht.url_shortener_service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UrlShortenerRequestDto {

    private String url;
}
