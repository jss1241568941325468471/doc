---
eleventyComputed:
  title: Azure AD / Entra ID user provider
  description: The Azure AD / Entra ID user provider allows {{ en.DVLS }} to store the Azure AD / Entra ID application information to be used for account discovery or to achieve password rotation.
---
The ***Azure AD / Entra ID user*** provider allows {{ en.DVLS }} to store the Azure AD / Entra ID application information to be used for account discovery or to achieve password rotation.

{% snippet, "badgeHelp" %}
See [Create an Azure AD PAM provider](/server/kb/how-to-articles/create-azure-ad-pam-provider/) for more information on its configuration.
{% endsnippet %}

![Azure AD / Entra ID user provider](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8095.png)

## General
| Option      | Description                  |
|-------------|------------------------------|
| Name        | Display name of the provider |
| Description | Description of the provider  |

## Password settings
| Option                           | Description                                                                  |
|----------------------------------|------------------------------------------------------------------------------|
| Password template used on generation | Password template used to generate the password during the reset password operation |

## Server
| Option    | Description                          |
|-----------|--------------------------------------|
| Tenant ID | ID of the Azure tenant               |
| Client ID | ID of the Azure application          |
| Secret key | Secret key of the Azure application |

## Actions

| Option               | Description                                                           |
|----------------------|-----------------------------------------------------------------------|
| Add PAM {{ en.VLT }} | If enabled, creates a PAM {{ en.VLT }} with the name of the provider. |
| Add Scan Configuration | If enabled, opens the ***Scan configuration*** dialog.              |