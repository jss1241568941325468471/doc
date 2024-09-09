---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
Although Devolutions propose a wide variety of PowerShell script templates, administrators can make custom ones. Here are the steps to do it:

1. Log in to {{ en.DVLS }} with an administrator account.
2. Go to ***Administration*** – ***Modules*** – ***Privileged access*** – ***Propagation (Preview)***. ![Propagation (preview)](https://cdnweb.devolutions.net/docs/DVLS4054_2024_2.png "Propagation &#40;preview&#41;")
3. Click on ***Script templates***. ![Script templates icon](https://cdnweb.devolutions.net/docs/DVLS4042_2024_2.png "Script templates icon")
4. Click on ***Add***. ![Add button](https://cdnweb.devolutions.net/docs/DVLS4049_2024_2.png "Add button")
5. In the ***General*** tab, add a ***Name*** for this template. {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                      It is possible to add a ***Description***. The icon can also be changed by clicking on it.
                                                                                                                                                                                                                                                                                                                                                      {% endsnippet %}
6. In the ***Propagation properties*** tab, add the variables for the script by clicking on ***\+ Add property***. The variables added in this tab should represent the URL to the remote machine (i.e., ComputerIP, Username, Password and RootFolder). ![Propagation properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png "Propagation properties")
7. In the ***Property mapping*** tab, add the variables for the script by clicking on ***\+ Add property***. The variables added in this tab should represent the ***Field mapping*** of the remote machine (i.e., FileName and FilePath). ![Property mapping](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png "Property mapping")
8. In the ***Script*** tab, the previous variables appear as well as the ***NewPassword*** variable. This new variable will contain the new password for the account on script execution.
9. Click on ***Generate base script***. ![Generate base script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png "Generate base script")
{% snippet, "badgeInfo" %}
Click on ***Edit*** to modify or add to the script.
{% endsnippet %}
10. Click ***Save*** to save this configuration and close the window. 
{% snippet, "badgeInfo" %}
Learn more about custom scripts for this feature by visiting our [public GitHub](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
{% endsnippet %}