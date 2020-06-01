package com.capstone.ecommerce.Ecommerce.service;

import com.capstone.ecommerce.Ecommerce.Entity.Comments;
import com.capstone.ecommerce.Ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    private ProductRepository repositoryTwo;

    // POST method
    public Comments saveComment(Comments comments) {
        return repositoryTwo.save(comments)
    }

}
