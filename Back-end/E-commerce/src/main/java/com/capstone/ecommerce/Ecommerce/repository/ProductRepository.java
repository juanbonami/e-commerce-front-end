package com.capstone.ecommerce.Ecommerce.repository;

import com.capstone.ecommerce.Ecommerce.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    Product findByName(String name);
}
