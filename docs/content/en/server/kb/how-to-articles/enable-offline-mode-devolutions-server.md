---
_schema: default
eleventyComputed:
  title: >-
    Configure Devolutions Server data source for offline mode in Remote Desktop
    Manager
  description: >-
    Configuring offline mode in {{ en.DVLS }} allows users or groups to access
    resources without needing continuous internet connection.


    Configuring offline mode in {{ en.DVLS }} allows users or groups to access
    resources without needing continuous internet connection when using a {{
    en.DVLS }} data source in {{ en.RDM}}.
---
Configuring ***offline mode*** allows users or groups to access resources without needing continuous internet connection when using a {{ en.DVLS }} [data source](/rdm/concepts/basic-concepts/data-sources/) in {% var, "RDM" false %}.

## Enable offline mode in {% var, "DVLS" false %}

1. Log in to the {{ en.DVLS }} web interface, and navigate to the ***Administration*** section.
2. Choose to enable offline mode for individual ***Users*** or for ***User Groups***. ![Administration – Users/User Groups](https://cdnweb.devolutions.net/docs/DVLS4018_2024_1.png)
3. Find and select the user or group from the list, and click on the ***Edit*** button. ![User list and Edit button](https://cdnweb.devolutions.net/docs/DVLS6078_2024_1.png)
4. In the edit menu, click on ***Settings***, and select the appropriate offline mode. ![Settings – Offline mode](https://cdnweb.devolutions.net/docs/DVLS4021_2024_1.png)

{% snippet, "badgeNotice" %}
Ensure that the users or groups have the necessary permissions to operate with reduced connectivity, and regularly update and synchronize settings when connectivity is available to maintain security and functionality.
{% endsnippet %}

## Enable offline mode in {% var, "RDM" false %}

1. Open {% var, "RDM" false %}.
2. Select the {% var, "DVLS" false %} [data source](/concepts/basic-concepts/data-sources/).
3. Enable the [offline mode](/rdm/concepts/intermediate-concepts/offline/) by clicking ***File - Go offline***.
4. The {% var, "DVLS" false %} [data source](/concepts/basic-concepts/data-sources/) is now available in offline mode.

To learn more about the ***offline mode*** in {% var, "RDM" false %}, [click here](/rdm/data-sources/offline-mode/).

&nbsp;