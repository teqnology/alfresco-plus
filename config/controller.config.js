/* CRUD definition */
var _create = false;
var _read = false;
var _update = false;
var _delete = false;
/* Group definition */
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
	var groupName = p[p.length-1];
	// Permission groups
	if (groupName=="GROUP_CREATE") {
		canCreate = "true";
	}
	if (groupName=="GROUP_READ") {
		canRead = "true";
	}
	if (groupName=="GROUP_UPDATE") {
		canupdate = "true";
	}
	if (groupName=="GROUP_DELETE") {
		canDelete = "true";
	}
	// User groups
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

// Expose the specific dashboard depending on user group and permission group
var referenceType = "path";

if (consumer_user == true) {
	//Configuration file
	var reference = ["workspace", "SpacesStore", "Company Home","Data Dictionary","Web Scripts Extensions","org","alfresco-plus","config","config-consumer.xml"];
	//Upload user space
	var space_to_use = companyhome.childByNamePath("/Upload");
	if (space_to_use == null && companyhome.hasPermission("CreateChildren")){
	   space_to_use =  companyhome.createFolder("Upload");
	}	
}else if(editor_user == true){
	//Configuration file
	var reference = ["workspace", "SpacesStore", "Company Home","Data Dictionary","Web Scripts Extensions","org","alfresco-plus","config","config-editor.xml"];
	//Upload user space
	var space_to_use = companyhome.childByNamePath("/Upload");
	if (space_to_use == null && companyhome.hasPermission("CreateChildren")){
	   space_to_use =  companyhome.createFolder("Upload");
	}
}else if(contributor_user == true){
	//Configuration file
	var reference = ["workspace", "SpacesStore", "Company Home","Data Dictionary","Web Scripts Extensions","org","alfresco-plus","config","config-contributor.xml"];
	//Upload user space
	var space_to_use = companyhome.childByNamePath("/Upload");
	if (space_to_use == null && companyhome.hasPermission("CreateChildren")){
	   space_to_use =  companyhome.createFolder("Upload");
	}
}else if(collaborator_user == true){
	//Configuration file
	var reference = ["workspace", "SpacesStore", "Company Home","Data Dictionary","Web Scripts Extensions","org","alfresco-plus","config","config-collaborator.xml"];
	//Upload user space
	var space_to_use = companyhome.childByNamePath("/Upload");
	if (space_to_use == null && companyhome.hasPermission("CreateChildren")){
	   space_to_use =  companyhome.createFolder("Upload");
	}
}else if(coordinator_user == true){
	//Configuration file
	var reference = ["workspace", "SpacesStore", "Company Home","Data Dictionary","Web Scripts Extensions","org","alfresco-plus","config","config-coordinator.xml"];
	//Upload user space
	var space_to_use = companyhome.childByNamePath("/Upload");
	if (space_to_use == null && companyhome.hasPermission("CreateChildren")){
	   space_to_use =  companyhome.createFolder("Upload");
	}
}else if(admin_user == true){
	//Configuration file
	var reference = ["workspace", "SpacesStore", "Company Home","Data Dictionary","Web Scripts Extensions","org","alfresco-plus","config","config-admin.xml"];
	//Upload user space
	var space_to_use = companyhome.childByNamePath("/Upload");
	if (space_to_use == null && companyhome.hasPermission("CreateChildren")){
	   space_to_use =  companyhome.createFolder("Upload");
	}
}
var nodeconf = search.findNode(referenceType, reference);

/* Custom jQuery code goes here */
$(document).ready(function() {
});
