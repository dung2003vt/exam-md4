package com.example.exam.repository;

import com.example.exam.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBranchRepository extends JpaRepository<Branch,Long> {
}
