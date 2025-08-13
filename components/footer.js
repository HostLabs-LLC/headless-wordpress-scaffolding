import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Powered by{" "}
      <a href="https://hostlabs.pro" target="_blank" rel="noopener noreferrer">
        HostLabs | a StevensLabs co
      </a>
      <span>
        &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
