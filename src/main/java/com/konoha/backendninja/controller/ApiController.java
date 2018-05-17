package com.konoha.backendninja.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.konoha.backendninja.model.Modelo1;

@RestController
@RequestMapping("/api")
public class ApiController {

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/nombre")
	public Modelo1 miModel() {
		return new Modelo1("KHAN!!!!!");
	}
}
