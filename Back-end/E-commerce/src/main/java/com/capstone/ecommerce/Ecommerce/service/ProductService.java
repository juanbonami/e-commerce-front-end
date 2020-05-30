package com.capstone.ecommerce.Ecommerce.service;

import com.capstone.ecommerce.Ecommerce.Entity.Product;
import com.capstone.ecommerce.Ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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

    //GET returns all Products in db
    public List<Product> getProducts() {
        return repository.findAll();
    }

    // and one will return one by id
    public Product getProductById(int id) {
        return repository.findById(id).orElse(null);
    }

    // and one will return product by name
    public Product getProductByName(String name) {
        return repository.findByName(name);
    }

    // DELETE will delete record from db and return a string
    public String deleteProduct(int id) {
        repository.deleteById(id);
        return "product removed!" + id;
    }

    public Product updateProduct(Product product) {
        Product existingProduct=repository.findById(product.getId()).orElse(null);
        existingProduct.setName(product.getName());
        existingProduct.setQuantity(product.getQuantity());
        existingProduct.setPrice(product.getPrice());
        return repository.save(existingProduct);
    }
}
