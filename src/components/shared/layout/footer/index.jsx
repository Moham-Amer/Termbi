import './style.css';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

export function Footer() {
  const theme = useTheme();
  return (
    <footer className="footer" style={{ background: theme.palette.navigation.main, color: "#fff", padding: "40px 0 0 0" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>


          {/* Support */}
          <div className="footer-col" style={{ flex: "1 1 200px", minWidth: "200px", marginBottom: "32px" }}>
            <img src="/logo.svg" alt="Termbi Logo" height="100" width="100" />
          </div>
          {/* Account */}
          <div className="footer-col" style={{ flex: "1 1 160px", minWidth: "160px", marginBottom: "32px" }}>
            <h4 style={{ fontWeight: 600, fontSize: "22px" }}>Features</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0 0" }}>
              <li style={{ marginBottom: "12px" }}><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Get Website</a></li>
              <li style={{ marginBottom: "12px" }}><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Reservation</a></li>
              <li style={{ marginBottom: "12px" }}><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Ordering</a></li>
              <li style={{ marginBottom: "12px" }}><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Marketing</a></li>
            </ul>
          </div>
          {/* Quick Link */}
          <div className="footer-col" style={{ flex: "1 1 160px", minWidth: "160px", marginBottom: "32px" }}>
            <h4 style={{ fontWeight: 600, fontSize: "22px" }}>Quick Link</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0 0" }}>
              <li style={{ marginBottom: "12px" }}><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
              <li style={{ marginBottom: "12px" }}><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Services</a></li>
              <li style={{ marginBottom: "12px" }}><a href="#" style={{ color: "#fff", textDecoration: "none" }}>About us</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact us</a></li>
            </ul>
          </div>
          {/* Exclusive / Subscribe */}
          <div className="footer-col" style={{ flex: "1 1 200px", minWidth: "200px", maxWidth:"300px", marginBottom: "32px" }}>
            <h5 style={{ margin: "24px 0 8px 0", fontWeight: 500, fontSize: "18px" }}>Newsletters</h5>
            <p style={{ margin: "0 0 16px 0", color: "#fff" }}>Stay up to date with our latest news,
              receive exclusive deals, and more</p>
            <form style={{ display: "flex", alignItems: "center", border: "2px solid #fff", borderRadius: "6px", width:"90%" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  background: "white",
                  border: "none",
                  color: "#fff",
                  outline: "none",
                  flex: 1,
                  width:"100%",
               maxWidth:"300px",
                  fontSize: "16px",
                  padding: "8px 8px"
                }}
              />
            </form>

                  <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FF3D3D',
                                    color: '#fff',
                                  padding: '12px 40px',
                                    margin:'15px 0px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                  textTransform: 'none',
                                    width:"90%",
                                    // maxwidth:450,
                                    '&:hover': {
                                        backgroundColor: '#E63030',
                                    },
                                }}
                            >
                               Subscribe
                            </Button>
          </div>
        </div>
        {/* Copyright */}
        <div style={{
          borderTop: "1px solid #222",
          marginTop: "32px",
          padding: "18px 0 12px 0",
          textAlign: "center",
          color: "#aaa",
          fontSize: "16px"
        }}>
          <span style={{ marginRight: "8px", fontSize: "18px", verticalAlign: "middle" }}>
            <i className="far fa-copyright"></i>
          </span>
          Copyright @ 2024 | termbi
        </div>
      </div>
    </footer>
  );
}