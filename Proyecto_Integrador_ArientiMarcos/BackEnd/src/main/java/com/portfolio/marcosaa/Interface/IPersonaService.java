
package com.portfolio.marcosaa.Interface;

import com.portfolio.marcosaa.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer lista de Persona
    public List<Persona> getPersona();
    
    //Guardar objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar usuario por ID
    public void deletePersona(Long id);
    
    //Buscar persona
    public Persona findPersona(Long id);

    
    
}
