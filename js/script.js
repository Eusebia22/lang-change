const translations = {
    en: "traduction/en.json",
    fr: "traduction/fr.json",
    es: "traduction/es.json",
    it: "traduction/it.json",
    
  };
  
//  const defaultlangue = "en";
  const languageSelect = document.getElementById("language-select");
  
  const loadLangue = (lang = "en")=>{
    const translatefile = translations[lang] || translations["en"];
  
    fetch(translatefile)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error while charging file JSON: ${response.statusText}`);
        }
        return response.json();
      })

      .then((data) => {
        document.getElementById("nav-iproduct").textContent = data.header.product;
        document.getElementById("nav-icontact").textContent = data.header.contact;
        document.getElementById("nav-iinscrire").textContent = data.header.inscrire;
        document.getElementById("product-title").textContent = data.index.title;
        document.getElementById("product-description").textContent = data.index.description;
        document.getElementById("nav-cproduct").textContent = data.header.product;
        document.getElementById("nav-ccontact").textContent = data.header.contact;
        document.getElementById("nav-cinscrire").textContent = data.header.inscrire;
        document.getElementById("contact-title").textContent = data.contact.contactitle;
        document.getElementById("cname").textContent = data.contact.cname;
        document.getElementById("csurname").textContent = data.contact.csurname;
        document.getElementById("caddress").textContent = data.contact.caddress;
        document.getElementById("cmessage").textContent = data.contact.cmessage;
        document.getElementById("cbtns").textContent = data.contact.csubmit;
        document.getElementById("nav-isproduct").textContent = data.header.product;
        document.getElementById("nav-iscontact").textContent = data.header.contact;
        document.getElementById("nav-isinscrire").textContent = data.header.inscrire;
        document.getElementById("registertitle").textContent = data.inscrire.registertitle;
        document.getElementById("name").textContent = data.inscrire.name;
        document.getElementById("surname").textContent = data.inscrire.surname;
        document.getElementById("address").textContent = data.inscrire.address;
        document.getElementById("phone").textContent = data.inscrire.phone;
        document.getElementById("email").textContent = data.inscrire.email;
        document.getElementById("rbtns").textContent = data.inscrire.submit;
      })
      .catch((error) =>{
        console.error("Error:",error);
        alert("Error in translation");
      });
  }

    // Browser Language Detector Function

    const detectBrowserLanguage=()=>{
    const browserLang =navigator.language || navigator.userLanguage;
    const langCode = browserLang.split("_")[0];
    const supportedLang = ["en","fr","es","it"];
    return supportedLang.includes(langCode) ? `${langCode}` : "en";
  }


  // Identifing the Language and charging
  window.addEventListener("DOMContentLoaded",()=>{
    const initialLang = detectBrowserLanguage();
    loadLangue(initialLang);

  //Update the values of menu when langue is detected
    if(languageSelect){
      languageSelect.value = initialLang;
    }
  });
    
    languageSelect.addEventListener("change",()=>{
      const selLang = languageSelect.value;
      loadLangue(selLang);
    });
  