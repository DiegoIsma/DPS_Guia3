"use client"
import React, { useState } from "react";
import Todo from "./Todo";
import styles from "../app/page.module.css";

const Form = () => {
    const [todo, setTodo] = useState({
        productName: "",
        brand: "",
        quantity: "",
        price: ""
    });

    const [todos, setTodos] = useState([
        { productName: "Producto 1", brand: "Marca 1", quantity: "1", price: "10" },
        { productName: "Producto 2", brand: "Marca 2", quantity: "2", price: "20" },
        { productName: "Producto 3", brand: "Marca 3", quantity: "3", price: "30" }
    ]);

    const handleChange = e => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = e => {
        e.preventDefault();
        if (Object.values(todo).some(value => value.trim() === "")) {
            alert("Todos los campos son obligatorios");
            return;
        }
        setTodos([...todos, todo]);
        setTodo({
            productName: "",
            brand: "",
            quantity: "",
            price: ""
        });
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre del producto</label><br />
                <input className={styles.form_input} type="text" name="productName" value={todo.productName} onChange={handleChange} /><br />
                <label>Marca</label><br />
                <input className={styles.form_input} type="text" name="brand" value={todo.brand} onChange={handleChange} /><br />
                <label>Cantidad</label><br />
                <input className={styles.form_input} type="number" name="quantity" value={todo.quantity} onChange={handleChange} /><br />
                <label>Precio</label><br />
                <input className={styles.form_input} type="number" name="price" value={todo.price} onChange={handleChange} /><br />
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nombre del producto</th>
                        <th>Marca</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.productName}</td>
                            <td>{todo.brand}</td>
                            <td>{todo.quantity}</td>
                            <td>${todo.price}</td>
                            <td>
                                <button className={styles.delete_button} onClick={() => deleteTodo(index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Form;
