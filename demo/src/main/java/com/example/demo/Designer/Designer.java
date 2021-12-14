package com.example.demo.Designer;



import com.example.demo.Utility.Utility;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Designers")
public class Designer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;

    private String userName;
    private int password;
    private int age;
    private double  rate;
    @Column
    @ElementCollection(targetClass=String.class)
    private List<String>designType;
    @Column
    @ElementCollection(targetClass=String.class)
    private List<String> protofolio;
    private boolean availabilty;
//    @Column
//    @ElementCollection(targetClass=String.class)


    @JsonIgnore
    @OneToMany(mappedBy = "designer")
    private List<Utility>  utilities;

    public Designer(){}


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

    public Designer(Long id, String fullName, String userName, int password, int age, double rate, List<String> designType, List<String> protofolio, boolean availabilty, List<Utility> utilities) {
        this.id = id;
        this.fullName = fullName;
        this.userName = userName;
        this.password = password;
        this.age = age;
        this.rate = rate;
        this.designType = designType;
        this.protofolio = protofolio;
        this.availabilty = availabilty;
        this.utilities = utilities;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public List<String> getProtofolio() {
        return protofolio;
    }

    public void setProtofolio(List<String> protofolio) {
        this.protofolio = protofolio;
    }

    public boolean isAvailabilty() {
        return availabilty;
    }

    public void setAvailabilty(boolean availabilty) {
        this.availabilty = availabilty;
    }

    public List<String> getDesignType() {
        return designType;
    }

    public void setDesignType(List<String> designType) {
        this.designType = designType;
    }

    public List<Utility> getUtilities() {
        return utilities;
    }

    public void setUtilities(List<Utility> utilities) {
        this.utilities = utilities;
    }
}

