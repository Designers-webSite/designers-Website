package com.example.demo.Designer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignerRepository extends JpaRepository <Designer,Long>{
    Designer getByUserName (String userName );
    List<Designer> findAllByDesignType (String designType);



}
