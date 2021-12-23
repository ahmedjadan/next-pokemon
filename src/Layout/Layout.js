import styles from './Layout.module.css';
function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.title}>Pokemon App</h1>
      </div>

      <main>{children}</main>
      <footer>
        <div className="footer">
          <p> &copy; Ahmed Ja&#39;dan</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
