package me.app.nongki.repository;

import me.app.nongki.dto.UserDTO;
import me.app.nongki.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, String> {
  default User findbyEmail(String name) {
    return findAll().stream()
      .filter(user -> user.getEmail().equals(name))
      .findFirst()
      .orElse(null);
  }

  @Query("SELECT new me.app.nongki.dto.UserDTO(u.id, u.name, u.nomor_telepon) FROM User u")
  List<UserDTO> getAll();

  @Query("SELECT new me.app.nongki.dto.UserDTO(u.id, u.name, u.nomor_telepon) FROM User u WHERE u.id = ?1")
  UserDTO getUserById(String id);
}