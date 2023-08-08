package com.example.exam.repository;

import com.example.exam.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IEmployeeRepository extends JpaRepository<Employee,Long> {
    @Query(value = "select * from Employee order by age asc ",nativeQuery = true)
    List<Employee> sortEmployeeAsc();
    @Query(value = "select * from Employee where branch_id = :branch_id ",nativeQuery = true)
    List<Employee> getAllByBranch(@Param("branch_id") Long branch_id);
}
