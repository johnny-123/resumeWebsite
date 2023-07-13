let chooseFont = document.querySelector("#choose-font");
let styles = document.createElement("style");
chooseFont.addEventListener("change", () => {
  // console.log(chooseFont.value);
  if (chooseFont.value == "清松手寫體1") {
    console.log("ez");
    styles.innerHTML = `@font-face {
      font-family: "myFont";
      src: url("./resource/清松手寫體1.ttf");
    }
    *{
      font-family: "myFont",DFkai-sb, sans-serif;;
    }`;
  } else if (chooseFont.value === "標楷體") {
    styles.innerHTML = `
    *{
      font-family: DFkai-sb, sans-serif;;
    }`;
  }
  document.getElementsByTagName("head")[0].appendChild(styles);
});
