package com.example.demo.User;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@DataJpaTest
class UserRepositoryTest {

    private final UserRepository userRepository;

@Autowired
    public UserRepositoryTest(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Test
    void itShouldFindUser() {
        User user = new User(1L,"ala ahmed", "ala","123","t@gmail.com");

        User savedUser =userRepository.save(user);

        User result = userRepository.findById(savedUser.getId()).orElse(null);

        assertNotNull(result);
    }

    @Test
    void itShouldSaveUser() {

        User user = new User(1L,"ala ahmed", "ala","123","t@gmail.com");
        User result = userRepository.save(user);

        assertTrue(result.getId() != null);
    }

    @Test
    void itShouldFindUserByUserName() {
        String userName = "ala";
        User user = new User(1L,"ala ahmed","ala", "123","t@gmail.com");
        userRepository.save(user);

        User result = userRepository.findByUserName(userName);

        assertEquals(userName, result.getUserName());

    }

@Test
void itShouldUpdateUser() {
    User user = new User(1L,"ala ahmed","ala", "123","t@gmail.com");
    userRepository.save(user);
    user.setEmail("b@b.com");
    userRepository.save(user);
    assertEquals(user.getEmail(), "b@b.com");
}

    @Test
    void itShouldDeleteUser() {
        User user = new User(1L,"ala ahmed","ala", "123","t@gmail.com");
        userRepository.save(user);
        userRepository.delete(user);
        User result = userRepository.findById(user.getId()).orElse(null);
        assertNull(result);
    }
 }