package com.example.demo.Gallery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryService {
    private final GalleryRepository galleryRepository;
    @Autowired
    public GalleryService(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    public List<Gallery> getAllGalleries() {
        return galleryRepository.findAll();

    }

    public Gallery getGallery(String id) {
        Long gallery_id=Long.parseLong(id);
        return galleryRepository.findById( gallery_id).orElse(null);
    }

    public Gallery addGallery(Gallery gallery) {
//        System.out.println(gallery.toString());
        return galleryRepository.save(gallery);
    }

    public void updateGallery(String id, Gallery data) {
        Long gallery_id=Long.parseLong(id);
        Gallery gallery=galleryRepository.findById( gallery_id).orElse(null);
        if(gallery != null){
            gallery.setPicture(data.getPicture());
            gallery.setId(data.getId());

        }
    }

    public void deleteGallery(String id) {
        Long gallery_id=Long.parseLong(id);
        galleryRepository.deleteById(gallery_id);
    }

}
