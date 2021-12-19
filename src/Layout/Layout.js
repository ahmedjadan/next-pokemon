import styles from './Layout.module.css';
function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.title}>Pokemon Lists</h1>
      </div>

      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
