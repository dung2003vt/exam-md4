package com.example.exam.service.impl;

import com.example.exam.model.Branch;
import com.example.exam.repository.IBranchRepository;
import com.example.exam.service.IBranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BranchService implements IBranchService {
    @Autowired
    private IBranchRepository iBranchRepository;
    @Override
    public List<Branch> findAll() {
        return iBranchRepository.findAll();
    }

    @Override
    public Optional<Branch> findOne(Long aLong) {
        return Optional.empty();
    }

    @Override
    public void save(Branch branch) {

    }

    @Override
    public void delete(Long aLong) {

    }
}
