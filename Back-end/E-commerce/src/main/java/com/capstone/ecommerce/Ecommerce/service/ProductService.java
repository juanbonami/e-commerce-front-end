package com.capstone.ecommerce.Ecommerce.service;

import com.capstone.ecommerce.Ecommerce.Entity.Product;
import com.capstone.ecommerce.Ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductService {

    @Autowired
    private ProductRepository repository;

    // POST method will take one Product object
    public Product saveProduct(Product product) {
        return repository.save(product);
    }

    // POST will take list of Product objects
    public List<Product> saveProducts(List<Product> products) {
        return repository.saveAll(products);
    }
}
