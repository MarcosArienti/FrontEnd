
package com.portfolio.marcosaa.Service;

import com.portfolio.marcosaa.Entity.Persona;
import com.portfolio.marcosaa.Interface.IPersonaService;
import com.portfolio.marcosaa.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ImplPersonaService implements IPersonaService{
    @Autowired IPersonaRepository ipersonaRepository;
    
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = ipersonaRepository.findAll();
                return persona;
    }

    @Override
    public void savePersona(Persona persona) {
       ipersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        ipersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }
    
    
    
    
}
