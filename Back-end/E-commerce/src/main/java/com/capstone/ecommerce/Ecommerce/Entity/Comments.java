package com.capstone.ecommerce.Ecommerce.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

// second model
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "COMMENTS_TABLE")
public class Comments {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String comment;
}
