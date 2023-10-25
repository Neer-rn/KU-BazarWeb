package com.neer.KUBazarWeb.firebase;
import java.io.File;
import java.io.FileInputStream;
import java.util.Objects;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class firebaseAuth {

public static void main(String[] args) {

        ClassLoader classLoader = firebaseAuth.class.getClassLoader();
        File file = new File(Objects.requireNonNull(classLoader.getResource("serviceKey.json")).getFile());

        try {
        FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());
        FirebaseOptions options = FirebaseOptions.builder()
        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
        .build();
        FirebaseApp.initializeApp(options);
        } catch (Exception e) {
        System.out.println("An error occurred while fetching the service key.");
        System.out.println(e.getMessage()); }
        }


/* 
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;

public class firebaseAuth {

        public static void main(String[] args) {
                // Initialize Firebase app
                initializeFirebaseApp();

                // Create a new user account
                String name = "John Doe";
                String email = "johndoe@example.com";
                String password = "password123";
                createUserAccount(name, email, password);

                // Log in the user
                loginUser(email, password);
        }

        private static void initializeFirebaseApp() {
                // Initialize Firebase app
                ClassLoader classLoader = firebaseAuth.class.getClassLoader();
                File file = new File(Objects.requireNonNull(classLoader.getResource("serviceKey.json")).getFile());

                try {
                        FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());
                        FirebaseOptions options = FirebaseOptions.builder()
                                        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                                        .build();
                        FirebaseApp.initializeApp(options);
                } catch (Exception e) {
                        System.out.println("An error occurred while fetching the service key.");
                        System.out.println(e.getMessage());
                }
        }

        private static void createUserAccount(String name, String email, String password) {
                try {
                        // Create a new user account with email and password
                        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                                        .setEmail(email)
                                        .setPassword(password)
                                        .setDisplayName(name);
                        UserRecord userRecord = FirebaseAuth.getInstance().createUser(request);

                        System.out.println("Successfully created new user: " + userRecord.getUid());
                } catch (FirebaseAuthException e) {
                        System.out.println("An error occurred while creating a new user account.");
                        System.out.println(e.getMessage());
                }
        }

        private static void loginUser(String email, String password) {
                try {
                        // Log in the user with email and password
                        FirebaseAuth.getInstance().signInWithEmailAndPassword(email, password);

                        System.out.println("Successfully logged in user with email: " + email);
                } catch (FirebaseAuthException e) {
                        System.out.println("An error occurred while logging in the user.");
                        System.out.println(e.getMessage());
                }
        }
}





import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;

import javax.servlet.http.HttpServletRequest;

public class firebaseAuth {

        // ...

        public static void createUserAccount(HttpServletRequest request) {
                String name = request.getParameter("name");
                String email = request.getParameter("email");
                String password = request.getParameter("password");

                try {
                        // Create a new user account with email and password
                        UserRecord.CreateRequest createRequest = new UserRecord.CreateRequest()
                                        .setEmail(email)
                                        .setPassword(password)
                                        .setDisplayName(name);
                        UserRecord userRecord = FirebaseAuth.getInstance().createUser(createRequest);

                        System.out.println("Successfully created new user: " + userRecord.getUid());
                } catch (FirebaseAuthException e) {
                        System.out.println("An error occurred while creating a new user account.");
                        System.out.println(e.getMessage());
                }
        }
}
*/