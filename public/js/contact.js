function formViewModel() {
    this.name = ko.observable("");
  
    this.email = ko.observable("");

    this.msg = ko.observable("");
  
    // alert de inicio de formulário
    this.alert = ko.observable({show: true, msgAlert: "Preencha os campos", type: "info"})
  
    // validação dos campos 
  this.submitForm = function(){
    
    if(this.name() === ""){
     this.alert({show: true, msgAlert: "Preencha seu nome", type: "danger"});
    return  
    }   
  
    if(this.email() === ""){
      this.alert({show: true, msgAlert: "Preencha sua email", type: "danger"});
    return
    }

    if(this.msg() === ""){
        this.alert({show: true, msgAlert: "Preencha sua mensagem", type: "danger"});
      return
      }

  else {
    this.alert({show: true, msgAlert: "Sucesso", type: "info"});;
      } 
    }
 }
      
       // Activates knockout.js
  ko.applyBindings(new formViewModel());

  // LIMPA CAMPOS DO FORMULÁRIO
function clear (){
    $("#name").val("");
    $("#message").val("");
    $("#email").val("");
    }