/**
 * @author Bo-Jui Chen
 * @version 4.0(final version)  12/05/2023
 */
package com.example.demo.user;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface UserMapper {
    /*user*/
    HashMap getuser(HashMap map);
    List getusers(HashMap map);
    void adduser(HashMap map);
    void updateuser(HashMap map);
    void deleteuser(HashMap map);
    /*comment*/
    List getcomment(HashMap map);
    void addcomment(HashMap map);
    void updatecomment(HashMap map);
    void deletecomment(HashMap map);
    /*restaurant*/
    List getrestaurant(HashMap map);
    void addrestaurant(HashMap map);
    void updaterestaurant(HashMap map);
    void deleterestaurant(HashMap map);
}
