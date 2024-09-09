---
_schema: default
eleventyComputed:
  title: Create and apply a new configuration
  description:
  status:
  keywords:
---
The following steps explain how to set up the **Password propagation** feature. This can be done either by [Creating a template](#creating-a-new-configuration), or [using a Devolutions template](/pam/server/propagation-scripts/import-propagation-script-template/).

{% snippet, "badgeInfo" %}
This method covers all PAM account providers.
{% endsnippet %}

### Creating a new configuration

1. Go to ***Administration*** – ***Modules*** – ***Privileged access*** – ***Propagation (Preview)***. ![Propagation (preview)](https://cdnweb.devolutions.net/docs/DVLS4054_2024_2.png "Propagation &#40;preview&#41;")
2. Click on ***Add***. ![Add button](https://cdnweb.devolutions.net/docs/DVLS4049_2024_2.png "Add button")
3. Select the desired template and click on ***Select***. ![Select button](https://cdnweb.devolutions.net/docs/DVLS4055_2024_2.png "Select button")
4. In the ***General*** tab, name this configuration.
5. In the ***Propagation properties*** tab, enter the information for the remote machine.
6. In the ***Property mapping*** tab, click on ***Configure a PAM entry*** to select a privileged account type. ![Configure a PAM entry](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png "Configure a PAM entry")
7. Click on ***Continue***.
8. Select the fields of the account (or provider) to associate with the variables and click ***Save***.
9. Click ***Save*** to save this new configuration and close the window. ![Save button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png "Save button")

### Applying the configuration

1. Go to the ***Privileged access*** tab, select an account type previously configured with ***Propagation***, and click on the ***Edit button***. ![Edit button](https://cdnweb.devolutions.net/docs/DVLS4056_2024_2.png "Edit button")
2. Go to the ***Propagation*** tab and click on the ***\+*** button. ![+ button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png "+ button")
3. Select the configuration to link to that account, and click ***Confirm***.

![Confirm button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png "Confirm button")

{% snippet, "badgeInfo" %}
It is possible to select multiple configurations.
{% endsnippet %}

5\. Click ***OK*** to save the changes and close the window.

![OK button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png "OK button")

{% snippet, "badgeInfo" %}
To test if the link is successful, click on ***More*** and then ***Reset password***. If working correctly, the newly created file will appear on the remote machine. If not, it is recommended to check the logs of the account.
{% endsnippet %}

## Active Directory specific propagation

{% snippet, "badgeNotice" %}
The WinRM must be properly configured as described in [WinRM and Trusted Hosts List](/server/kb/how-to-articles/winrm-trustedhostslist/) article.
{% endsnippet %} {% snippet, "badgeCaution" %}This ***Password propagation*** feature is only available for Domain accounts.{% endsnippet %}

The following section describes the properties of the Active Directory ***Password propagation*** feature within the Privileged Access Management solution. ![Password propagation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png "Password propagation")

### Properties

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Computers</strong></p></td><td><p><em><strong>Inherited</strong></em>: Inherits the computer's list from the parent's folder.<br /><br /><em><strong>Custom</strong></em>: Set a custom list of computers.<br /><br /><em><strong>Custom + Inherited</strong></em>: Inherits the computer's list from the parent's folder and set a custom list of computers.</p></td></tr><tr><td><p><strong>Computer name</strong></p></td><td><p>Name of each computer on which the password propagation will take place.</p></td></tr><tr><td><p><strong>Browse domain containers</strong></p></td><td><p>Browse the domain to select the computers.</p></td></tr></tbody></table>

&nbsp;