var css;
var cssRecover = new XMLHttpRequest();
cssRecover.onreadystatechange = () => {
  if (cssRecover.readyState == 4 && cssRecover.status == 200) {
     css = cssRecover.response;
     head.innerHTML += "<style>"+css+"</style>";
    console.log(css)
    }
};
cssRecover.open("GET", "style.css",true);
cssRecover.send();