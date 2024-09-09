---
_schema: default
eleventyComputed:
  title: Password propagation
  description: >-
    Password propagation allows privileged accounts passwords reset to be
    propagated to remote servers services.
---
***Password propagation*** allows privileged accounts passwords reset to be propagated to remote servers services. This topic covers [Propagation by script](#propagation-by-script) and [Active Directory specific propagation](#active-directory-specific-propagation).

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=225' %}

## Propagation by script

The following sections describe the properties of the ***Propagation*** by script feature within the Privileged Access Management solution. The [Steps](#steps-with-template) section explains how to set up this feature by using a Devolutions template, but it is also possible to [Create a template](#create-a-powershell-template).

{% snippet, "badgeInfo" %}
This method covers all PAM account providers.
{% endsnippet %}

### Steps (with template)

1. Download one of [Devolutions' template file](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts) from GitHub.
2. Log in to {{ en.DVLS }} with an administrator account.
3. Go to ***Administration*** – ***Modules*** – ***Privileged Access*** – ***Propagation (Preview)***. ![Propagation (preview)](https://cdnweb.devolutions.net/docs/DVLS4054_2024_2.png "Propagation &#40;preview&#41;")
4. Click on ***Script Templates***. ![Script templates icon](https://cdnweb.devolutions.net/docs/DVLS4042_2024_2.png "Script templates icon")
5. Click on ***Import***.

   ![Import icon](https://cdnweb.devolutions.net/docs/DVLS4043_2024_2.png "Import icon")

6. Select the previously downloaded template .json file and click ***Import***. ![Import button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0099.png "Import button")
7. Click ***Save***. ![Save button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0100.png "Save button")
8. Go back to the ***Propagation (Preview)*** page.
9. Click on ***Add***. ![Add button](https://cdnweb.devolutions.net/docs/DVLS4049_2024_2.png "Add button")
10. Select the desired template and click on ***Select***. ![Select button](https://cdnweb.devolutions.net/docs/DVLS4055_2024_2.png "Select button")
11. In the ***General*** tab, name this configuration.
12. In the ***Propagation properties*** tab, enter the information for the remote machine.
13. In the ***Property mapping*** tab, click on ***Configure a PAM entry*** to select a privileged account type. ![Configure a PAM entry](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png "Configure a PAM entry")
14. Click on ***Continue***.
15. Select the fields of the account (or provider) to associate with the variables and click ***Save***.
16. Click ***Save*** to save this new configuration and close the window. ![Save button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png "Save button")
17. Go to the ***Privileged access*** tab and select an account type previously configured with ***Propagation***.
18. Click on ***Edit***.
19. Go to the ***Propagation*** tab and click on the "***\+***" button. ![+ button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png "+ button")
20. Select the configuration to link to that account, and click ***Confirm***.

    &nbsp;

    ![Confirm button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png "Confirm button")

    &nbsp;

    {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                                                                                                                            It is possible to select multiple configurations.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   {% endsnippet %}

21. Click ***OK*** to save the changes and close the window.

    ![OK button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png "OK button")

    <br>{% snippet, "badgeInfo" %}To test if the link is successful, click on ***More*** and then ***Reset password***. If working correctly, the newly created file will appear on the remote machine. If not, it is recommended to check the logs of the account.{% endsnippet %}

## Active Directory specific propagation

{% snippet, "badgeNotice" %}
The WinRM must be properly configured as described in [WinRM and Trusted Hosts List](/server/kb/how-to-articles/winrm-trustedhostslist/) article.
{% endsnippet %} {% snippet, "badgeCaution" %}This ***Password propagation*** feature is only available for Domain accounts.{% endsnippet %}

The following section describes the properties of the Active Directory ***Password propagation*** feature within the Privileged Access Management solution. ![Password propagation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png "Password propagation")

### Properties

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Computers</strong></p></td><td><p><em><strong>Inherited</strong></em>: Inherits the computer's list from the parent's folder.<br /><br /><em><strong>Custom</strong></em>: Set a custom list of computers.<br /><br /><em><strong>Custom + Inherited</strong></em>: Inherits the computer's list from the parent's folder and set a custom list of computers.</p></td></tr><tr><td><p><strong>Computer name</strong></p></td><td><p>Name of each computer on which the password propagation will take place.</p></td></tr><tr><td><p><strong>Browse domain containers</strong></p></td><td><p>Browse the domain to select the computers.</p></td></tr></tbody></table>