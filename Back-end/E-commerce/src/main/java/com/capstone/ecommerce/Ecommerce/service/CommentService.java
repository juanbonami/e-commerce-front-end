package com.capstone.ecommerce.Ecommerce.service;

import com.capstone.ecommerce.Ecommerce.Entity.Comments;
import com.capstone.ecommerce.Ecommerce.repository.CommentsRepository;
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

    // DELETE method
    public String deleteComment(int id) {
        repository.deleteById(id);
        return "Comment deleted" + id;
    }

    // PUT method
    public Comments updateComment(Comments comments) {
        Comments existingComment = repository.findById(comments.getId()).orElse(null);
        existingComment.setName(comments.getName());
        existingComment.setComment(comments.getComment());
        return repository.save(existingComment);
    }

}
