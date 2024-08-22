---
_schema: default
eleventyComputed:
  title: '{{ en.DGW_STANDALONE }} configuration'
  description:
---
{{ en.DGW_STANDALONE }} is a free open-source relay server offering RDP, SSH, Telnet, VNC, and ARD access through a self-contained web interface. You can optionally protect it with a simple username/password combination or make the gateway available through an ngrok tunnel integration.

{% youtube '0NsNgxPt9qU' %}

## Configuration

1. Download the [installer](https://devolutions.net/gateway/).
2. Run the installer and click ***Next***.<br> ![Next](https://cdnweb.devolutions.net/docs/HUBB0010_2024_1.png)
3. Once the desired installation path is selected, click ***Next***.<br> ![Destination Folder](https://cdnweb.devolutions.net/docs/HUBB0011_2024_1.png)
4. Enable the ***Gateway web interface***.<br> ![Gateway web interface](https://cdnweb.devolutions.net/docs/DGW0007_2024_1.png) {% snippet, "badgeInfo" %}
         Read more about the [ngrok option](#ngrok).
         {% endsnippet %}
5. Click ***Next***.
6. Change the ***Ports*** to the desired value and click ***Next***.<br> ![Listeners](https://cdnweb.devolutions.net/docs/HUBB0013_2024_1.png) {% snippet, "badgeInfo" %}
         HTTP(S) and TCP default ports are 7171 and 8181, respectively, but can be changed.
         {% endsnippet %}
7. Input the ***External URL*** and click ***Next***.<br> ![Access URI](https://cdnweb.devolutions.net/docs/HUBB0014_2024_1.png)

* If a self-signed certificate or the ngrok option were **not** chosen, you will be presented with the screen to import the SSL certificate. The ***Certificate Source*** can be ***External*** (two files) or ***System*** (the [Windows certificate store](/dgw/kb/use-windows-certificate-store/)).
  * ***External***: The required formats are shown in the dialog window.
  * ***System***: The location and method (i.e. ***Search By Thumbprint***) must be chosen. ![External Certificate](https://cdnweb.devolutions.net/docs/HUBB0015_2024_1.png) ![System Certificate](https://cdnweb.devolutions.net/docs/DGW0010_2024_1.png) {% snippet, "shieldCaution" %}
           If a ***Default User*** is not created, the {{ en.DGW_STANDALONE }} web page will be accessible anonymously.
           {% endsnippet %}

8. Input the credentials for the ***Default User*** and click ***Next***.<br> ![Default User](https://cdnweb.devolutions.net/docs/DGW0008_2024_1.png)
9. This screen shows a summary of the current paths/settings. It is possible to go ***Back*** and modify them. If the settings are correct, click ***Next***.<br> ![Gateway setup summary](https://cdnweb.devolutions.net/docs/HUBB0017_2024_1.png)
10. Click ***Install***.<br> ![Install button](https://cdnweb.devolutions.net/docs/HUBB0018_2024_1.png)
11. Click ***Finish*** when the setup is complete.<br> ![Finish button](https://cdnweb.devolutions.net/docs/HUBB0019_2024_1.png) {% snippet, "badgeInfo" %}
           Once installed, the {{ en.DGW_STANDALONE }} web page will automatically open (ngrok static domain or FQDN). Read more about it in the [web page](#devolutions-gateway-standalone-web-page) section.
           {% endsnippet %}

### {{ en.DGW_STANDALONE }} web page

Here you will find a list of your sessions on the left-hand side, and in the middle, a connection box to open a new connection.<br> ![web page](https://cdnweb.devolutions.net/docs/DGW0009_2024_1.png)

1. Log in to the web page (if a ***Default User*** was created in the step 8 of [Configuration](#configuration)).
2. Select the protocol.
3. Enter the hostname and credentials. {% snippet, "badgeInfo" %}
         For RDP connections, click on ***More Settings +*** to optionally set the ***Screen Size***, ***KDC Server URL***, or a ***Pre Connection Blob***.
         {% endsnippet %}
4. Click on ***Connect Session***.

### ngrok

{% snippet, "badgeInfo" %}
Enabling both ngrok and the web interface, will disable the option to generate a self-signed HTTPS certificate as it will use the SSL certificate provided by ngrok. Additionally, the installer will not show the options to configure ports.
{% endsnippet %}

* Using ngrok and the native client access requires an ngrok subscription. Using the free version still gives access to the web interface and RDP, SSH or Telnet to remote endpoints.
* ngrok tunnel capability is included in {{ en.DGW }}, downloading and manually launching a tunnel with *ngrok.exe* will not allow {{ en.DGW }} to start.
* Read more on [ngrok](https://ngrok.com/docs/).