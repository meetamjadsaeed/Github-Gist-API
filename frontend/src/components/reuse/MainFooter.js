import React from "react";

const MainFooter = () => {
  return (
    <>
      <footer>
        <div class="footer-content">
          <h3>Main Footer</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vitae felis scelerisque, gravida sapien non, cursus augue. Aenean id
            pretium turpis. Suspendisse eros nunc, sollicitudin nec.
          </p>
        </div>

        <div class="footer-bottom">
          <p>
            Copyright <span id="year"></span> <a href="#">Amjad Saeed</a>{" "}
          </p>

          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a href="">About</a>
              </li>

              <li>
                <a href="">Contact</a>
              </li>

              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
