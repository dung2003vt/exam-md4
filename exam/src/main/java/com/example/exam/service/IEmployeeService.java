package com.example.exam.service;

import com.example.exam.model.Employee;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.GeneratedValue;
import java.util.List;

public interface IEmployeeService extends IGenerateService<Employee,Long> {
    List<Employee> sortEmployeeAsc();
    List<Employee> getAllByBranch(Long id);
}
