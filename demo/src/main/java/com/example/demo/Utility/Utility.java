package com.example.demo.Utility;
import com.example.demo.Designer.Designer;
import com.example.demo.Gallery.Gallery;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Utilities")
public class Utility {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id ;
        private String title;
        private String description;
        private Date duration;
        private double price;
        private String type;
        @JsonIgnore
        @ManyToOne(fetch = FetchType.EAGER, optional = false)
        private Designer designer;
//        @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
        @OneToOne(fetch = FetchType.EAGER)
        private Gallery gallery;

        public Utility(){}

        public Utility(Long id, String title, String description, Date duration, double price, String type, Designer designer, Gallery gallery) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.duration = duration;
            this.price = price;
            this.type = type;
            this.designer = designer;
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

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public Designer getDesigner() {
            return designer;
        }

        public void setDesigner(Designer designer) {
            this.designer = designer;
        }

        public Gallery getGallery() {
            return gallery;
        }

        public void setGallery(Gallery gallery) {
            this.gallery = gallery;
        }
    }


