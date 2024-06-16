package dev.lokeshbisht.url_shortener_service.exception.handler;

import dev.lokeshbisht.url_shortener_service.constants.ErrorMessages;
import dev.lokeshbisht.url_shortener_service.dto.ErrorResponseDto;
import dev.lokeshbisht.url_shortener_service.enums.ErrorCode;
import dev.lokeshbisht.url_shortener_service.exception.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ErrorResponseDto> handleBadRequestException(BadRequestException ex) {
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(ErrorCode.BAD_REQUEST, ex.getMessage());
        return new ResponseEntity<>(errorResponseDto, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponseDto> handleIllegalArgumentException(IllegalArgumentException ex) {
        logger.error("IllegalArgumentException: {}", ex.getMessage(), ex);
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(ErrorCode.UNPROCESSABLE_ENTITY, ex.getMessage());
        return new ResponseEntity<>(errorResponseDto, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponseDto> handleUncaughtException(Exception ex) {
        logger.error("Uncaught exception: {}", ex.getMessage(), ex);
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(ErrorCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(errorResponseDto, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
