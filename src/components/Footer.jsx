function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
        color: "#333",
        fontSize: "14px",
      }}
    >
      Made with care by <strong>Kavuri Vandhan Murali</strong> &copy;{" "}
      {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
