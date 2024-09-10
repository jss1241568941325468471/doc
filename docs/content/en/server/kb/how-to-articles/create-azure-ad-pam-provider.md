---
_schema: default
eleventyComputed:
  title: Create an Azure AD PAM provider
  description: >-
    The following guide provides steps to create an Azure AD user PAM provider
    for {{ en.DVLS }}.
---
The following guide provides steps to create an Azure AD user PAM provider for {{ en.DVLS }}.

#### In the Azure Portal

1. In a browser page, open the [Microsoft Azure AD Portal](https://azure.microsoft.com) and sign in to your account.
2. Select ***Microsoft Entra ID*** in the ***Azure Services*** section. If you do not see it, click on ***More services*** to make other services appear. ![Microsoft Entra ID](https://cdnweb.devolutions.net/docs/DVLS6085_2024_2.png)
3. In ***App registrations***, click on ***New registration***. ![App registrations – New registration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2133.png)
4. Set the ***Name*** of your application. ![Register an application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2291.png)
5. Click ***Register*** at the bottom when done. ![Set the Name and click Register](https://cdnweb.devolutions.net/docs/DVLS6087_2024_2.png)

#### In {{ en.DVLS }}

6. Connect to your {{ en.DVLS }}.
7. Go to ***Administration – Privileged Access – Providers***, then click on ***Add***. ![Administration – Privileged Access – Providers – Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2134.png)
8. Select ***Azure AD User*** as the new PAM provider, then click ***Continue***. ![Add New PAM Provider – Azure AD User](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8065.png)
9. In the ***Provider*** window, enter a ***Name*** (mandatory) and a ***Description*** (optional) for your new Azure AD User PAM Provider. If need be, select a ***Password template*** in the drop-down list. ![Name, Description, and Password template](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2135.png)

#### In the Azure Portal

10. In the ***Overview*** of your new app registration, copy the ***Directory (tenant) ID***. ![Copy the Directory (tenant) ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2136.png)

#### In {{ en.DVLS }}

11. Paste the ID copied in the previous step in the ***Tenant ID*** field. ![Tenant ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2138.png)

#### In the Azure Portal

12. Still in the ***Overview*** of your new app registration, copy the ***Application (client) ID***. ![Copy the Application (client) ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2137.png)

#### In {{ en.DVLS }}

13. Paste the ID copied in the previous step in the ***Client ID*** field. ![Client ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2139.png)

#### In the Azure Portal

14. In ***Certificates & secrets***, click on ***Client secrets***, then on ***New client secret***. ![New client secret](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8064.png)
15. In the ***Add a client secret*** window, enter a ***Description*** and select an expiration date for this client secret, as per your best internal security practices. ![Add a client secret](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2140.png)
16. Click ***Add***.
17. Copy the ***Value*** of this new client secret by clicking on the ***Copy to clipboard*** icon next to it. ![Copy the Client Secret Value](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8067.png)

#### In {{ en.DVLS }}

18. Paste the value copied in the previous step in the ***Secret key*** field. ![Secret key](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8068.png)
19. Test the connection to see if it works, then click ***Save***. The ***Scan Configuration*** window will appear: keep it open as it will be filled in a later step.

#### In the Azure Portal

{% snippet, "badgeCaution" %}
Assigning API permissions as described in steps 20 to 26 is only useful if you want to perform Azure accounts discovery (scan). If this is not the case, to avoid assigning unnecessary permissions to the application, skip to step 27.
{% endsnippet %}

20. In ***API permissions***, click ***Add a permission***. ![API permissions – Add a permission](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2141.png)
21. In the ***Resquest API permissions*** window, select ***Microsoft Graph***. ![Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2142.png)
22. Click ***Application permissions***, then check the boxes next to the following Microsoft Graph API permissions to select them:
    * ***Group.Read.All***
    * ***RoleManagement.Readwrite.Directory***
    * ***User.Read.All*** ![Select API permissions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2143.png)

    {% snippet, "badgeInfo" %}
       Use the filter bar above the permissions list to find the ones you are looking for.
       {% endsnippet %}

23. When all the above permissions have been selected, click ***Add permissions*** at the bottom.
24. The list of permissions will be updated to include those just selected. Remove any other unnecessary permissions using the ellipsis button next to them. ![Remove Unnecessary Permissions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2328.png)
25. The permissions require admin consent. Click on the ***Grant admin consent for &lt; Your Organization &gt;*** button, then click ***Yes*** to confirm. ![Grant admin consent for your organization](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2329.png)
26. To confirm that the admin consent has been granted, check the ***Status*** of your permissions. ![Granted Status](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2330.png)
27. To grant the application the ability to rotate passwords, leave the ***App registrations*** to go back to Azure Active Directory, then select ***Roles and administrators*** in the left menu.
28. In ***All roles***, click on the ***Helpdesk Administrator*** role. If the accounts managed by the PAM module are members of any administrator roles or group, then the application needs the ***Privileged Authentication Administrator*** role. ![All roles – Helpdesk Administrator](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8072.png)
29. In ***Assignments***, click on the ***Add assignments*** button. ![Helpdesk Administrator – Add assignments](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8073.png)
30. Filter the list to find the Azure application previously created, select it, then click ***Add***. ![Add assignments](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8074.png) Your new assignment should now be displayed in ***Assignments***.

#### In {{ en.DVLS }}

31. The last steps are dedicated to configuring a scan for this provider. In the ***Scan Configuration*** window that appeared when you saved your provider configuration in step 19, under ***General***, enter a ***Name*** for this configuration. ![Scan Configuration Name](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2144.png)
32. Under ***Configuration***, select ***Groups*** or ***Roles*** in the ***Search mode*** drop-down list. You can filter the ***Search mode*** for specific Azure AD groups or roles by clicking on the ***Edit*** button next to the drop-down list. ![Scan Configuration Search mode](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8077.png)
33. Click ***OK*** when the configuration is done.
34. In {{ en.DVLS }}, go to ***Administration – Privileged Access – Scan Configurations***. If the ***Start Scan on Save*** option was left enabled during the scan configuration, the scan should have started by itself. During the process, the ***Status*** column displays an hourglass icon next to the scan entry. ![Administration – Privileged Access – Scan Configurations](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2145.png)
35. When the process is complete, the hourglass icon changes to a green check mark. At that point, select accounts and import them into the privileged accounts like any other type of privileged account.