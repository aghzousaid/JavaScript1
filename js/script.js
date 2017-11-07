
var nom="";
var prenom ="";
var nm_tel="";
var email = "";
var Contacts= [];
var List = "";
var list ="";
var ContactModifier=""
var IdContactAModifie="";

	
var Contact = {
    		// Initialise un contact
		    init: function (nom, prenom, nm_tel, email) {
		        this.nom = nom;
		        this.prenom = prenom;
		        this.nm_tel = nm_tel;
		        this.email = email;
		    },
		    // Renvoie la description du contact
		    decrire: function () {
		        var description =  this.nom + " " + this.prenom ;
		        return description;
			}
	};

function Lister(){
	if (Contacts == "") {
		alert('Aucun contact disponible');
	}

	else {
		list="<table><tr><td>Nom</td><td>Prenom</td><td>Numéro Téléphone</td><td>Email</td></tr>";
		Contacts.forEach(function (contact) {
		list = list + "<tr><td>"+contact.nom +"</td><td>"+ contact.prenom+"</td><td>"
		+contact.nm_tel +"</td><td>"+contact.email+"</td></tr>";
		
	    });

   		 document.getElementById("list").innerHTML = list +"</table>";
   		 list="";
	}

}

function Ajouter(){

	 nom = document.getElementById("nom").value;
	 prenom = document.getElementById("prenom").value;
	 nm_tel = document.getElementById("nm_tel").value;
	 email = document.getElementById("email").value;
	/* alert(nom + prenom + nm_tel + email);*/



	var Obcontact = Object.create(Contact);
	Obcontact.init(nom, prenom, nm_tel, email);

	Contacts.push(Obcontact);

	Contacts.forEach(function (contact) {
    console.log(contact.decrire());
    });

}


function Afficher(){

	var i = -1;
	if(Contacts.length == 0){
		alert("Aucun contact disponible");
	}
	else{
		Contacts.forEach(function (contact) {
		i++;
		List = List +'<input id="'+i+'" type="checkbox">'+contact.decrire()+'</br>';
	    });

	    document.getElementById("div").innerHTML = List;
	    List="";
	}
}


function Supprimer(){


	var j;
	for (j = 0; j < Contacts.length; j++) {
		if(document.getElementById(j).checked == true){
			Contacts.splice(j,1);
			 alert("le contact sélectioné  a été bien supprimé, Appuyer sur Afficher_Contact pour voir les contacts disponibles");
		}
		else{
			 alert("Aucun Contact a été sélectioné");
		}
	}
}

function Afficher1(){

	var i = -1;
	if(Contacts.length == 0){
		alert("Aucun contact disponible");
	}
	else{
		Contacts.forEach(function (contact) {
		i++;
		List = List +'<input id="'+i+'" type="checkbox">'+contact.decrire()+'</br>';
	    });

	    document.getElementById("div1").innerHTML = List;
	    List="";
	}
}

function Contenue(){
 
	for (k = 0; k < Contacts.length; k++) {
		if(document.getElementById(k).checked == true){
		IdContactAModifie = k;
		ContactModifier=	'<label>Nom</label><br><input type="text" id="nom1" required >'+Contacts[k].nom+'</input><br><br>';
		ContactModifier= ContactModifier+'<label>Prénom</label><br><input type="text" id="prenom1" required />'+Contacts[k].prenom+'<br><br>';
		ContactModifier= ContactModifier+'<label>Numéro télépnone</label><br><input type="Numéro" id="nm_tel1" required />'+Contacts[k].nm_tel+'<br><br>';
		ContactModifier= ContactModifier+'<label>Email</label><br><input type="email" id="email1" required  />'+Contacts[k].email+'</input><br><br>';
		ContactModifier= ContactModifier+'<input type="button" value="Modifier" onclick="Modifier();"/><br><br>'
		document.getElementById("div1").innerHTML = ContactModifier;

		}
		else{
			 alert("Aucun Contact a été sélectioné");
		}
	}
}

function Modifier(){

		Contacts[IdContactAModifie].nom = document.getElementById("nom1").value;
		Contacts[IdContactAModifie].prenom = document.getElementById("prenom1").value;
		Contacts[IdContactAModifie].nm_tel = document.getElementById("nm_tel1").value;
		Contacts[IdContactAModifie].email = document.getElementById("email1").value;

		alert("Le contact a été bien modifié")

}












 
