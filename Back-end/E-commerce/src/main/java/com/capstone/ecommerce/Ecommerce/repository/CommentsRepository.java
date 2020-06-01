package com.capstone.ecommerce.Ecommerce.repository;

import com.capstone.ecommerce.Ecommerce.Entity.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentsRepository extends JpaRepository<Comments, Integer> {
}
