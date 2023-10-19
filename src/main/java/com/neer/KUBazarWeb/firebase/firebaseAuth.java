package com.neer.KUBazarWeb.firebase;
import java.io.File;
import java.io.FileInputStream;
import java.util.Objects;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import org.springframework.boot.SpringApplication;
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


}