package com.capstone.ecommerce.Ecommerce.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Comments {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String comment;
}
