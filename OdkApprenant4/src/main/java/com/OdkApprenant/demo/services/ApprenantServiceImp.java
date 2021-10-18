package com.OdkApprenant.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Apprenant;
import com.OdkApprenant.demo.repositories.ApprenantRepository;

@Service
public class ApprenantServiceImp implements ApprenantService {
	
	@Autowired
	private ApprenantRepository repository;
	
	public List<Apprenant> listAll(){
		return repository.findAll();
	}
	
	public void save(Apprenant liste_apprenants) {
		repository.save(liste_apprenants);
	}
	
	public Apprenant get(Integer id){
		return repository.findById(id).get();
	}
	
	public void delete(Integer id) {
		repository.deleteById(id);
	}
	
	public void updateApprenant(Integer id, Apprenant apprenant) {
		Apprenant apprenantFromDb = repository.findById(id).get();
		System.out.println(apprenantFromDb.toString());
		apprenantFromDb.setNom(apprenant.getNom());
		apprenantFromDb.setPrenom(apprenant.getPrenom());
		apprenantFromDb.setAge(apprenant.getAge());
		apprenantFromDb.setTelephone(apprenant.getTelephone());
		apprenantFromDb.setEmail(apprenant.getEmail());
		apprenantFromDb.setLogin(apprenant.getLogin());
		apprenantFromDb.setPassword(apprenant.getPassword());
		apprenantFromDb.setGenre(apprenant.getGenre());
		apprenantFromDb.setApprenantStatus(apprenant.getApprenantStatus());
		apprenantFromDb.setDateModification(apprenant.getDateModification());
		repository.save(apprenantFromDb);
	}
	
	public Optional<Apprenant> loginUser(String login, String password) {
		
		return repository.getUserByLoginAndPassword(login, password);
	}

	
	

}
