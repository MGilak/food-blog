const text = ["طراحی وب", "برنامه نویس وب", "مدرس تاپ لرن"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".type").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 200);
})();

{
  /* <header>
        <h4>
          Mahmoud Food
          <span>
            <BsFillCircleFill />
          </span>
        </h4>
        <nav>
          <ul>
            <li>
              <a href="##">Menu</a>
            </li>
            <li>
              <a href="##">Foods</a>
            </li>
            <li>
              <a href="##">Services</a>
            </li>
            <li>
              <a href="##">About</a>
            </li>
            <li>
              <a href="##">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="right">
          <img src="./images/mahmoud.jpg" alt="profile" />
          <h4>Gilak</h4>
        </div>
      </header> */
}
