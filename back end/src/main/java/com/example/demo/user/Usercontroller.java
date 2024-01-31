/**
 * @author Bo-Jui Chen
 * @version 4.0(final version)  12/05/2023
 */
package com.example.demo.user;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.*;

@EnableScheduling
@RestController
@ResponseBody
@CrossOrigin
public class Usercontroller {
    @Autowired
    private UserService service;

    /*user*/
    @PostMapping("/getuser")
    public HashMap getuser(@RequestBody HashMap map) {
        return service.getuser(map);
    }

    @PostMapping("/getusers")
    public HashMap getusers(@RequestBody HashMap map) {
        return service.getusers(map);
    }

    @PostMapping("/adduser")
    public HashMap adduser(@RequestBody HashMap map) {
        return service.adduser(map);
    }

    @PostMapping("/updateuser")
    public HashMap updateuser(@RequestBody HashMap map) {
        return service.updateuser(map);
    }

    @PostMapping("/deleteuser")
    public HashMap deleteuser(@RequestBody HashMap map) {
        return service.deleteuser(map);
    }

    /*comment*/
    @PostMapping("/getcomment")
    public HashMap getcomment(@RequestBody HashMap map) {
        return service.getcomment(map);
    }

    @PostMapping("/addcomment")
    public HashMap addcomment(@RequestBody HashMap map) {
        return service.addcomment(map);
    }

    @PostMapping("/updatecomment")
    public HashMap updatecomment(@RequestBody HashMap map) {
        return service.updatecomment(map);
    }

    @PostMapping("/deletecomment")
    public HashMap deletecomment(@RequestBody HashMap map) {
        return service.deletecomment(map);
    }

    /*restaurant*/
    @PostMapping("/getrestaurant")
    public HashMap getrestaurant(@RequestBody HashMap map) {
        return service.getrestaurant(map);
    }

    @PostMapping("/addrestaurant")
    public HashMap addrestaurant(@RequestBody HashMap map) {
        return service.addrestaurant(map);
    }

    @PostMapping("/updaterestaurant")
    public HashMap updaterestaurant(@RequestBody HashMap map) {
        return service.updaterestaurant(map);
    }

    @PostMapping("/deleterestaurant")
    public HashMap deleterestaurant(@RequestBody HashMap map) {
        return service.deleterestaurant(map);
    }

}