package com.example.demo.MainController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BasicAuthController {
	
	@GetMapping("/basicauth")
	public AutenticationBean Auth() {
		return new AutenticationBean((long) 1, "vishal","vishal");
			//	((long) 2,"jack","jack"));
				
	}
}
