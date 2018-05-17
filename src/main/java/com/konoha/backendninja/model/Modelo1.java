package com.konoha.backendninja.model;

import java.io.Serializable;

public class Modelo1 implements Serializable {
	/**
	 * 
	 */
	public Modelo1(String _nombre) {
		this.nombre = _nombre;
	}
	public Modelo1() {
		
	}
	private static final long serialVersionUID = 1L;
	private String nombre;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return nombre;
	}

}
