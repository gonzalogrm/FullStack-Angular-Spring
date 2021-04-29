package com.zalost.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zalost.backend.model.User;
import com.zalost.backend.persistence.UserRepository;
import com.zalost.backend.util.NotFoundException;

@RestController 
@RequestMapping("/fullstack")
public class UserController {
	@Autowired
	private UserRepository userDAO;
	
	//REST: get all (GET)
	@GetMapping("/users")
	public List<User> findAllUsers(){
		return userDAO.findAll();
	}		
	
	//REST: get user by ID (GET)
	//@PathVariable: Annotation which indicates that a method parameter 
	//should be bound to a URI template variable.
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserByID(@PathVariable int id) {
		//Es un Optional<T>
		Optional<User> u = userDAO.findById(id);
		//Si está presente lo devolvemos
		if(u.isPresent()){
		    return ResponseEntity.ok(u.get());
		}
		//Si no, lanzamos un error
		else{
		    throw new NotFoundException("Not found User by id: " + id);
		}
	}
	
	//REST: Create new user (POST Method)
	//@RequestBody: Annotation indicating a method parameter 
	//should be bound to the body of the web request.
	@PostMapping("/users")
	public User createUser(@RequestBody User u) {
		return userDAO.save(u);
	}	
	
	//REST: Update user (PUT)
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User userUpdateData){
		//En primer lugar, buscamos el Usuario
		Optional<User> findUser = userDAO.findById(id);
		//Si está presente lo devolvemos
		if(findUser.isPresent()){
			//Usuario encontrado para realizar update sobre él.
			User userToUpdate = findUser.get();			
			//Copiamos los nuevos datos al usuario
			userToUpdate.copyDataFromUser(userUpdateData);			
			//Guadramos en la DB
			User userSaved = userDAO.save(userToUpdate);			
		    return ResponseEntity.ok(userSaved);
		}
		else {
			throw new NotFoundException("Not found User by id: " + id);
		}
	}
	
	//REST: Delete User (DELETE)
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable int id) {
		//En primer lugar, buscamos el Usuario
		Optional<User> findUser = userDAO.findById(id);
		//Si está presente lo eliminamos
		if(findUser.isPresent()){	
			//Realizamos el Delete
			userDAO.delete(findUser.get());			
		    return ResponseEntity.ok(true);
		}
		else {
			throw new NotFoundException("Not found User by id: " + id);
		}
	}
}
