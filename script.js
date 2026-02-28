
function runCode(){
  let code = document.getElementById("code").value;
  document.getElementById("output").srcdoc = code;
}
function htmlCode(){
  document.getElementById("code").value =
`<div>
  <h1>This is Heading</h1>
  <p>This is paragraph  lorem</p>

  <button>Click Me</button>
</div>`;
}

function cssCode(){
  document.getElementById("code").value =
`<style>
h1{color:red;}
p{font-size:18px;}
button{
  background:blue;
  color:white;
}
</style>

<h1>Hello CSS</h1>
<p>CSS Styling Example</p>
<button>Button</button>`;
}

function jsCode(){
  document.getElementById("code").value =
`<button onclick="show()">Click Me</button>

<script>
function show(){
  alert("JavaScript Working!");
}
</script>`;
}

function showHTML(){ alert("HTML = Structure (div, h1, p)"); }
function showCSS(){ alert("CSS = Design & Styling"); }
function showJS(){ alert("JavaScript = Logic & Actions"); }
function showDS(){ alert("Data Structures = Data Handling"); }