package com.capstone.ecommerce.Ecommerce.service;

import com.capstone.ecommerce.Ecommerce.Entity.Comments;
import com.capstone.ecommerce.Ecommerce.repository.CommentsRepository;
import com.capstone.ecommerce.Ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    private CommentsRepository repository;

    // POST method
    public Comments saveComment(Comments comments) {
        return repository.save(comments);
    }

    // GET method
    public Comments getCommentById(int id) {
        return repository.findById(id).orElse(null);
    }

}
