package com.example.exam.controller;

import com.example.exam.model.Branch;
import com.example.exam.model.Employee;
import com.example.exam.service.impl.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/branch")
public class BranchController {
    @Autowired
    private BranchService branchService;
    @GetMapping
    public ResponseEntity<List<Branch>> findAll(){
        return new ResponseEntity<>(branchService.findAll(), HttpStatus.OK);
    }
}
