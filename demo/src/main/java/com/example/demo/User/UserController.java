package com.example.demo.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }



    @GetMapping
    public List<User> getAllUser(){
        return  userService.getAllUser();
    }
    @GetMapping("/{id}")
    public User getUser(@PathVariable String id){
        return userService.getUser(id);
    }

    @PostMapping
    public User addUser(@RequestBody User user ){
        System.out.println(user);
        return  userService.addUser(user);

    }
    @PutMapping("/{id}")
    public void updateUser(@PathVariable String id, @RequestBody User data) {
        userService.updateUser(id, data);
    }

    @DeleteMapping("/{id}")
    public void deleteuser (@PathVariable String id ){
        userService.deleteuser(id);
    }

}
