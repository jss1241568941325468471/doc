---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
Templates can be used in many different ways, from password propagation to sending message in Slack when passwords are changed in {% var, "DVLS" false %}. For a list of all available templates created by Devolutions, consult [Devolutions' Propagation scripts repository on GitHub](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts).

## Creating a custom template

Templates vary greatly depending on propagation script type. For the sake of simplicity, the following steps describe how to create a temlate for saving password changes on a remote machine.

1\. Go to ***Administration*** – ***Privileged access*** – ***Propagation script (preview)***, and click on the ***Script templates*** icon:

![Script templates icon](https://cdnweb.devolutions.net/docs/DVLS4042_2024_2.png "Script templates icon")