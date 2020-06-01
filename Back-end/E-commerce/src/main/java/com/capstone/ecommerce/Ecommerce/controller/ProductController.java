package com.capstone.ecommerce.Ecommerce.controller;

import com.capstone.ecommerce.Ecommerce.Entity.Comments;
import com.capstone.ecommerce.Ecommerce.Entity.Product;
import com.capstone.ecommerce.Ecommerce.service.CommentService;
import com.capstone.ecommerce.Ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.stream.events.Comment;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService service;
    @Autowired
    private CommentService commentService;

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @PostMapping("/addProducts")
    public List<Product> addProducts(@RequestBody List<Product> products) {
        return service.saveProducts(products);
    }

    @GetMapping("/products")
    public List<Product> findAllProducts() {
        return service.getProducts();
    }

    @GetMapping("/productById/{id}")
    public Product findProductById(@PathVariable int id) {
        return service.getProductById(id);
    }

    @GetMapping("/product/{name}")
    public Product findProductByName(@PathVariable String name) {
        return service.getProductByName(name);
    }

    @PutMapping("/update")
    public Product updateProduct(@RequestBody Product product) {
        return service.updateProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable int id) {
        return service.deleteProduct(id);
    }

// *******************************************************************************************************

    @PostMapping("/addComment")
    public Comments addComment(@RequestBody Comments comment) {
        return commentService.saveComment(comment);
    }

    @GetMapping("/commentById/{id}")
    public Comments findCommentById(@PathVariable int id) {
        return commentService.getCommentById(id);
    }

    @PutMapping("/update")
    public Comments updateProduct(@RequestBody Comments comments) {
        return commentService.updateComment(comments);
    }

}
