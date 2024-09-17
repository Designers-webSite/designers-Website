package com.example.demo.Utility;



import com.example.demo.Gallery.Gallery;
import com.example.demo.Gallery.GalleryRepository;
import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilityService {
    private final UtilityRepository utilityRepository;
    private final GalleryRepository galleryRepository;
    private  final UserRepository userRepository;

    @Autowired
    public UtilityService(UtilityRepository utilityRepository, GalleryRepository galleryRepository, UserRepository userRepository) {
        this.utilityRepository = utilityRepository;
        this.galleryRepository = galleryRepository;
        this.userRepository = userRepository;
    }



    public List<Utility> getAllUtilities() {
        System.out.println();
        return utilityRepository.findAll();

    }

    public Utility getUtilities(String id) {
        Long utility_id=Long.parseLong(id);
//       Utility  utility= utilityRepository.findById( utility_id).orElse(null);
    return utilityRepository.findById( utility_id).orElse(null);

    }

    public Utility addUtility(Utility s) {
        s.setDesignType(s.getDesignType().toLowerCase());
        utilityRepository.save(s);
        List <Gallery> g_list = s.getGallery();
        for (Gallery i :g_list ) {
            i.setUtility(s);
            galleryRepository.save(i);
        }
        s.setGallery(g_list);

    return utilityRepository.save(s);

    }


    public List<Utility> getByTitle(String title) {
       return utilityRepository.findAllByTitleContainingIgnoreCase(title);

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

    public List<Utility> getUtilityByDesignType(String designType) {
        return utilityRepository.findAllByDesignType(designType.toLowerCase());
    }

    public List<Utility> getAllUtilitiesForUser(String id) {
        User u = userRepository.findById(Long.parseLong(id)).orElse(null);
        return u.getUtilities();
    }



}


