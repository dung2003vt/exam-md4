package com.example.exam.service.impl;

import com.example.exam.model.Employee;
import com.example.exam.repository.IEmployeeRepository;
import com.example.exam.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository iEmployeeRepository;
    @Override
    public List<Employee> findAll() {
        return iEmployeeRepository.findAll();
    }

    @Override
    public Optional<Employee> findOne(Long aLong) {
        return iEmployeeRepository.findById(aLong);
    }

    @Override
    public void save(Employee employee) {
        iEmployeeRepository.save(employee);
    }

    @Override
    public void delete(Long aLong) {
        iEmployeeRepository.deleteById(aLong);
    }

    @Override
    public List<Employee> sortEmployeeAsc() {
        return iEmployeeRepository.sortEmployeeAsc();
    }

    @Override
    public List<Employee> getAllByBranch(Long id) {
        return iEmployeeRepository.getAllByBranch(id);
    }
}
