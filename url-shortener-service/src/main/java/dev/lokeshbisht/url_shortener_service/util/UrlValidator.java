package dev.lokeshbisht.url_shortener_service.util;

import org.springframework.stereotype.Component;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class UrlValidator {

    private static final String URL_REGEX = "^(https?:\\/\\/)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(:\\d+)?(\\/[^\\s]*)?$";

    private static final Pattern URL_PATTERN = Pattern.compile(URL_REGEX);

    public boolean isValidUrl(String url) {
        if (url == null) {
            return false;
        }
        Matcher matcher = URL_PATTERN.matcher(url);
        return matcher.matches();
    }
}
