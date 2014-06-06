<import resource="/Company Home/Data Dictionary/Web Scripts Extensions/org/alfresco/alfresco-plus/config/controller.config.js">

model.contenuto= nodeconf.content;
var content = nodeconf.content;
var xml = new XML(content);

/*model.title=xml.title.toString();
model.logo=xml.logo.toString(); 
model.icona=xml.icona.toString();
model.ricerca=xml.ricerca.toString();*/

model.base_users=base_users;
model.manager_users=manager_users;
model.supervisor_users=supervisor_users;
model.admin_users=admin_users;

var index = 0;
var host = parent.document.location.host;