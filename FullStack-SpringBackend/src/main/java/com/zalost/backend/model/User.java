package com.zalost.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User{
	
	//Parameters
	@Id
	@Column(name="id") 
	private int id;
	
	@Column(name="name") 
	private String name;
	
	@Column(name="email") 
	private String email;
	
	@Column(name="age") 
	private int age;
	
	@Column(name="language") 
	private String language;
		
	//Constructor
	public User() {}
	
	public User(String name, String email, int age, String language) {
		this.name = name;
		this.email = email;
		this.age = age;
		this.language = language;
	}
	
	//Methods
	public void copyDataFromUser(User source) {
		this.name = source.getName();
		this.email = source.getEmail();
		this.age = source.getAge();
		this.language = source.getLanguage();
	}
	

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", age=" + age + ", language=" + language;
	}


	//Getters Setters
	public int getId() {
		return id;
	}
	

	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}	
}
