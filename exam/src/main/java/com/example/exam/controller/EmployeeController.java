package com.example.exam.controller;

import com.example.exam.model.Employee;
import com.example.exam.service.impl.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @GetMapping
    public ResponseEntity<List<Employee>> findAll(){
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Employee>> findOne(@PathVariable Long id) {
        return new ResponseEntity<>(employeeService.findOne(id), HttpStatus.OK);
    }
    @GetMapping("/sort")
    public ResponseEntity<List<Employee>> sortEmployeeAsc(){
        return new ResponseEntity<>(employeeService.sortEmployeeAsc(),HttpStatus.ACCEPTED);
    }
    @GetMapping("/getBranch/{branch_id}")
    public ResponseEntity<List<Employee>> getAllByBranch(@PathVariable Long branch_id){
        return new ResponseEntity<>(employeeService.getAllByBranch(branch_id),HttpStatus.ACCEPTED);
    }
    @PostMapping
    public ResponseEntity<?> creatCity(@RequestBody Employee employee){
        employeeService.save(employee);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Employee employee,
                                    @PathVariable Long id) {
        Optional<Employee> employeeOptional = employeeService.findOne(id);
        if (employeeOptional.isPresent()) {
            employee.setId(id);
            employeeService.save(employee);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Employee> employeeOptional = employeeService.findOne(id);
        if (employeeOptional.isPresent()) {
            employeeService.delete(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
