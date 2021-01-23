package com.example.demo.ToDo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class TodoHardCodedService {

	public static List<ToDo> todos=new ArrayList<>();
	
	private static Long idCounter=(long) 1;
	
	static {
		todos.add(new ToDo(idCounter++,"vishal","Learn React",new Date(),false));
		todos.add(new ToDo(idCounter++,"jony","Learn Spring boot",new Date(),true));
		todos.add(new ToDo(idCounter++,"soni","mixed both",new Date(),true));
	}
	
	public List<ToDo> findall(){
		return todos;
	}
	
	public List<ToDo> findname(String username){
		return todos;
		
	}
	public ToDo deletebyid(Long id) {
		ToDo todo=findbyId(id);
		todos.remove(todo);
		return todo;
	}
	public ToDo findbyId(Long id) {
		for(ToDo todo:todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
}
