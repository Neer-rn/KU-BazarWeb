package com.neer.KUBazarWeb.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class user {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String username;
    private String email;

    public user(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email2) {
        this.email = email2;
    }

    public void setFirebaseUid(String firebaseUid) {
    }

    public void setEmailVerified(boolean emailVerified) {
    }

}

/*// Create user data for Firestore
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection("users").document(firebaseUid);

        // Create a user object to save in Firestore
        Map<String, Object> userDoc = new HashMap<>();
        userDoc.put("username", username);
        userDoc.put("email", email);
        userDoc.put("emailVerified", emailVerified);

        // Add the user data to Firestore
        docRef.set(userDoc); */