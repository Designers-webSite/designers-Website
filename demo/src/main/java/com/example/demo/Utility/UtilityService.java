package com.example.demo.Utility;



import com.example.demo.Gallery.Gallery;
import com.example.demo.Gallery.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilityService {
    private final UtilityRepository utilityRepository;
    private final GalleryRepository galleryRepository;

    @Autowired
    public UtilityService(UtilityRepository utilityRepository, GalleryRepository galleryRepository) {
        this.utilityRepository = utilityRepository;
        this.galleryRepository = galleryRepository;
    }



    public List<Utility> getAllUtilities() {
        return utilityRepository.findAll();

    }

    public Utility getUtilities(String id) {
        Long utility_id=Long.parseLong(id);
        return utilityRepository.findById( utility_id).orElse(null);

    }

    public Utility addUtility(Utility s) {
        List <Gallery> g_list = s.getGallery();
        for (Gallery i :g_list ) {
            galleryRepository.save(i);
        }
        return  utilityRepository.save(s);

    }
//    public Designer getByUserName(String userName) {
//        Designer designer=  designerRepository.getByUserName(userName);
//        designer.getUserName();
//        return designer;
//    }

    public Utility getByTitle(String title) {
        Utility utility=utilityRepository.findByTitle(title);
        utility.getTitle();
        return utility;
    }

    public void deleteUtility(String id) {
        Long utility_id=Long.parseLong(id);
        utilityRepository.deleteById(utility_id);

    }

    public void updateUtility(String id,Utility data) {
        Long utility_id=Long.parseLong(id);
        Utility utility = utilityRepository.findById(utility_id).orElse(null);
        if (utility != null) {
            utility.setTitle(data.getTitle());
            utility.setDescription(data.getDescription());
            utility.setDuration(data.getDuration());
            utility.setInstructions(data.getInstructions());

            utilityRepository.save(utility);
        }
    }

    public Utility getUtilityByDesignType(String designType) {
        Utility utility=utilityRepository.findByDesignType(designType);
        utility.getDesignType().equalsIgnoreCase(designType);
        return utility;
    }
}


