/**
 * @author Bo-Jui Chen
 * @version 4.0(final version)  12/05/2023
 */
package com.example.demo.user;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserMapper mapper;
    /*user*/
    public HashMap getuser(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            returnmap.put("user",mapper.getuser(map));
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }

    public HashMap getusers(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            returnmap.put("user",mapper.getusers(map));
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }

    public HashMap adduser(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.adduser(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    public HashMap updateuser(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.updateuser(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
            System.out.println(e);
        }
        return returnmap;
    }
    public HashMap deleteuser(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.deleteuser(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    /*comment*/
    public HashMap getcomment(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            returnmap.put("comment",mapper.getcomment(map));
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    public HashMap addcomment(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.addcomment(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    public HashMap updatecomment(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.updatecomment(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    public HashMap deletecomment(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.deletecomment(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    /*restaurant*/
    public HashMap getrestaurant(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            returnmap.put("restaurant",mapper.getrestaurant(map));
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    public HashMap addrestaurant(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.addrestaurant(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    public HashMap updaterestaurant(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.updaterestaurant(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
    public HashMap deleterestaurant(HashMap map){
        HashMap returnmap = new HashMap();
        try {
            mapper.deleterestaurant(map);
            returnmap.put("code", 1001);
            returnmap.put("msg", "success");
        }catch (Exception e){
            returnmap.put("code",1000);
            returnmap.put("msg","fail");
        }
        return returnmap;
    }
}
