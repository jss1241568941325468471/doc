---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
Whether a template has been created manually or [downloaded from Devolutions' GitHub repository](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts), a propagation configuration must be enforced afterward.

## Configuration

Head over to ***Administration*** – ***Privileged access*** – ***Propagation (preview)***, and click on the Add button.

![Add a new propagation configuration](https://cdnweb.devolutions.net/docs/DVLS4046_2024_2.png "Add a new propagation configuration")

A window should open containing the previously downloaded or created templates. Pick the desired one and click the ***Select*** button.

{% snippet, "badgeCaution" %}The present topic uses the {% var, "DVLS" false %} password propagation template imported in the [Import propagation script template](/pam/server/propagation-script/import-propagation-script/) topic.{% endsnippet %}

![Select a template to configure](https://cdnweb.devolutions.net/docs/DVLS4047_2024_2.png "Select a template to configure")

In the ***General*** tab, enter a name for the configuration:

![General tab](https://cdnweb.devolutions.net/docs/DVLS4052_2024_2.png "General tab")

Fill in the required informations about the remote machine in the ***Propagation properties*** tab:

<table><thead><tr><th><p>FIELD</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>DevolutionsServerUrl</p></td><td><p></p></td></tr><tr><td><p>ApplicationKey</p></td><td><p></p></td></tr><tr><td><p>ApplicationSecret</p></td><td><p></p></td></tr><tr><td><p>{% var, "VLT_MAJ" false %}Id</p></td><td><p></p></td></tr><tr><td><p>{% var, "VLT_MAJ" false %}Name</p></td><td><p></p></td></tr></tbody></table>

&nbsp;