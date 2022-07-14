package com.example.demo.models;
 
import javax.persistence.*;
 
@Entity
@Table(name = "usuario")
public class UsuarioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private Integer dni;
    private String nombre;
    private String apellido;
    private String email;
    private String localidad;
    private Integer precio;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Integer getDni(){
        return dni;
    }
    public void setDni(Integer dni){
        this.dni = dni;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido(){
        return apellido;
    }
    public void setApellido(String apellido){
        this.apellido = apellido;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getLocalidad(){
        return localidad;        
    }
    public void setLocalidad(String localidad){
        this.localidad = localidad;
    }
    public Integer getPrecio(){
        return precio;
    }
    public void setPrecio(Integer precio){
        this.precio = precio;
    }
}