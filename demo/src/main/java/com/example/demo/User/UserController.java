package com.example.demo.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="user")
@CrossOrigin("*")
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
    public User register(@RequestBody User user){

        return userService.register( user);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable String id, @RequestBody User data) {
        userService.updateUser(id, data);
    }

    @DeleteMapping("/{id}")
    public void deleteUser (@PathVariable String id ){
        userService.deleteuser(id);
    }


}
//class Form {
//    private User user;
//    private Long role_id;
//
//
//    public User getUser() {
//        return user;
//    }
//
//    public Long getRole_id() {
//        return role_id;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public void setRole_id(Long role_id) {
//        this.role_id = role_id;
//    }
//}
