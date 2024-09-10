---
_schema: default
eleventyComputed:
  title: Load from system information
  description: How to use the load from System Information in {{ en.RDM }}
---
***The Load from System Information*** feature allows you to view the configuration of an entry, which is useful if you have a large number of computers.

The feature can be found by right-clinking on an entry and going to ***Properties*** – ***Asset*** – ***Load from System Information***.

![Load from System Information](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6103.png)

### Supported Linux type:

* Ubuntu
* Debian

### Error Bios information:

* Sessions must be RDP.
* The station must be on the same domain.
* The credentials must be in the ***Tools*** section of the session and be accurate.
* Test the WMI requests directly from the station to see if the communication is working.

### Error getting products informations:

Invalid Class WMI or WMI class is not found on Windows Server 2003. On Windows Server 2003, Win32\_Product is not enabled by default. Learn more about <a href="https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa394378(v=vs.85)" title="https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa394378(v=vs.85)" target="_blank" rel="noopener">Win32_Product class</a>.