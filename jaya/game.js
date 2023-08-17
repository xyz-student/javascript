
let heading = document.querySelector("h1");
function abc() {
    let win = 20;
    if (prompt() == win) {
        // document.write("true")
        document.body.style.background = "green";
        heading.innerHTML="true";
    } else {
        // document.write("false")
        document.body.style.background = "red";
        heading.innerHTML="false";

    }
}
abc()