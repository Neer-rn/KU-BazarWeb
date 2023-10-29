package com.neer.KUBazarWeb.user;

import javax.annotation.Nonnull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.auth.UserRecord.CreateRequest;

@Service
public class userService {
    
    @Autowired
    private FirebaseAuth firebaseAuth;

    public user signUp(String username,String email, String password) throws FirebaseAuthException {
        CreateRequest request = new UserRecord.CreateRequest()
            .setDisplayName(username)
            .setEmail(email)
            .setPassword(password);
        UserRecord userRecord = firebaseAuth.createUser(request);

        user user = new user(username,email);
        user.setUsername(username); // You can set the username to be the same as the email
        user.setEmail(email);
        // You may hash the password and set it here
        // Save the user to your database
        // Return the user entity

        @Nonnull
        String firebaseUid = Objects.requireNonNull(userRecord.getUid(), "firebaseUid is null");
        boolean emailVerified = userRecord.isEmailVerified(); 

        user.setFirebaseUid(firebaseUid);
        user.setEmailVerified(emailVerified);

        // Create user data for Firestore
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection("users").document(firebaseUid);

        // Create a user object to save in Firestore
        Map<String, Object> userDoc = new HashMap<>();
        userDoc.put("username", username);
        userDoc.put("email", email);
        userDoc.put("emailVerified", emailVerified);

        // Add the user data to Firestore
        docRef.set(userDoc); 

        return user;
    }
}
 

