package dev.lokeshbisht.url_shortener_service.repository;

import dev.lokeshbisht.url_shortener_service.document.UrlMapping;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UrlMappingRepository extends MongoRepository<UrlMapping, String> {

    Optional<UrlMapping> findByLongUrl(String longUrl);
}
