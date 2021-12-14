package com.example.demo.Gallery;

import com.example.demo.Utility.Utility;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="Galleries")
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
//    @Column
//    @ElementCollection(targetClass=String.class)
    private String  pictures;
    private String name;
    private String Description;

    @JsonIgnore
    @OneToOne(mappedBy = "gallery")
    private Utility utility;

    public Gallery(){}

    public Gallery(String  pictures, String name, String description, Utility utility) {
        this.pictures = pictures;
        this.name = name;
        this.Description = description;
        this.utility = utility;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String  getPictures() {
        return pictures;
    }

    public void setPictures(String  pictures) {
        this.pictures = pictures;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Utility getUtility() {
        return utility;
    }

    public void setUtility(Utility utility) {
        this.utility = utility;
    }
}

