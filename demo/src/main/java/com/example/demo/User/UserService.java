package com.example.demo.User;


import com.example.demo.Role.Role;
import com.example.demo.Role.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private  final UserRepository userRepository;
    private final RoleRepo roleRepo;
    @Autowired
    public UserService(UserRepository userRepository, RoleRepo roleRepo) {
        this.userRepository = userRepository;
        this.roleRepo = roleRepo;
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User getUser(String id ) {
        Long user_id=Long.parseLong(id);
        return userRepository.findById(user_id).orElse(null);
    }
    public User addUser(Form form) {
        User user=form.getUser();
        Long role_id =form.getRole_id();
        Role role =roleRepo.findById(role_id).orElse(null);
        user.getRoles().add(role);

        System.out.println(user.toString());
        return userRepository.save(user);
    }

    public void updateUser(String id, User data) {
        Long user_id = Long.parseLong(id);
        User user = userRepository.findById(user_id).orElse(null);
        if (user != null) {
            user.setFullName(data.getFullName());
            user.setUserName(data.getUserName());
            user.setAge(data.getAge());
            user.setStatus(data.isStatus());
            user.setCreationDate(data.getCreationDate());
            userRepository.save(user);
        }
    }

    public void deleteuser(String id) {
        Long user_id=Long.parseLong(id);
        userRepository.deleteById(user_id);
    }
}
