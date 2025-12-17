package com.student.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.student.entity.Sample;

@Repository
public interface SampleRepository extends JpaRepository<Sample, Integer> {}
