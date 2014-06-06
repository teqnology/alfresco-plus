<!DOCTYPE html>
<html>
	<head>
		<title>Alfresco+ | Dashboard</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=9" />
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    	<link  rel="shortcut icon" type="image/x-icon" href="/alfresco-plus/images/${favicon}" />

	</head>

	<body>

	<#-- SWITCH PAGE for user -->

	<#if consumer_user == true>
	     <#include "index.consumer.ftl">
	<#elseif editor_user == true>
		<#include "index.editor.ftl">
	<#elseif contributor_user == true>
		<#include "index.contributor.ftl">
	<#elseif collaborator_user == true>
		<#include "index.collaborator.ftl">
	<#elseif coordinator_user == true>
		<#include "index.coordinator.ftl">
	<#elseif admin_user == true>
		<#include "index.admin.ftl">
	</#if>

	<#-- END SWITCH PAGE -->

	</body>
</html>