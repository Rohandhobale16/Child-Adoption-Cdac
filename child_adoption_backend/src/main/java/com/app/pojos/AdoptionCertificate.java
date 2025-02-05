package com.app.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class AdoptionCertificate extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne  // Relationship with Child
    @JoinColumn(name = "child_id", nullable = false) // Foreign key column
    private Child child;

    @ManyToOne  // Relationship with Parent
    @JoinColumn(name = "parent_id", nullable = false) // Foreign key column
    private Parent parent;

    @Lob
    @Column(nullable = false)
    private byte[] certificateFile;

    private String fileName;

    // ... other fields if needed
}