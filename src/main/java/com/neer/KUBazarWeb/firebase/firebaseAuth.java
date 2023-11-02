package com.neer.KUBazarWeb.firebase;
import java.io.File;
import java.io.FileInputStream;
import java.util.Objects;

import java.io.IOException;

import com.google.api.client.util.Value;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@SpringBootApplication
@Service
@Configuration
public class firebaseAuth {
    @Value("${firebase.config.path}")
    private static String firebaseConfigPath;
public static void main(String[] args) {

        ClassLoader classLoader = firebaseAuth.class.getClassLoader();
        File file = new File(Objects.requireNonNull(classLoader.getResource(firebaseConfigPath)).getFile());

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


        @Bean
        public void initialize() {
                try {
                    FileInputStream serviceAccount = new FileInputStream(firebaseConfigPath);
        
                    FirebaseOptions options = FirebaseOptions.builder()
                            .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                            .setDatabaseUrl("https://ku-bazar-default-rtdb.asia-southeast1.firebasedatabase.app/")
                            .build();
        
                    if (FirebaseApp.getApps().isEmpty()) {
                        FirebaseApp.initializeApp(options);
                    }
                } catch (IOException e) {
                        /*logger.error("Error initializing Firebase: " + e.getMessage());*/
                }
            }

}


