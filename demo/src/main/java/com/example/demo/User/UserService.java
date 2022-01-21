package com.example.demo.User;


import com.example.demo.Role.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    private  final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepo roleRepo, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user= userRepository.findByUserName(userName);
        if(user == null){
            throw new UsernameNotFoundException("User not exist");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        authorities.add(new SimpleGrantedAuthority(user.getRole()));


        return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(),authorities);
    }


    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User getUser(String id ) {
        System.out.println(id);
        Long user_id=Long.parseLong(id);
        User u = userRepository.findById(user_id).orElse(null);
        System.out.println(u);
        return u;
    }
    public User register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }




    public void updateUser(String id, User data) {
        System.out.println("input data: "+data);
        Long user_id = Long.parseLong(id);
        User user = userRepository.findById(user_id).orElse(null);
        if (user != null) {
            if (data.getFullName() != null) user.setFullName(data.getFullName());
            if (data.getUserName() != null)user.setUserName(data.getUserName());
            if (data.getEmail() != null)user.setEmail(data.getEmail());
            if (data.getPicture() != null)user.setPicture(data.getPicture());

            userRepository.save(user);
        }
    }



    public void deleteUser(String id) {
        Long user_id=Long.parseLong(id);
        userRepository.deleteById(user_id);
    }


    public void updatePicture(String id, String picUrl) {
        Long user_id = Long.parseLong(id);
        User user = userRepository.findById(user_id).orElse(null);
        if (user != null) {

            user.setPicture(picUrl);
            userRepository.save(user);
        }
    }

}
