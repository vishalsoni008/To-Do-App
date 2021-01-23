package com.example.demo.ToDo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToDoController {
	
	@Autowired
	private TodoHardCodedService todoservice;

	@GetMapping("/users/{username}/todos")
	public List<ToDo> geAlltodo(@PathVariable String username){
		return todoservice.findall();
	}
	
	@DeleteMapping("/users/delete/{id}")
	public ToDo delete(@PathVariable Long id) {
		return todoservice.deletebyid(id);
	}
}
