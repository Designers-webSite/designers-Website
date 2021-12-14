package com.example.demo.Designer;

import com.example.demo.Utility.Utility;
import com.example.demo.Utility.UtilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DesignerService {
    private final DesignerRepository designerRepository;
    private final UtilityRepository utilityRepository;

    @Autowired
    public DesignerService(DesignerRepository designerRepository, UtilityRepository utilityRepository) {
        this.designerRepository = designerRepository;
        this.utilityRepository = utilityRepository;
    }

    public List<Designer> getAllDesigner() {
        return designerRepository.findAll();

    }

    public Designer getDesigner(String id) {
        Long designer_id = Long.parseLong(id);
        return designerRepository.findById(designer_id).orElse(null);
    }

    public Designer addDesigner(Designer designer) {
        return designerRepository.save(designer);
    }

    public void updateDesigner(String id, Designer data) {
        Long designer_id = Long.parseLong(id);
        Designer designer = designerRepository.findById(designer_id).orElse(null);
        if (designer != null) {
            designer.setId(data.getId());
            designer.setFullName(data.getFullName());
            designer.setUserName(data.getUserName());
            designer.setUserName(data.getUserName());
            designer.setPassword(data.getPassword());
            designer.setAge(data.getAge());
            designer.setAvailabilty(data.isAvailabilty());
//            designer.setDesignType(data.getDesignType());
            designerRepository.save(designer);
        }
    }

    public void deleteDesigner(String id) {
        Long designer_id = Long.parseLong(id);
        designerRepository.deleteById(designer_id);

    }

    public List<Utility> getAllUtilityByDesignerId(String id) {
        Long designer_id = Long.parseLong(id);
        List<Utility> utility = utilityRepository.findAll();
        List<Utility> utilityForDesigner = new ArrayList<>();
        for (Utility s : utility) {
            if (s.getDesigner() != null) {
                if (s.getDesigner().getId() == designer_id) {
                    utilityForDesigner.add(s);
                }


            }

        }
        return  utilityForDesigner;
    }


    public Designer getByUserName(String userName) {
      Designer designer=  designerRepository.getByUserName(userName);
      designer.getUserName();
      return designer;
    }
}

