package com.example.demo.Utility;

import com.example.demo.Gallery.Gallery;
import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import com.example.demo.Gallery.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="utility")
@CrossOrigin("*")
public class UtilityController {
    private final UtilityService utilityService;

    @Autowired
    public UtilityController(UtilityService utilityService) {
        this.utilityService = utilityService;
    }
    @GetMapping("all")
    public List<Utility> getAllUtilities(){
        return  utilityService.getAllUtilities();
    }

    // get  all utility for user

    @GetMapping("all/{id}")
    public List<Utility> getAllUtilitiesForUser(@PathVariable String id){
        return  utilityService.getAllUtilitiesForUser(id);
    }

    //get utility by id
    @GetMapping("row/{id}")
    public Utility getUtility(@PathVariable String id){
        System.out.println(id);
        return utilityService.getUtilities(id);
    }
    // add utility
    @PostMapping("add")
    public Utility addUtility(@RequestBody Utility s){

        return  utilityService.addUtility(s);
    }


    // search utility by title
    @GetMapping("search/{title}")
    public List<Utility> getAllByTitle(@PathVariable String title){
        return utilityService.getByTitle(title);
    }
   // get utility by design type
    @GetMapping("col/{designType}")
    public List<Utility> getUtilityByDesignType(@PathVariable String designType){
        return utilityService.getUtilityByDesignType(designType);
    }
    // delete utility
    @DeleteMapping("/{id}")
    public  void deleteUtility(@PathVariable String id ){
        utilityService.deleteUtility(id);
    }

    // update info for utility
    @PutMapping("update/{id}")
    public void updateUtility(@PathVariable String id,@RequestBody Utility data){
        System.out.println("id"+id);
        System.out.println("data"+data);
        utilityService.updateUtility(id,data);
    }

}
