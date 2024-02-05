let night = document.getElementById("night");
 let day = document.getElementById("day");
 let header = document.getElementById("header");
  let nav = document.querySelector("nav")
  let main = document.querySelector("main")
  let label = document.querySelector("label")
   let aside = document.querySelector("aside")
   let footer = document.querySelector("footer")
    day.style.display = "none";

 function nightIcon() {
     day.style.display = 'block';
     night.style.display = 'none';
      header.style.backgroundColor ='darkBlue';
      nav.style.backgroundColor ='darkBlue';
       main.style.backgroundColor ='darkBlue';
       label.style.backgroundColor= 'transparent'
     aside.style.backgroundColor ='darkBlue';
       footer.style.backgroundColor ='darkBlue';
     document.body.style.backgroundImage = "url('../login/images/darkMode.avif')";
     document.body.style.color = "white"
    sessionStorage.setItem("mode", "night");
    
};

function dayIcon() {
    day.style.display = 'none'
    night.style.display = 'block'
     header.style.backgroundColor ='white';
      nav.style.backgroundColor ='white';
       main.style.backgroundColor ='white';
     aside.style.backgroundColor ='white';
      footer.style.backgroundColor ='white';
    document.body.style.backgroundImage = "url('../login/images/blue-healthcare.jpg')";
    document.body.style.color = "black"  
    sessionStorage.setItem("mode", "day");  
  
 };  
  
 const storedMode = sessionStorage.getItem("mode");  
 if (storedMode === "night") {  
    nightIcon();  
} else {  
    dayIcon();
 }

 night.addEventListener('click', nightIcon);
 day.addEventListener('click', dayIcon);