for(var t=document.getElementsByClassName("population"),e=0,n=0;n<t.length;n++)e+=parseInt(t[n].textContent.replace(/,/g,""),10);var o=e.toLocaleString("en-US"),a=(e/t.length).toLocaleString("en-US");document.querySelector(".total-population").textContent=o,document.querySelector(".average-population").textContent=a;
//# sourceMappingURL=index.31cd4fb6.js.map
