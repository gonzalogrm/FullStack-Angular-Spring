package com.zalost.backend.util;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public NotFoundException(String errorText) {
		super(errorText);
	}
}
