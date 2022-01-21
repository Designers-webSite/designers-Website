package com.example.demo.Gallery;

import com.example.demo.Utility.Utility;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Gallery")
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String picture;

    @JsonIgnore
    @ManyToOne
    private Utility utility;

    public Gallery(){}

    public Gallery(Long id, String picture, Utility utility) {
        this.id = id;
        this.picture = picture;
        this.utility = utility;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Utility getUtility() {
        return utility;
    }

    public void setUtility(Utility utility) {
        this.utility = utility;
    }

    @Override
    public String toString() {
        return "Gallery{" +
                "id=" + id +
                ", picture='" + picture + '\'' +
                ", utility=" + utility +
                '}';
    }
}

