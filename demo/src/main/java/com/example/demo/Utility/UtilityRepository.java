package com.example.demo.Utility;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilityRepository extends JpaRepository <Utility,Long> {
    Utility findByTitle (String title);
    Utility findByDesignType (String designType);



}
