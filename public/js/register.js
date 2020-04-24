 function formViewModel() {
    this.userName = ko.observable("");
  
    this.userLastName = ko.observable("");
  
    this.userEmail = ko.observable("");
  
    this.userPhone = ko.observable("");
  
    this.userCep = ko.observable("");
  
    this.userState = ko.observableArray(['selecione', 
                                         'Acre', 'Alagoas','Amapá','Amazonas','Bahia','Ceará',
                                         'Distrito Federal','Espírito Santo','Goiás','Maranhão',
                                         'Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará',
                                         'Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro',
                                         'Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima',
                                         'Santa Catarina','São Paulo','Sergipe','Tocantins','Estrangeiro']);
  
    this.userCity = ko.observable("");
  
    this.userNeighborhood = ko.observable("");
  
    this.userAddress = ko.observable("");
  
    this.userNumber = ko.observable("");
  
    this.userComplement = ko.observable("");
  
    this.userPassword = ko.observable("");
  
    this.userConfirmPassword = ko.observable("");
  
    // alert de inicio de formulário
    this.alert = ko.observable({show: true, msgAlert: "Preencha seus dados para se cadastrar", type: "info"})
  
    // validação dos campos 
  this.submitForm = function(){
    
    
    if(this.userName() === ""){
     this.alert({show: true, msgAlert: "Preencha seu nome", type: "danger"});
    return  
    }   
  
    if(this.userLastName() === ""){
      this.alert({show: true, msgAlert: "Preencha seu sobrenome", type: "danger"});
    return
    }
  
    if(this.userEmail() === ""){
      this.alert({show: true, msgAlert: "Preencha seu email", type: "danger"});
    return
    }
  
    if(this.userPhone() === ""){
      this.alert({show: true, msgAlert: "Preencha seu telefone", type: "danger"});
    return
  }
  
    if(this.userCep() === ""){
      this.alert({show: true, msgAlert: "Preencha seu cep", type: "danger"});
    return
    }
  
    if(this.userState() === ""){
      this.alert({show: true, msgAlert: "Preencha seu estado", type: "danger"});
    return
    }
  
    if(this.userCity() === ""){
      this.alert({show: true, msgAlert: "Preencha sua cidade", type: "danger"});
    return
    }
  
    if(this.userNeighborhood() === ""){
      this.alert({show: true, msgAlert: "Preencha seu bairro", type: "danger"});
    return
    }
  
    if(this.userAddress() === ""){
      this.alert({show: true, msgAlert: "Preencha seu endereço", type: "danger"});
    }
  
    if(this.userNumber() === ""){
      this.alert({show: true, msgAlert: "Preencha o número de sua residência", type: "danger"});
    return
    }
  
    if(this.userComplement() === ""){
      this.alert({show: true, msgAlert: "Preencha o complemento", type: "danger"});
    return
    }
  
    if(this.userPassword() === ""){
      this.alert({show: true, msgAlert: "Preencha sua senha", type: "danger"});
    return
    }
  
    if(this.userConfirmPassword() === ""){
      this.alert({show: true, msgAlert: "Confirme sua senha", type: "danger"});
    return
    }
      
  else {
    this.alert({show: true, msgAlert: "Cadastro concluído com sucesso", type: "info"});;
    window.open("/carrinho")
      } 
 }
 }
      

       // Activates knockout.js
  ko.applyBindings(new formViewModel());
      
