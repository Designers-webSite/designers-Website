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
    // get utility by id

    @GetMapping("row/{id}")
    public Utility getUtility(@PathVariable String id){
        System.out.println(id);
        return utilityService.getUtilities(id);
    }
    @PostMapping("add")
    public Utility addUtility(@RequestBody Utility s){
//       Gallery g=GalleryRepository.findById(s.getGallery().getID()).orElse(null);
//        s.setDesigner(d);
//        s.setGallery(g);
        System.out.println(s);
        System.out.println(s.getUser());
        System.out.println(s.getGallery());
        return  utilityService.addUtility(s);
    }


    // search utility by title
    @GetMapping("search/{title}")
    public Utility getByTitle(@PathVariable String title){
        return utilityService.getByTitle(title);
    }

    @GetMapping("search/{designType}")
    public Utility getUtilityByDesignType(@PathVariable String designType){
        return utilityService.getUtilityByDesignType(designType);
    }
    @DeleteMapping("/{id}")
    public  void deleteUtility(@PathVariable String id ){
        utilityService.deleteUtility(id);
    }
    @PutMapping("update/{id}")
    public void updateUtility(@PathVariable String id,@RequestBody Utility data){
        utilityService.updateUtility(id,data);
    }

}
