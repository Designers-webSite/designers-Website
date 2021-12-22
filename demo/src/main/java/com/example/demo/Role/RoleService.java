package com.example.demo.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    private final RoleRepo roleRepo;
@Autowired
    public RoleService(RoleRepo roleRepo) {
        this.roleRepo = roleRepo;
    }

    public Role saveRole(Role role){
    return roleRepo.save(role);
    }

    public List<Role> getAllRoles() {
    return roleRepo.findAll();
    }
}
