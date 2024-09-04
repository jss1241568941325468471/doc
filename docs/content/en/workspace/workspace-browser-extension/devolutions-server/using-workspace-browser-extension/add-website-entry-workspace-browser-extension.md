---
_schema: default
eleventyComputed:
  title: Add a website entry with the {{ en.WBEX }}
---
{% snippet, "badgeInfo" %}
This topic explains how to create an entry with your existing website credentials. If you have not yet created an account for the website, see [Create an account for a website with the {{ en.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/create-account-website-workspace-browser-extension/) instead.
{% endsnippet %}

Website entries can be created with the {{ en.WBEX }} in {{ en.DVLS }}. This type of entry is useful for saving your login credentials so that you do not have to remember them. These entries are also used by the {{ en.WBEX }} to recognize a website and [retrieve your credentials](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/retrieve-credentials-workspace-browser-extension/).

The main way to achieve this is by successfully logging into the website. The {{ en.WBEX }} will automatically offer to save your credentials in a new website entry in {{ en.DVLS }}. It is also possible to manually create the website entry.

## Add a website entry

### Automatically Add a Website Entry

1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example. ![Login page](https://cdnweb.devolutions.net/docs/WEBX4031_2024_2.png "Login page")
2. Websites usually ask for information such as an email address/username and a password. Follow the website’s login process until you log in to your account.
3. A {{ en.WBEX }} ***Add Website*** window will pop up in the corner of your web browser. ![Add website](https://cdnweb.devolutions.net/docs/WEBX4076_2024_2.png "Add website")
4. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed.
5. Select the ***{{ en.VLT }}*** you want to save your credentials into.
6. Provide a ***Destination folder*** in which to save your website entry. If you leave this field empty, the entry will be saved at the root of the {{ en.VLT }}. If the folder you specify does not exist, it will be created at the same time as your entry.
7. Click ***Save***.

Your credentials are now securely stored in a new website entry in {{ en.DVLS }}. The next time you log in to the same account, the {{ en.WBEX }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/retrieve-credentials-workspace-browser-extension/).

### Manually Add a Website Entry

1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example. ![Login page](https://cdnweb.devolutions.net/docs/WEBX4031_2024_2.png "Login page")
2. Click on the {{ en.WBEX }} icon in your browser toolbar and, in the ***Matching*** tab, click on the ***Add Website*** button. ![Add website button](https://cdnweb.devolutions.net/docs/WEBX4077_2024_2.png "Add website button")
3. The {{ en.WBEX }} ***Add Website*** tab will open in your browser. ![Add website](https://cdnweb.devolutions.net/docs/WEBX4076_2024_2.png "Add website")
4. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed.
5. The ***URL*** field is automatically filled in with the login page URL from step 1.
6. The ***Credentials*** drop-down list is set to ***Custom*** by default. This allows you to manually enter your ***Username*** and ***Password*** in the next step.
7. Provide the ***Username*** and ***Password*** you use to log in to the website. Depending on the website, your username may be your email address.
8. If desired, enter a ***Description*** of your entry.
9. Select the ***{{ en.VLT }}*** you want to save your credentials into.
10. Provide a ***Destination folder*** in which to save your website entry. If you leave this field empty, the entry will be saved at the root of the {{ en.VLT }}. If the folder you specify does not exist, it will be created at the same time as your entry.
11. Click ***Save***.

Your credentials are now securely stored in a new website entry in {{ en.DVLS }}. The next time you log in to the same account, the {{ en.WBEX }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/retrieve-credentials-workspace-browser-extension/).