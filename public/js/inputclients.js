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
    this.alert = ko.observable({show: true, msgAlert: "Cadastre seu cliente", type: "info"})
  
    // validação dos campos 
  this.submitForm = function(){
    
    
    if(this.userName() === ""){
     this.alert({show: true, msgAlert: "Preencha o nome do cliente", type: "danger"});
    return  
    }   
  
    if(this.userLastName() === ""){
      this.alert({show: true, msgAlert: "Preencha o sobrenome do cliente", type: "danger"});
    return
    }
  
    if(this.userEmail() === ""){
      this.alert({show: true, msgAlert: "Preencha o email do cliente", type: "danger"});
    return
    }
  
    if(this.userPhone() === ""){
      this.alert({show: true, msgAlert: "Preencha o telefone do cliente", type: "danger"});
    return
  }
  
    if(this.userCep() === ""){
      this.alert({show: true, msgAlert: "Preencha o cep do cliente", type: "danger"});
    return
    }
  
    if(this.userState() === ""){
      this.alert({show: true, msgAlert: "Preencha o estado do cliente", type: "danger"});
    return
    }
  
    if(this.userCity() === ""){
      this.alert({show: true, msgAlert: "Preencha a cidade do cliente", type: "danger"});
    return
    }
  
    if(this.userNeighborhood() === ""){
      this.alert({show: true, msgAlert: "Preencha o bairro do cliente", type: "danger"});
    return
    }
  
    if(this.userAddress() === ""){
      this.alert({show: true, msgAlert: "Preencha o endereço do cliente", type: "danger"});
    }
  
    if(this.userNumber() === ""){
      this.alert({show: true, msgAlert: "Preencha o número da residência do cliente", type: "danger"});
    return
    }
  
    if(this.userComplement() === ""){
      this.alert({show: true, msgAlert: "Preencha o complemento do cliente", type: "danger"});
    return
    }
  
    if(this.userPassword() === ""){
      this.alert({show: true, msgAlert: "Preencha a senha de primeiro acesso do cliente", type: "danger"});
    return
    }
  
  else {
    this.alert({show: true, msgAlert: "Cliente cadastrado com sucesso", type: "success"});;
      } 
 }
 }
      

       // Activates knockout.js
  ko.applyBindings(new formViewModel());