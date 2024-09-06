---
_schema: default
eleventyComputed:
  title: Enable offline mode
  description: >-
    Configuring offline mode in {{ en.DVLS }} allows users or groups to access
    resources without needing continuous internet connection.
---
Configuring ***offline mode*** allows users or groups to access resources without needing continuous internet connection when using a {{ en.DVLS }} [data source](/rdm/concepts/basic-concepts/data-sources/) in {% var, "RDM" false %}.

## Enable offline mode

1. Log in to the {{ en.DVLS }} web interface, navigate to the ***Administration*** section, and choose to enable offline mode for individual ***Users*** or for ***User Groups***. ![Administration – Users/User Groups](https://cdnweb.devolutions.net/docs/DVLS4018_2024_1.png)
2. Find and select the user or group from the list, and click on the ***Edit*** button. ![User list and Edit button](https://cdnweb.devolutions.net/docs/DVLS6078_2024_1.png)
3. In the edit menu, click on ***Settings***, and select the appropriate offline mode. ![Settings – Offline mode](https://cdnweb.devolutions.net/docs/DVLS4021_2024_1.png)

{% snippet, "badgeNotice" %}
Ensure that the users or groups have the necessary permissions to operate with reduced connectivity, and regularly update and synchronize settings when connectivity is available to maintain security and functionality.
{% endsnippet %}