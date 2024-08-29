---
eleventyComputed:
  title: Licenses
  description: Managing {{ en.RDM }} registration globally for all your users can be done with a license serial stored in an advanced data source.
---
Managing {{ en.RDM }} registration globally for all your users can be done with a license serial stored in an advanced data source (small teams and enterprises): {{ en.DVLS }}, {{ en.DHUBB }}, CyberArk, Microsoft Azure SQL, and Microsoft SQL Server.

The ***Licenses*** menu is available for all data source types (granted you have access to the ***Administration*** section) but behaves differently:
* For {{ en.DVLS }}, {{ en.DHUBB }}, and {{ en.DHUBP }}, the menu brings up the web page of the corresponding data source. You could be prompted to connect to your account on the web.
* For all other data source types, the menu opens in {{ en.RDM }}.

With the license stored in an [advanced data source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), there is no need to register {{ en.RDM }} as the license serial is retrieved directly from it. When launching the application for the first time, add the data source containing the serial.

{% snippet, "badgeInfo" %}
It is possible to [request a trial](/rdm/windows/installation/client/registration/trial-request/) to try {{ en.RDM }} for 30 days. If you decide not to register the application at the end of the 30 days period, your data will not be altered or erased, and you will have full access to it once you provide a valid license serial.
{% endsnippet %}

1. To add a license serial, navigate to ***Administration – Licenses***.
![Administration – Licenses](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3417.png)
1. Click ***Add License***.
![User and Security Mangement – Add License](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6035.png)
1. Enter the license or import the license file using the ***Import*** button.
   {% snippet, "badgeInfo" %}
   Importing the license using the **.lic** file is most uselful when offline. See the next section about offline registration for more information.
   {% endsnippet %}

   ![License](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2238.png)
1. Click ***Ok*** to save the license.
1. Optional: The ***Auto assign*** option will be displayed when you enter the license. The box is already checked to provide the {{ en.RDM }} serial to all newly created users. A warning window will appear if you uncheck the box and click ***OK***.
![Warning window](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6033.png)

Your license is now saved in the advanced data source. Follow [Assign Licenses](/rdm/windows/commands/administration/management/licenses/assign/) to automatically assign them to selected users, removing the need to interact locally with their {{ en.RDM }}. Licenses have a limited number of users and can be assigned automatically with ***Auto assign*** or to specific users in the ***Assigned to*** tab.

{% snippet, "badgeInfo" %}
Only the CyberArk license has unlimited users.

A {{ en.DGW }} license is not needed when configuring a gateway, only when opening a connection.
{% endsnippet %}

### Offline registration
If you need to register your license while offline (if internet is disabled or if for whatever reason you cannot reach the servers), you can only do it by importing the **.lic** file provided to you, which contains a JSON Web Token (JWT).

* ***Trial license***: The license file must be downloaded from the Devolutions confirmation email and imported as described in the steps above for {{ en.RDM }} 2023.3 and later.
* ***Purchased license***: The purchased license must be downloaded from your {{ en.DPORTAL }} account and imported as described in the steps above for {{ en.RDM }} 2023.3 and later.
