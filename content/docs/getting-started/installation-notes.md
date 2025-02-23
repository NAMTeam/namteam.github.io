---
title : "Installation"
description: "Important installation notes about the Network Addon Mod for SimCity 4."
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 2
draft: false
images: []
url: "docs/getting-started/installation"
---
<!-- markdownlint-disable MD025 MD051 -->
{{< docstatus status="compatibility" >}}

## I'm Installing the NAM ...
  
{{< tabs tabTotal="2" tabRightAlign="2">}}
  
  {{< tab tabName="For the first time" >}}
  ## First Time Installation

  1. Verify your Sim City 4 version compatibility and minimum system specifications from the tables [below](#version-compatibility)</a>.

  2. [Download the NAM Installer](/download-the-nam) via the button at the top of this website and unzip the file.

  3. Install the pre-packaged Java Runtime Environment if Java is not already installed. This is found under a file named **OpenJDKxxxx**.

  4. Running the Installer ...
      <details>
        <summary>On Windows</summary>
        Double click to run the <b>NetworkAddonMod_Setup_VersionXX.bat</b> file. This will automatically install the 4GB Patch that allows NAM to run properly in-game.
      </details>
    
      <details>
        <summary>On macOS</summary>
        Run the <b>NetworkAddonMod_Setup_VersionXX.jar</b> file.
        <hr>
        <b>If on the App Store version</b>, the installer cannot directly install into the Plugins location the App Store version utilizes, which is inside the .app file (~/Library/Containers/com.aspyr.simcity4.appstore/Data/Documents/SimCity 4). Install to an alternate location first, then copy the resultant "Plugins" folder into that location.  Note that the NAM Team is currently very limited in our ability to provide installation assistance to App Store users.
      </details>

      <details>
        <summary>On Linux</summary>
        Run the <b>NetworkAddonMod_Setup_VersionXX.jar</b>. If that fails, run the <b>NetworkAddonMod_Setup_VersionXX.sh</b> file.
      </details>

  5. Follow the installer's instructions, clicking on each tab on the top bar -- in order!
      1. Read and agree to the mod's terms on the initial "welcome" tab.
      2. Select the options you would like to install under the "files" tab.
      3. Select the install location under the "location" tab.  This is typically left unchanged from he default Plugins folder.
      4. Finally, move to the "install" tab.  Click the "Start installation" button to begin the installation process.  When the installation is complete, the progress screen will display a message, "All selected components installed!".
      5. Close the installer. You're all done installing.
    
  6. **Additional step required for Mac users (optional on Windows/Linux)**: run [JDatPacker](https://www.sc4evermore.com/index.php/downloads/download/30-gameplay-utilities/19-jdatpacker) to consolidate the mod's files.
      * If on the App Store version, run JDatPacker over the resultant Plugins directory, then move the "Network Addon Mod_###.dat" files (wherein "###" is a three-digit number) into the container.
      * On the Steam version (or if optionally using JDatPacker on Windows), run JDatPacker on the Documents\SimCity 4\Plugins directory (this will also consolidate your other plugins as well).  Make sure you remove the original directories that were consolidated, and, if upgrading or reinstalling your NAM package at any point, ensure you delete any the "Network Addon Mod_###.dat" files from your Plugins before running the new installation.  It is recommended that you use a new subfolder (i.e. "Plugins\Compressed Files") instead of installing to the root of the Plugins directory, as this can help prevent mod conflicts.
    
  7. Load the game and enjoy the NAM!
  {{< /tab >}}

  {{< tab tabName="As an upgrade from a previous version" >}}
  ## Upgrading From a Previous Version

  1) Move your current NetworkAddonMod folder from your Plugins folder. Do not delete. Your Desktop is a decent place to move it for now. Note: if you have consolidated your NAM files using a tool such as SC4DatPacker or JDatPacker, move the consolidated file.

  2) Run the NAM Installer for the new version.

  3) Run SimCity4 and test. If you have any issues or wish to revert, simply delete the new "NetworkAddonMod" folder in Plugins and replace with your previously moved folder to restore original functionality. Contact us for more help, if required.
  {{< /tab >}}

{{< /tabs >}}

## Version Compatibility

**The Network Addon Mod is compatible with the following versions of the SimCity4 Deluxe/Rush Hour running Version 1.1.641:**

{{< table class="w-auto" >}}
|         | GOG.com    | Steam       | Disc        | EA/Origin/Xbox Game Pass    | Mac App Store | Pirated
| ------- | :---:      | :------:    | :---:       | :---:                       | :---:         | :---:
| Windows | Yes        | Yes         | Limited²    | Yes<sup>4,5</sup>           | N/A           | No
| Mac     | N/A        | Yes¹        | Limited³    | N/A                         | Yes¹          | No
{{< /table >}}

<span class="fs-6">**¹** Technical support is limited for Mac Steam version users, and *very limited* for macOS Store version users.</span><br>
<span class="fs-6">**²** Must be running at *least* Version 1.1.638</span><br>
<span class="fs-6">**³** Running on macOS/OS X Version 10.6 (Snow Leopard) or earlier</span><br>
<span class="fs-6">**⁴** SimCity 4 Deluxe obtained through a purchase from one of these storefronts **is compatible**. See [Notice to Users Who Purchased a Digital Copy from Origin, or Use EA Play or Xbox Game Pass](/docs/getting-started/troubleshooting/#origin-ea-play-xbox-gamepass) for important historical information.</span><br>
<span class="fs-6">**⁵** SimCity 4 Deluxe obtained by redeeming an existing CD key (not purchasing) through Origin Customer Support (Version 1.1.641) **is compatible**</span><br>

## Minimum Specs

The Network Addon Mod requires your computer have at least the following:

{{< table class="w-auto" >}}
| NAM Controller Option         | Minimum specifications
| :---                          | :------
| **LowRAM / NoRHW Controller** | Any system built within the last 15 years, with 750MB available disk space.  Users running this option cannot install the RealHighway (RHW) features.
| **Full 4GB Controller**       | Any system with a 64-bit operating system, at least 4GB RAM, and 1.2GB available disk space.  If on Windows, the 4GB Patch must be applied to the game's executable.
{{< /table >}}

## Troubleshooting

Have an issue installing? Consult the [Troubleshooting](/docs/getting-started/troubleshooting) page first to see if your question is covered there. Otherwise drop a message in the [NAM Support Forum](https://community.simtropolis.com/forums/forum/30-nam-transit-networks/) at Simtropolis or at the Helpdesk in the SC4Evermore Discord group. 

# When you're done installing, it's on to the [Basics](/docs/getting-started/in-game-basics). 