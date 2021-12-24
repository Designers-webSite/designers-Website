package com.example.demo.User;

import com.example.demo.Role.Role;
import com.example.demo.Utility.Utility;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    @Column(unique=true)
    private String userName;
    private String password;
    private String email;
    private Date creationDate;
    private boolean status;
    private String role;
    @OneToMany(mappedBy = "user")
    private List<Utility> utilities;

    public  User(){}

    public User(Long id, String fullName, String userName, String password, String email, Date creationDate, boolean status, String role, List<Utility> utilities) {
        this.id = id;
        this.fullName = fullName;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.creationDate = creationDate;
        this.status = status;
        this.role = role;
        this.utilities = utilities;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }



    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;


    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }




    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", userName='" + userName + '\'' +
                ", password=" + password +
                ", email='" + email + '\'' +
                ", creationDate=" + creationDate +
                ", status=" + status +
                '}';
    }
}
