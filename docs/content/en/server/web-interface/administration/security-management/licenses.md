---
eleventyComputed:
  title: Licenses
  description: Managing registration globally for all your users can be done with a license serial stored in Administration – Licenses.
---
Managing registration globally for all your users can be done with a license serial stored in ***Administration – Licenses***. Licenses have a limited number of users and can be assigned automatically with ***Auto assign*** or to specific users in the ***Assigned to*** tab.
![Adding a license](https://cdnweb.devolutions.net/docs/DVLS0015_2024_2.png)

Here are the different license types that can be added in {{ en.DVLS }}:
* {{ en.RDM }}
* {{ en.DLAUNCHER }}
* [{{ en.DGW }}](/dgw/overview/what-is-dgw/) module
* [Privileged access management (PAM)](/pam/overview/what-is-pam/) module
* Third party PAM integrations (CyberArk, Delinea Secret Server, BeyondTrust)
* Client access license (user CAL)

{% snippet, "badgeInfo" %}
Only the CyberArk license has unlimited users.

A {{ en.DGW }} license is not needed when configuring a gateway, only when opening a connection.
{% endsnippet %}

## General
![General](https://cdnweb.devolutions.net/docs/DVLS0016_2024_2.png)

| Option      | Description                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------|
| License     | Enter the license to be stored.                                                                  |
| Import      | Import the license using a **LIC** file.                                                         |
| Auto assign | Automatically assign the license key to every new user account (not available for PAM licenses). |

## Assigned to
![Assigned to](https://cdnweb.devolutions.net/docs/DVLS0017_2024_2.png)

| Option         | Description                                                          |
|----------------|----------------------------------------------------------------------|
| Filter         | Filter the list based on the ***Name*** or ***Description*** column. |
| Assign all     | Assign the license to all accounts.                                  |
| Assign missing | Assign the license to accounts that are not already selected.        |
| Clear all      | Remove the license from all accounts.                                |
