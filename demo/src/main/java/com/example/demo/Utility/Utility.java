package com.example.demo.Utility;
import com.example.demo.Gallery.Gallery;
import com.example.demo.User.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Utility")
public class Utility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String title;
    private String description;
    private Date duration;
    private double price;
    private String designType;
    private String instructions;
    private String picture;



    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JsonIgnoreProperties("utilities")
    private User user;
    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "utility")
    private List<Gallery> gallery;

    public Utility(){}

    public Utility(Long id, String title, String description, Date duration, double price, String designType, String instructions, String picture, User user, List<Gallery> gallery) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.price = price;
        this.designType = designType;
        this.instructions = instructions;
        this.picture = picture;
        this.user = user;
        this.gallery = gallery;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDuration() {
        return duration;
    }

    public void setDuration(Date duration) {
        this.duration = duration;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


    public String getDesignType() {
        return designType;
    }

    public void setDesignType(String designType) {
        this.designType = designType;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Gallery> getGallery() {
        return gallery;
    }

    public void setGallery(List<Gallery> gallery) {
        this.gallery = gallery;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}


