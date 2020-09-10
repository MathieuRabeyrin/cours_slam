document.addEventListener("DOMContentLoaded", ()=> {
  const btn = document.querySelector("h1");

  let washingMachine = {
    brand: "Miel",
    price: 199,
    consumption: 245,
    id: 1,
    model: "./assets/washingMachine.jpeg",
      printConsole() {
        console.log(this.brand, this.price, this.consumption, this.id, this.model);
      },
      printDom() {
        const main = document.querySelector("main");

        main.innerHTML += `<ul>
                            <li>Marque: ${this.brand}</li>
                            <li>Prix: ${this.price}</li>
                            <li>Consommation: ${this.consumption} KW</li>
                            <li>Matricule: ${this.id}</li>
                          </ul>
                          <img src="${this.model}" alt="Machine a laver">`;
      }
  }

  btn.addEventListener("click", ()=> {
    const body = document.querySelector("body");
    const headerTitle = document.querySelector("h1");
    const ul = document.querySelector("ul");
    const main = document.querySelector("main");
    const h2 = document.querySelector("h2");

    body.classList.toggle("night-mode-body");
    headerTitle.classList.toggle("night-mode-fontColor");
    ul.classList.toggle("night-mode-fontColor");
    main.classList.toggle("night-mode-main");
    h2.classList.toggle("night-mode-h2");

    for (let i = 0; i < ul.children.length; i++)
      if (i % 2 === 0)
        ul.children[i].classList.toggle("night-mode-li");
  })

  washingMachine.printConsole();
  washingMachine.printDom();
})