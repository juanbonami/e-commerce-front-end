package com.capstone.ecommerce.Ecommerce.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "COMMENTS_TABLE")
public class Comments {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String comment;
}
