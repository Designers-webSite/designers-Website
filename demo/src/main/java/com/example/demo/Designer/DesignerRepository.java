package com.example.demo.Designer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DesignerRepository extends JpaRepository <Designer,Long>{
    Designer getByUserName (String userName );
}
