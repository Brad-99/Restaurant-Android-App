/**
 * @author Jiachen Shi
 * @version 4.0(final version)  12/05/2023
 */
package com.example.demo;

import com.example.demo.user.Usercontroller;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashMap;


@SpringBootTest
@RunWith(SpringRunner.class)
class DemoApplicationTests {
    @Autowired
    private Usercontroller usercontroller;


    @Test
    public void testGetuser() {
        HashMap map = new HashMap();
        map.put("email", "123");
        map.put("password", "123");
        HashMap result = usercontroller.getuser(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testGetusers() {
        HashMap map = new HashMap();
        HashMap result = usercontroller.getusers(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testAdduser() {
        HashMap map = new HashMap();
        map.put("email", "test");
        map.put("password", "test");
        map.put("name", "test");
        map.put("avatar", "test");
        HashMap result = usercontroller.adduser(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testUpdateuser() {
        HashMap map = new HashMap();
        map.put("id", "1");
        map.put("email", "test");
        map.put("password", "test");
        map.put("name", "test");
        map.put("avatar", "test");
        HashMap result = usercontroller.updateuser(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testDeleteuser() {
        HashMap map = new HashMap();
        map.put("id", "2");
        HashMap result = usercontroller.updateuser(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testGetcomment() {
        HashMap map = new HashMap();
        HashMap result = usercontroller.getcomment(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testAddcomment() {
        HashMap map = new HashMap();
        map.put("estaurant_id", "1");
        map.put("user_id", "1");
        map.put("context", "test");
        map.put("create_time", "2023.05.11");
        HashMap result = usercontroller.addcomment(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testUpdatecomment() {
        HashMap map = new HashMap();
        map.put("id", "1");
        map.put("estaurant_id", "1");
        map.put("user_id", "1");
        map.put("context", "test");
        map.put("create_time", "2023.05.11");
        HashMap result = usercontroller.updatecomment(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testDeletecomment() {
        HashMap map = new HashMap();
        map.put("id", "1");
        HashMap result = usercontroller.deletecomment(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testGetrestaurant() {
        HashMap map = new HashMap();
        HashMap result = usercontroller.getrestaurant(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testAddrestaurant() {
        HashMap map = new HashMap();
        map.put("cuisine", "Japanese");
        map.put("name", "Fujiyama Teppanyaki Japanese Restaurant");
        map.put("images", "https://lh5.googleusercontent.com/p/AF1QipNqLxpJ8xaaxqtQY-JD0cH4LBJT3mg__IRFBRhT=w408-h272-k-no");
        map.put("open_time", "Tues-Thur 17:00-22:00,Fri-Sat 12:00-22:30,Sun 12:00-21:00");
        map.put("average_price", "£10-£20");
        map.put("phone", "01919038582");
        map.put("lng", "54.9703");
        map.put("lat", "-1.61961");
        map.put("tags", "Peanuts, eggs, milk, fish, shellfish, soya");
        map.put("address", "35-39 Bath Ln, Newcastle upon Tyne, NE4 5SP");
        HashMap result = usercontroller.addrestaurant(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testUpdaterestaurant() {
        HashMap map = new HashMap();
        map.put("id", "1");
        map.put("cuisine", "Japanese");
        map.put("name", "Fujiyama Teppanyaki Japanese Restaurant");
        map.put("images", "https://lh5.googleusercontent.com/p/AF1QipNqLxpJ8xaaxqtQY-JD0cH4LBJT3mg__IRFBRhT=w408-h272-k-no");
        map.put("open_time", "Tues-Thur 17:00-22:00,Fri-Sat 12:00-22:30,Sun 12:00-21:00");
        map.put("average_price", "£10-£20");
        map.put("phone", "01919038582");
        map.put("lng", "54.9703");
        map.put("lat", "-1.61961");
        map.put("tags", "Peanuts, eggs, milk, fish, shellfish, soya");
        map.put("address", "35-39 Bath Ln, Newcastle upon Tyne, NE4 5SP");
        HashMap result = usercontroller.addrestaurant(map);
        System.out.println("succeed：" + result.toString());
    }

    @Test
    public void testDeleterestaurant() {
        HashMap map = new HashMap();
        map.put("id", "1");
        HashMap result = usercontroller.addrestaurant(map);
        System.out.println("succeed：" + result.toString());
    }
}
