
package com.portfolio.marcosaa.Dto;

import javax.validation.constraints.NotBlank;


public class dtoEducacion {
    @NotBlank
    private String nomreE;
    @NotBlank
    private String descripcionE;

    public dtoEducacion() {
    }

    public dtoEducacion(String nomreE, String descripcionE) {
        this.nomreE = nomreE;
        this.descripcionE = descripcionE;
    }

    public String getNombreE() {
        return nomreE;
    }

    public void setNombreE(String nomreE) {
        this.nomreE = nomreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }
    
    
    
}
