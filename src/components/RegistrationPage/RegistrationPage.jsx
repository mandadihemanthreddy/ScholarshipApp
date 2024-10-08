/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./RegistrationPage.module.css";
import NavigationItem from "./NavigationItem";
import AuthButton from "./AuthButton";
import InputField from "./InputField";
import { Link } from "react-router-dom";

const navigationItems = [
  "About",
  "Scholarships",
  "Students",
  "Applications",
  "Contact",
];

function RegistrationPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.headerSpacer} />
        <nav className={styles.navigationList}>
          {navigationItems.map((item, index) => (
            <NavigationItem key={index} label={item} />
          ))}
        </nav>
        <div className={styles.authContainer}>
          <AuthButton label="Sign in" />
          <AuthButton label="Register" isRegister />
        </div>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <section className={styles.imageColumn}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ad73446ee4219c5ab878fea5b0a8d1f549d4f75d7a3f4a05a4b559cf0abdc8?placeholderIfAbsent=true&apiKey=ee31ec960f4c431fa5d7b4a441b2ce47"
              className={styles.registrationImage}
              alt="Registration illustration"
            />
          </section>
          <section className={styles.formColumn}>
            <form className={styles.registrationForm}>
              <h2 className={styles.formTitle}>Register</h2>
              <InputField label="Email" type="email" id="email" />
              <InputField label="Username" type="text" id="username" />
              <InputField label="Password" type="password" id="password" />
              <a href='/login'><button type='button' className={styles.submitButton}>
                Register
              </button>
              </a>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RegistrationPage;
