---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
###

1. Log in to {{ en.DVLS }} with an administrator account.
2. Go to ***Administration*** – ***Modules*** – ***Privileged Access*** – ***Propagation (Preview)***. ![Propagation (Preview)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
3. Click on ***Script Templates***. ![Script Templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
4. Click on ***Add***. ![Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0112.png)
5. In the General tab, add a ***Name*** for this template. {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                   It is possible to add a ***Description***. The icon can also be changed by clicking on it.
                                                                                                                                                                                                                                                                                                                                                   {% endsnippet %}
6. In the ***Propagation Properties*** tab, add the variables for the script by clicking on ***\+ Add property***. The variables added in this tab should represent the URL to the remote machine (i.e., ComputerIP, Username, Password and RootFolder). ![Propagation Properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png)
7. In the ***Property Mapping*** tab, add the variables for the script by clicking on ***\+ Add property***. The variables added in this tab should represent the ***Field Mapping*** of the remote machine (i.e., FileName and FilePath). ![Property Mapping](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png)
8. In the ***Script*** tab, the previous variables appear as well as the ***NewPassword*** variable. This new variable will contain the new password for the account on script execution.
9. Click on ***Generate base script***. ![Generate base script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png) {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                   Click on ***Edit*** to modify or add to the script.
                                                                                                                                                                                                                                                                                                                                                   {% endsnippet %}
10. Click ***Save*** to save this configuration and close the window. {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Learn more about custom scripts for this feature by visiting our [public GitHub](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   {% endsnippet %}