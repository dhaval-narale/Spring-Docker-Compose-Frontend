package com.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.student.entity.Sample;
import com.student.repository.SampleRepository;


@RestController
public class SampleController {
	
	@Autowired
    private SampleRepository repo;


	@PostMapping("/samples")
    public Sample addSample(@RequestBody Sample sample) {
        return repo.save(sample);
    }

    @GetMapping("/allsamples")
    public List<Sample> getAllSamples() {
        return repo.findAll();
    }
}
