const languageSelect = document.getElementById("language-select");

const translations = {
    en: "../traduction/en.json",
    fr: "../traduction/fr.json",
    es: "../traduction/es.json",
    it: "../traduction/it.json",
    
  };
  
//  const defaultlangue = "en";
  const loadLangue = (lang = "en")=>{
  
    const translateFile = translations[lang] || translations["en"];
  
    fetch(translateFile)
      .then((response) => {
        const response = fetch(`/data?lang=${lang}`);
        if (!response.ok) {
          throw new Error(`Error while charging file JSON ${translateFile}: ${response.status}`);
        }
        return response.json();
      })

      .then((data) => {
        document.getElementById("product").textContent = data.header.product;
        document.getElementById("contact").textContent = data.header.contact;
        document.getElementById("inscrire").textContent = data.header.inscrire;
        document.getElementById("title").textContent = data.index.title;
        document.getElementById("description").textContent = data.index.description;
        document.getElementById("cproduct").textContent = data.header.product;
        document.getElementById("ccontact").textContent = data.header.contact;
        document.getElementById("cinscrire").textContent = data.header.inscrire;
        document.getElementById("contact-title").textContent = data.contact.contactitle;
        document.getElementById("cname").textContent = data.contact.cname;
        document.getElementById("csurname").textContent = data.contact.csurname;
        document.getElementById("caddress").textContent = data.contact.caddress;
        document.getElementById("cmessage").textContent = data.contact.cmessage;
        document.getElementById("cbtns").textContent = data.contact.csubmit;
        document.getElementById("iproduct").textContent = data.header.product;
        document.getElementById("icontact").textContent = data.header.contact;
        document.getElementById("iinscrire").textContent = data.header.inscrire;
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
  