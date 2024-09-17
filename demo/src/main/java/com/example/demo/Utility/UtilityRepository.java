package com.example.demo.Utility;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UtilityRepository extends JpaRepository <Utility,Long> {
   List<Utility>  findAllByTitleContainingIgnoreCase (String title);
   List<Utility> findAllByDesignType (String designType);



}
