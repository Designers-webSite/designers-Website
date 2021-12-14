package com.example.demo.Gallery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="gallery")
public class GalleryController {
    private  final GalleryService galleryService;
    @Autowired
    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }
    @GetMapping
    public List<Gallery> getAllGalleries(){
        return galleryService.getAllGalleries();
    }
    @GetMapping("/{id}")
    public Gallery getGallery(@PathVariable String id){
        return galleryService.getGallery(id);
    }
    @PostMapping
    public Gallery addGallery(@RequestBody Gallery gallery  ){
        return  galleryService.addGallery(gallery);

    }
    @PutMapping("/{id}")
    public void updateGallery(@PathVariable String id , @RequestBody Gallery data){
        galleryService.updateGallery(id, data);
    }
    @DeleteMapping("/{id}")
    public void deleteGallery(@PathVariable String id){

        galleryService.deleteGallery(id);

    }
}
