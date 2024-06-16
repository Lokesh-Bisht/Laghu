package dev.lokeshbisht.url_shortener_service.document;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document("url_mapping")
public class UrlMapping {

    @Id
    private String id;

    private String longUrl;

    private String shortUrl;

    private Date createdAt;

    private Long accessCount;
}
