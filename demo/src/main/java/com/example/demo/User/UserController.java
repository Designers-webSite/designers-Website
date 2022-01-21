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
   // get all user
    @GetMapping
    public List<User> getAllUser(){
        return  userService.getAllUser();
    }
    // get user by id
    @GetMapping("/{id}")
    public User getUser(@PathVariable String id){
        return userService.getUser(id);
    }
    // register user

    @PostMapping
    public User register(@RequestBody User user){

        return userService.register( user);
    }
    //update information user

    @PutMapping("/{id}")
    public void updateUser(@PathVariable String id, @RequestBody User data) {
        userService.updateUser(id, data);
    }
    //update pic
    @PutMapping("pic/{id}")
    public void updatePicture(@PathVariable String id, @RequestBody String picUrl) {
        userService.updatePicture(id, picUrl);
    }
    //delete account user

    @DeleteMapping("/{id}")
    public void deleteUser (@PathVariable String id ){
        userService.deleteUser(id);
    }


}
