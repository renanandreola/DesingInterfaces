function formViewModel() {
    this.email = ko.observable("");
  
    this.senha = ko.observable("");
  
    // alert de inicio de formulário
    this.alert = ko.observable({show: true, msgAlert: "Preencha os campos", type: "info"})
  
    // validação dos campos 
  this.submitForm = function(){
    
    if(this.email() === ""){
     this.alert({show: true, msgAlert: "Preencha seu email", type: "danger"});
    return  
    }   
  
    if(this.senha() === ""){
      this.alert({show: true, msgAlert: "Preencha sua senha", type: "danger"});
    return
    }

  else {
    this.alert({show: true, msgAlert: "Sucesso", type: "success"});;
    window.open("/initadm")
      } 
    }
 }
      
       // Activates knockout.js
  ko.applyBindings(new formViewModel());