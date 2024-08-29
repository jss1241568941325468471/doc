---
_schema: default
eleventyComputed:
  title: Side menu
---
Using the ***Side menu*** tabs, you can access various {{ en.WBEX }} features. Each tab will display a different view in the ***Content area***.

When using the {{ en.WBEX }} with {{ en.DHUBB }}, the available tabs are the ***Matching*** tab, the ***{{ en.VLT_MAJ }}s*** tab, the ***{{ en.UVLT_MAJ }}*** tab, and the ***Password generator*** tab.

In all tabs except the ***Password generator*** tab, when hovering over an entry, three new options appear: the ***Copy username***, ***Copy password***, and ***View*** buttons. Go to the [Entries functionalities](#entry-functionalities) section for more information.

## Side menu Tabs

### Matching tab

The extension opens on the ***Matching*** tab. This is where you will see the list of credentials available for the particular website you are on.

{% snippet, "badgeInfo" %}
For methods of retrieving your credentials, visit [Retrieve credentials from {{ en.DHUBB}} with the {{ en.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).
{% endsnippet %}

![Matching tab](https://cdnweb.devolutions.net/docs/WEBX4097_2024_2.png "Matching tab")

At the top, you can use the ***Search*** bar to filter through all your credentials, not just those applicable to the website. You can also use the ***Refresh*** button next to it to update the search results.

At the bottom, the ***Add Website*** button opens a new browser tab that allows you to manually add a website entry in {{ en.DHUBB }} through the {{ en.WBEX }}.

{% snippet, "badgeInfo" %}
For a complete list of the available fields in the ***Add Website*** window, visit [Add Website](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/). You can also consult our step-by-step guide on [how to add a website entry](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/).
{% endsnippet %}

### {{ en.VLT_MAJ }}s tab

{% snippet, "badgeHelp" %}
When accessing the ***{{ en.VLT_MAJ }}s*** tab for the first time, you need to select the {{ en.DHUBB }} {{ en.VLT }}s you want to synchronize with the {{ en.WBEX }}. Learn more about it in [First login with the {{ en.WBEX }}](/workspace/workspace-browser-extension/hub-business/first-login/).
{% endsnippet %}

The ***{{ en.VLT_MAJ }}s*** tab allows you to browse through all your synchronized {{ en.VLT }}s for your entries. ![s tab](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2119.png)

At the top, you can use the ***Filter*** bar to search through all your {{ en.VLT }}s for entries.

To access a {{ en.VLT }} in the {{ en.WBEX }}, click on it and navigate through the folders to manually find the entry you are looking for. The folder structure is identical to that of your {{ en.DHUBB }}.

When navigating in the folders, the [***Add Website***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/)button will appear at the bottom of the ***Content Area***.

### {{ en.UVLT_MAJ }} tab

The ***{{ en.UVLT }}*** tab works the same way as the ***{{ en.VLT_MAJ }}s*** tab, except that you navigate through your ***{{ en.UVLT }}*** instead of your other {{ en.VLT }}s. You also do not have to select {{ en.VLT }}s to synchronize as the only {{ en.VLT }} available in this tab is your own ***{{ en.UVLT }}***. ![Tab](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2120.png)

At the top, you can use the ***Filter*** bar to search through all your folders and entries.

To access an entry in the {{ en.WBEX }}, navigate through the folders to manually find the entry you are looking for. The folder structure is identical to that of your {{ en.DHUBB }}.

When navigating in the folders, the [***Add Website***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/) button will appear at the bottom of the ***Content Area***.

### Password Generator tab

The ***Password Generator*** tab assists you in creating a strong and secure password adapted to your needs and to website requirements for your new account. ![Password Generator Tab](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2111.png)

Your custom password is generated at the top of the ***Content Area*** with a strenght indicator below it. You can copy it or generate a new one using the ***Copy to Clipboard*** and ***Generate Password*** buttons respectively. The ***Password lenght***, which is set to 12 by default, can also be adjusted.

In the ***General*** drop-down section, you are able to select the types of characters that your password must contain as well as the minimum number of characters of each type that must be included. ![General Section](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2114.png)

In the ***Advanced*** drop-down section, you are able to further customize your password by entering characters you want included in your password, followed by the minimum number of times they must appear. In the second field, you can also enter characters you want excluded from your password. ![Advanced Section](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2115.png)

{% snippet, "badgeInfo" %}
To learn how to use the ***Password Generator*** when creating an account on a website, visit [Create an account for a website in {{ en.DHUBB }} with the {{ en.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/create-account-website-hub-business/).
{% endsnippet %}

### Entry functionalities

No matter what tab you are in (except the ***Password Generator*** tab), when hovering over an entry, three new options appear: the ***Copy Username***, ***Copy Password***, and ***View*** buttons. ![Copy Username, Copy Password, and View options](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2116.png)

The ***Copy Username*** and ***Copy Password*** buttons copy the username/password of the entry to your clipboard.

The ***View*** button gives you an overview of the entry as well as additional functionalities. The availability of information and functionalities depends on the type of entry and the information provided in the entry, although some of them are always available:

* ***Edit***/***Delete*** the entry with the ellipses button at the top right.
* View the location of your entry under the ***{{ en.VLT }}*** and ***folder*** (if it is located under a folder) sections.
* See when the entry was last modified and created under the ***Last Modified On*** and ***Created on*** sections respectively.

Other information and functionalities will depend on what you provided when creating the entry (username, password, tags, description, etc.). ![Entry Overview](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2118.png)