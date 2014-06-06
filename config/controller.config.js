/* CRUD declaration */
var _create = false;
var _read = false;
var _update = false;
var _delete = false;
/* Group declaration */
var admin_user = false;
var coordinator_user = false;
var collaborator_user = false;
var contributor_user = false;
var editor_user = false;
var consumer_user = false;

var containerGroups = people.getContainerGroups(person);
	for (var i=0; i<containerGroups.length; i++) {
		var group = containerGroups[i].getQnamePath();
		var p = group.split(":");
		var nomegruppo = p[p.length-1];
		if (nomegruppo=="GROUP_create") {
			_create = true;
		}
		if (nomegruppo=="GROUP_read") {
			_read = true;
		}
		if (nomegruppo=="GROUP_update") {
			_update = true;
		}
		if (nomegruppo=="GROUP_delete") {
			_delete = true;
		}
		if (nomegruppo=="GROUP_Alfresco_Plus_Administrators") {
			admin_user = true;
		}
		if (nomegruppo=="GROUP_Alfresco_Plus_Coordinators") {
			coordinator_user = true;
		}
		if (nomegruppo=="GROUP_Alfresco_Plus_Collaborators") {
			collaborator_user = true;
		}
		if (nomegruppo=="GROUP_Alfresco_Plus_Contributor") {
			contributor_user = true;
		}
		if (nomegruppo=="GROUP_Alfresco_Plus_Editors") {
			editor_user = true;
		}
		if (nomegruppo=="GROUP_Alfresco_Administrators") {
			consumer_user = true;
		}
	}

	var referenceType = "path";

if (consumer_user == true || demo_user == true) {
	
	//Configuration file
	var reference = ["workspace", "SpacesStore", "Company Home","Data Dictionary","Web Scripts Extensions","org","alfresco-plus","config","demo_uno_configuration.xml"];
	
	//Upload space
	var space_to_use = companyhome.childByNamePath("/demouno/upload");

}else{
	
	//Configuration file
	var reference = ["workspace", "SpacesStore", "Company Home","Data Dictionary","Web Scripts Extensions","org","alfresco-plus","config","demo_due_configuration.xml"];
	
	//Upload space
	var space_to_use = companyhome.childByNamePath("/demodue/upload");
}

	var nodeconf = search.findNode(referenceType, reference);