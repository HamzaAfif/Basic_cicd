package com.groupe4.tp1Demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class HelloControllerTest {

    @Autowired
    HelloController controller;

    @Test
    void testHello() {
        assertEquals("Hello Hamza", controller.hello("Hamza"));
    }
}
