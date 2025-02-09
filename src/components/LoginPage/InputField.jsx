/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./LoginPage.module.css";

const InputField = ({ label, type, isPassword }) => (
  <div
    className={`${styles.inputField} ${isPassword ? styles.passwordField : ""}`}
  >
    <label htmlFor={`${type}Input`} className={styles.visually}>
      {label}
    </label>
    <input
      type={type}
      id={`${type}Input`}
      className={`${styles.input} ${isPassword ? styles.passwordInput : ""}`}
      placeholder={label}
      aria-label={label}
    />
  </div>
);

export default InputField;
