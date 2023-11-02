package com.neer.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecureResourceController {

    @GetMapping("/api/secure-resource")
    public String getSecureResource() {
        // Access the authenticated user's details
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userId = authentication.getName();

        // Implement your logic to provide the secure resource
        return "This is a secure resource for user " + userId;
    }
}
