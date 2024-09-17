package com.example.demo.Gallery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="gallery")
@CrossOrigin("*")
public class GalleryController {
    private  final GalleryService galleryService;
    @Autowired
    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    //    get  all galleries
    @GetMapping
    public List<Gallery> getAllGalleries(){
        return galleryService.getAllGalleries();
    }

    //get gallery by id
    @GetMapping("/{id}")
    public Gallery getGallery(@PathVariable String id){
        return galleryService.getGallery(id);
    }
    //create gallery
    @PostMapping
    public Gallery addGallery(@RequestBody Gallery gallery  ){
        System.out.println("add gallery");
        return  galleryService.addGallery(gallery);

    }
    //update gallery
    @PutMapping("/{id}")
    public void updateGallery(@PathVariable String id , @RequestBody Gallery data){
        galleryService.updateGallery(id, data);
    }
    @DeleteMapping("/{id}")
    public void deleteGallery(@PathVariable String id){
        galleryService.deleteGallery(id);

    }
}
