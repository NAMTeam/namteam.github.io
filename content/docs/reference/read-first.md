---
title : "Read First"
description: "Important information for NAM installations."
lead: "This document contains important information to read prior to installation of the Network Addon Mod."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 1
draft: false
images: []
---

{{< docstatus status="compatibility" >}}

Before you run off in excitement to install the new NAM version, please make sure to read this (short) document first, to ensure the best Network Addon Mod experience.

Also, make sure you have the following installed:

* **Java Runtime Environment [(available from AdoptOpenJDK--a 64-bit Windows copy of JRE 11 is enclosed in the download)](https://adoptopenjdk.net)**

**Note: in order to ensure proper installation of NAM releases using the current installer, please remove the "Network Addon Mod" folder (and if still present, "z___NAM" folder) from the Plugins directory (usually My Documents\SimCity 4\Plugins on Windows) before installing a new NAM version. The Cleanup/Cleanitol functionality is not presently designed to remove full NAM installations.**

If you wish to only install the NAM's Traffic Simulator Plugin, we recommend that rather than installing the NAM itself, that you load up the included **Traffic Simulator Configuration Tool (TSCT)**, which is contained within the _Traffic Simulator Configuration Tool_ folder in the download.

## New Features for NAM 44

* **Hybrid Railway (HRW) Features**: The Hybrid Railway system now features FA-2 Alt content, new textures to blend with the RealRailway (RRW) system, improvements to catenaries, and major improvements to Left-Hand Drive [LHD] support.
* **RealHighway (RHW) x Avenue Features**:
  - The RealHighway (RHW) now has a FlexDDI system, allowing for FLEX-based Diverging Diamond interchanges with the Avenue network at ground level, and L1 and L2 elevations. Additionally, the FlexSPUI system now supports the L1 height level for the Type 120/Avenue configuration, along with stability improvements for all height levels. Both of these FLEX-based items can be found under a new button on the Roads menu.
  - Additionally, the Avenue Type A1 and B1 MIS Ramp Interfaces have received draggable forms, following the same basic drag patterns as the RHW Type A1 and B1 Ramp Interfaces.
* **RealHighway (RHW) Curves**: new 90° draggable Mini-Curves have been added.
  - The new 3x3 R1 90° Curves support the ground-level RHW-2, RHW-3, RHW-4, and MIS Ramp networks.
  - The new 4x4 R1.5 90° Curves support the ground-level RHW-2, RHW-3, RHW-4, RHW-6S, and MIS Ramp networks.
  - The RHW-6S also now supports the 5x5 R2 90° Curve configuration.
  - MIS Ramp network support has been added to the FLEX S-Curve, and minor aesthetic improvements have been made to the L1 and above RHW-4 FLEX S-Curves.
* **RealHighway (RHW) Transitions**:
  - 45° Curved FLEX Height Transitions at the R3 radius have been added, covering the RHW-2 (L0-L1), RHW-4 (L0-L1, L1-L2, L2-L3, L3-L4), and MIS Ramp (L0-L1, L1-L2, L2-L3, L3-L4) networks.
  - Diagonal FLEX OnSlope (FLEX-OST) support has been added for the RHW-3 and RHW-6S networks.
  - Additionally, further adjacency stability has been added to the 4x4 90° Curved FLEX Height Transitions.
* **Bridges**: New Viaduct Bridges have been added for Avenue (L0, L1, and L2), RHW-8S and RHW-10S (L1 and L2), and RealRailway (L0, L1, L2 for double track, L0 and L1 for single track).
* **Flexible Turn Lane (FTL) Features**:
  - FLEX-based FTL Height Transitions have been added, including for the Type 120 Avenue (Ascending, L0-L1 and L0-L2--use the FLEX Pieces for ramp-style transitions, or drag the FTL setup into the ground end of the On-Slope Transitions to transition the turn lanes to elevation), and RealHighway MIS-2 Lane (Descending, L1-L0, with FLEX Pieces for ramp-style transitions) configurations.
  - Limited L1 and L2 Type 120 Avenue FTL support has been added (primarily for connecting to the L1 and L2 FlexSPUI).
  - The Type 230 configuration for the Triple-Tile Network Widening Mod (NWM) networks has received draggable support for rail-type crossings, including Rail (both Dual and Single-Track), L1 and L2 Rail Viaducts, Standard and Rural Ground Light Rail (GLR), Elevated (Light) Rail, and Monorail. The MIS 2-Lane configuration has also received support for Avenue + and T-intersections (without FTLs), and One-Way Road intersections (with SITAP--Signalization and Turn Arrow Project--support, using the appropriate FLEX intersections).
  - Additionally, Avenues can now end at T-intersections with the Road/NWM Type 110 configuration, with turn arrows provided by the new Avenue Type 020 FTLs.
* **Streets and the Street Addon Mod (SAM)**: The draggable Diagonal S-Curves now work for SAM Sets 2 through 11.
* **Network Widening Mod (NWM) x Street Addon Mod (SAM)**: Adjacency support for the Network Widening Mod (NWM) networks' intersections with the Street Addon Mod (SAM) sets has been vastly improved.
* **FLEX Overpasses**: The Road, One-Way Road (OWR), and Avenue networks have now received FLEX Overpasses, which allow for prefabricated orthogonal viaduct overcrossings of 1-4 tiles to be built. The length can be selected by using Home and End to rotate the overpass. Simply drag any orthogonal network underneath the FLEX Overpasses to cross below them.
* **RHW Disconnector/NAM Eraser**: The RHW Disconnector Tool has been rechristened the NAM Eraser, reflecting its ability to erase 1x1 network tiles of any network or network crossing combination. Additionally, it is also now available on all network menus.
* **User Interface**:
  - The NAM's menu buttons have been reworked, providing a cleaner image and, to improve internationalization (i18n), the English text has been removed from the icons themselves.
  - The buttons have also been reordered, in an effort to improve the overall experience.
  - Additionally, the old puzzle piece-based overpasses have been related to legacy status.
* **Left-Hand Drive Support**: Various improvements have been made across the board to LHD pathing.
* **Morifari Victorian Stations**: The Morifari Victorian Stations for Elevated Light Rail and Rail Viaducts have been restored, with some associated bugs fixed.
* **Other Bugfixes**:
  - The RHW-10S will no longer flip improperly under Elevated RealRailway (ERRW) crossings.
  - Diagonal x Diagonal (DxD) crossings involving the MIS Ramp and RHW-8C network have been improved.
  - Pathing issues on the RHW-6C and RHW-8C FLEX Neighbor Connections have been addressed.
  - Fixed the Euro textures on the RHW-6S Type A2 Wide ramp.
  - The extraneous arrows on the RHW-2-to-4 and RHW-4-to-6C FLEX Width Transitions in LHD have been addressed.
  - Drag-through issues involving the Triple-Tile-Thru x Dual-Tile-End FLEX T-intersections in the Flexible Turn Lanes (FTLs) have been fixed.

## Requirements and Compatibility

The Network Addon Mod, in its current form with default installation options, is designed to run on systems with a 64-bit operating system and at least 4GB RAM. Most modern systems should be able to comfortably run the mod. By installing fewer options and using the "LowRAM/NoRHW" Controller options (or the Controller Compiler to manually compile a custom smaller NAM Controller), however, it is possible to run the NAM on 32-bit operating systems, and/or systems with 4GB or less RAM. At least 1.2GB of hard drive space is required, in order to fully unpack the installer, but actual installation size may run from as little as 1.7MB to as much as 1.2GB, depending on the options chosen and if one selects to manually run the Controller Compiler after installation.

**Note, however, that Windows users attempting to run the "Full/4GB" Controller options without the 4GB Patch, on a 32-bit version of Windows, and/or have less than 4GB RAM, that the game will crash to desktop (CTD) upon attempting to load a city.** Following the proper installation procedure will avoid this issue.

**The Network Addon Mod is compatible with the following versions of the game:**

* A) Retail Windows digital copies of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion Pack (Version 1.1.641), from all digital retailers _except Origin_ (i.e. GOG.com, Steam).
* B) Retail Windows disc copies of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion Pack, updated to at least Version 1.1.638 (note that disc copies do not run on Windows 10).
* C) Digital Windows copies of SimCity 4 Deluxe obtained redeeming an existing CD key (not purchasing) through Origin Customer Support.
* D) Retail Mac digital copies of SimCity 4 Deluxe, purchased through Steam, or, if running macOS 10.15 (Catalina) or earlier, the App Store version.
* E) Retail Mac disc copies of SimCity 4 Deluxe, running on macOS/OS X Version 10.6 (Snow Leopard) or earlier. (NOTE: Platform-specific technical support for the NAM on macOS is _extremely limited_.)

**The Network Addon Mod is NOT compatible with the following versions of the game:**

* F) Retail disc copies of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion Pack that have not been patched (Version 1.1.610 or 1.1.613).
* G) Retail Windows digital copies of SimCity 4 Deluxe purchased from Origin.
* H) Copies utilized as part of EA Play (formerly Origin Access)/Xbox Game Pass.
* I) The App Store version of the Mac port, if running on macOS 11 (Big Sur) or later.
* J) Retail disc copies of non-Deluxe SimCity 4 (sometimes marketed later as "SimCity 4 Classic"), without the Rush Hour Expansion Pack (Version 1.0.272 or earlier)
* K) Pirated or cracked copies of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion Pack.

**What should I do if the NAM does not support my copy of the game?**

The new NAM installer (introduced with the NAM 37 Release Candidate) no longer runs a version check. However, it is strongly recommended that users check the version they are running, as unpatched copies can be unstable. **Version 1.1.610 and Version 1.1.613 are NOT supported.** In Case F, the solution is simply to install the EP1 Update 1 patch, which can be downloaded from EA (SKU 1-5), SimCity 4 Devotion (SKU 1-5), or Simtropolis (SKU 1 and 2 only). To determine the correct SKU version for your copy of SimCity 4, find the installation directory, and look in the subfolder named _sku_data_. Alternatively, one can simply try all the SKU versions of the patch, until one works.

For Case G and H, see the [section about Origin](#origin) below.

For Case I, changes Apple made to the "sandboxing" system with macOS 11 (Big Sur) have effectively made it **impossible to play the App Store version with any kind of mods or plugins**. We recommend you seek a refund and instead purchase the Steam version of the macOS port. Users still running the App Store version on macOS 10.15 (Catalina) or earlier should still be able to install the mod, though with more difficulty than the Steam version, due to the reliance on sandboxing. See the section about macOS [here](#mac).

For Cases J and K, it is recommended that you purchase a digital copy of SimCity 4 Deluxe (NOT from Origin).

**What if my disc copy has simply stopped working with Windows Vista, 7, 8, 8.1, or 10?**

Microsoft decided in 2015 that secdrv.sys, the driver file used by the SafeDisc and other disc copy protection systems present in many PC games from the early 2000s, was a security threat. As a result, the driver was not included as part of Windows 10, and Microsoft issued a Windows Update, KB3086255, which disables secdrv.sys on Windows Vista, 7, 8, and 8.1. In the case of the older versions of Windows, secdrv.sys can be re-enabled when needed through the use of the command prompt or a batch file.

Aside from the advanced step of manually signing a device driver for Windows 10, the only viable courses of action are to either purchase a retail digital copy of the game (NOT from Origin), or to redeem your CD key at no cost via Origin Customer Support (which, unlike purchasing from Origin, will result in you receiving a properly-patched version of SimCity 4 Deluxe).

Note that cracked executables (i.e. a "No CD" .exe) are not eligible for tech support. The NAM Team does not support piracy, but understands the frustration with the game's original DRM system being blocked by Microsoft, forcing one to buy a new digital copy in order to continue playing. However, the reason why cracked executables are not eligible is for more practical reasons, namely the potential for version mismatches (i.e. a Version 1.1.638 crack with Version 1.1.610/613 .DAT files, or vice-versa), which can greatly complicate the team's efforts to provide useful technical support to users. The [Origin issues](#origin) played a role in our keeping the version check in place, until the recent installer change in 2020.

Please note that if you are attempting to use an older, 32-bit version of Windows (i.e. Windows XP) in order to still run your disc game, this will substantially hamper the performance of the game with the full NAM installed, and it is highly recommended that you run the game on a 64-bit operating system. If you must run on a 32-bit OS, you will need to either select one of the "Low RAM/No RHW" NAM Controller options, or manually run the Controller Compiler and install a smaller feature set. (The RealHighway (RHW) system is by far the largest part of the NAM.)

### Various Important Notes

**Note that the NTCore 4GB Patch is REQUIRED** if you are running the Full NAM Controller ("4GB Full" options in the installer), which is required to use the RealHighway (RHW) system. If the installation procedure is begun via NetworkAddonMod_Setup_Version42.bat, as is the new recommended procedure, the 4GB Patch should be automatically applied to the game. Otherwise, the patch can be found inside the download, or downloaded directly from NTCore [here](https://ntcore.com/?page_id=371), where further instructions on use of the patch can be found. Also due to this installer change, the NAM Controller Compiler is no longer run as part of the installation process. Users will have an option to install one of two pre-built NAM Controller options, the Full "4GB" option, which has a substantial size and requires the 4GB Patch and a 64-bit operating system, or a "Low RAM/No RHW" version that does not require the 4GB Patch, and does not include the code for the RealHighway (RHW) system, the most expansive fetaure in the mod. The "Low RAM/No RHW" version should be used by those with 32-bit operating systems (i.e. Windows XP), less than 4GB RAM, and/or by those not using the RHW. Users wishing for further customization of NAM Controller size can still [run the Controller Compiler manually](#compilermac), as it is available in the download.

Users wishing to simply use the NAM's Traffic Simulator improvements should skip the main NAM Installation and instead load up the **Traffic Simulator Configuration Tool (TSCT)**, which is in the folder of the same name. The tool itself is "TSCT.jar", though may be easier to open using the batch file ("TSCT.bat"). Note that the TSCT also requires the Java Runtime Environment.

The NAM uses a Java-based installer, designed by **daeley**, which is cross-platform (meaning no more separate Mac versions, and Linux support without WINE). As such, the Java Runtime Environment (JRE) is now **REQUIRED** to run the NAM installer. It was previous recommended for users wishing to utilize the NAM Traffic Simulator Configuration Tool (TSCT). A Windows 64-bit copy of OpenJDK 11 is included in the download (_OpenJDK11U-jre_x64_windows_hotspot_11.0.8_10.msi_). Other open source distributions of Java can be downloaded from [here](https://adoptopenjdk.net/).

Users who fundamentally object to installing Java (or are unable to for other reasons) can perform a manual install, with patience. Details can be found [here](#manual-installation---advanced)

With the new installer, the old NAM installation is **no longer removed automatically**, so users should manually remove the "Network Addon Mod" and "z___NAM" folders from their Plugins directory. If you use the "Cleanup" option under the "Setup" tab, it is highly recommended that you select the "Backup" option upon completion, and "Delete" will in fact delete all those files, making them unrecoverable. **It is recommended, particularly with this Release Candidate, that you back those folders up in a location that is not in your Plugins folder**. The "z___NAM" folder has been eliminated, and all files are now installed to the "Network Addon Mod" directory.

The RealRailway (RRW) standard for Rail is now the **default and only option**. One may choose to disable the RRW's more restrictive default slope settings by unselecting the "RRW Tunnel and Slope Parameters" box in the installer. The original Maxis Rail specification will be supported via a Legacy Plugin, downloaded separately, at a later date. Also note that a number of cosmetic-oriented NAM plugins, such as the El-Rail Alternate Implementation, the Bullet Train Mod, and some advanced texture options (largely deprecated) have been removed from the installer. The Alternate El-Rail and BTM will be made available separately at a later date. Please note that, much like Maxis Rail, these Plugins are effectively in "Legacy" status, and may not be actively maintained or supported by the NAM Team going forward. Both the original Maxis Highways (MHW) and the "Maxis Highway Override/Project Symphony" (MHO) remain available.

The Station Locator, Updater, and Reconstruction Project (SLURP) is also no longer handled by the new installer. A scaled down version of the old installer will be made at a later date to handle SLURP routines. Users wishing to retain SLURPed stations should retrieve them from the "z___NAM\Mass Transit Lots\Station Overrides" folder in their existing NAM installation, where they will be found in the "Mass Transit Lots" subfolder. **Note that users running the 64-bit version of SimCity 4 on macOS may wish to refrain from retrieving SLURP stations**, as there have been some encoding issues with stations that cause that version of the game to CTD.

The new installer also no longer performs a version check. **Please note, however, that for Windows users, Version 1.1.638 and above are still required**, as Versions 1.1.610 and 1.1.613 have notable instabilities that may have a significant negative impact on the use of this mod. Copies purchased from the Origin Store may still not meet this requirement, and support will not be offered to users with "unofficial" copies of the game.

### Notice to Users Who Purchased a Digital Copy from Origin, or Use EA Play or Xbox Game Pass

Aside from a brief period in 2014-2015, Origin, the digital retail platform run by Electronic Arts (EA), has been selling defective copies of SimCity 4 Deluxe to retail customers. As of the release of NAM 44, this appears to still be the case. Unlike the retail versions sold by GOG.com, Steam, and Amazon (the "Thin Game Download" version), which come pre-patched to Version 1.1.641, the Origin retail copy is Version 1.1.610. By virtue of switching out the original SafeDisc copy protection for their own DRM, Origin altered the checksum of the game's executable, which prevents the EP1 Update 1 patcher--a piece of software they made--from running. This not only prevents the NAM from being installed, but leaves Origin retail copies with all the bugs that the developers fixed in 2003. It also prevents first-party content creation tools like the Building Architect Tool (BAT) from being installed. **In effect, the Origin retail copy is unpatched and unpatchable.**

**Since the EA Play (formerly Origin Access) service, which is included as part of Xbox Game Pass, utilizes Origin files, users playing SimCity 4 Deluxe through either of these services are also presently saddled with the unpatchable/unpatched Version 1.1.610.**

For those who have purchased the game via the Origin Store, the NAM Team recommends you contact Origin Customer Support about obtaining a refund, even after the return period has expired, as users have had success in this case. If you are among the users who are saddled with the unpatched and unpatchable Origin retail version, the team would also appreciate hearing from you, as we have a strong desire to see Origin give their customers a properly-patched copy of the game, and are trying to document just how many users are affected. Those playing via EA Play/Xbox Game Pass should also let EA Play know that they are serving up a defective copy of the game.

Strangely, copies obtained by redeeming an existing CD key at no cost with Origin Customer Support (Case C) _are_ properly patched, despite what the same support team routinely tells those who bought copies and received defective Version 1.1.610 digital copies.

In short:

* **Free copy from Origin Support for CD Key Redemption**: Properly patched (1.1.641)
* **Purchased copy from Origin Store, or playing via EA Play (formerly Origin Access)/Xbox Game Pass**: Unpatched and unpatchable (1.1.610)

For a more detailed assessment of the Origin situation, NAM developer Tarkus has written extensively on the subject at his blog, [SimTarkus](https://simtarkus.wordpress.com/category/origin/).

### Note to Mac Users

Aspyr recently issued an update to their port of SimCity 4 Deluxe for macOS, updating it from a 32-bit app to a 64-bit one on both Steam and the App Store, allowing it to be compatible with macOS Catalina (10.15) and later. This change has introduced a number of quirks, however.

**As of macOS 11 (Big Sur), changes to the operating system's handling of "sandboxing" means that the App Store version of the game no longer supports mods.**

Most notably, it has changed the key combination for cycling through TAB Loops under the NAM's various buttons. Instead of using TAB to move forward, and Shift-TAB to move in reverse, Mac users must now use Ctrl-TAB to move forward, and Ctrl-Shift-TAB to move in reverse. While TAB and Shift-TAB will allow one to move through the TAB Loop, these keys/combinations will cause some pieces under the buttons to be skipped.

Furthermore, the changes have also broken simmaster07's SC4MacInjector, which allowed DLL plugins--including SC4Fix.dll (which addressed the puzzle piece/TE Lot CTDs)--to run on macOS. As such, these fixes no longer work on Mac, and users should exercise caution when placing stations in the vicinity of static puzzle pieces.

Additionally, the installation procedure for the NAM varies depending on if one is using the Steam version or the App Store version.

With the Steam version, the NAM will install into the correct location by default: **/Users/{username}/Documents/SimCity 4/Plugins/**.

With the App Store version, after running the installer, move "Network Addon Mod" folder from the default install location to **/Users/{username}/Library/Containers/com.aspyr.simcity4.appstore/Data/Documents/SimCity 4/Plugins/**. Note again, however, that **this only works on macOS 10.15 (Catalina) or earlier. The App Store version on macOS 11 (Big Sur) or later does not support mods.**

## Preparing to Install The NAM

When one initially opens the NAM package after downloading, there will be several items present, besides the document you are now reading: _NetworkAddonMod_Setup_Version42.jar_, _NetworkAddonMod_Setup_Version42.bat_, and _NetworkAddonMod_Setup_Version42.sh_, all of which are part of the installation process (depending on your operating system), _4gb_patch.exe_ is the NTCore 4GB Patch, the _Controller Compiler_ folder contains the NAM Controller Compiler, the Documentation is loose in the folder (and in the "feature-guides", "images", and "old" folders), and the _Traffic Simulator Configuration Tool_ folder, which contains the Traffic Simulator Configuration Tool (TSCT).

Before beginning installation, regardless of operating system, **remove your existing NAM installation**, which will be located in the "Network Addon Mod" folder (and if installed pre-2020, may also include a "z___NAM" folder) inside your main Plugins directory. The Cleanup/Cleanitol tab in the installer is not presently set up to remove a full NAM installation, and cannot be relied upon to do so for you.

To begin installation, follow the directions for your operating system:

* On Windows, open **NetworkAddonMod_Setup_Version42.bat**.
* On Mac, open **NetworkAddonMod_Setup_Version42.jar**.
* On Linux, open **NetworkAddonMod_Setup_Version42.sh**.

**Simply dumping the files into your Plugins folder WILL NOT install the NAM--you will get no new menu buttons, and will just slow down the game. The installer MUST be run, or the [manual installation procedure](#manualinstall) must be followed.** If you are on Windows, it is recommended that you If User Access Control (UAC) is enabled on your system, Windows may ask you to approve running the file with a simple "Yes"/"No" prompt. Click "Yes" to allow the installer to run.

In order to progress through the installer, simply click on each tab. Note that the license agreement must be agreed to before subsequent tabs can be accessed. The "Cleanup" tab allows one to remove some residual files from old NAM releases, and pre-NAM transit mods that might cause conflicts, and is loaded with the old Cleanitol list that shipped with NAM 36. It is **highly recommended** that you choose the "Backup" option instead of "Delete" after doing so, as "Delete" will completely wipe out the files, as the label implies. Note that it presently is not capable of removing an entire NAM installation, which should be done manually prior to installing a new release.

For more details on the installation process and options, see [the installation section of the NAM documentation](2-installation.html#options).

### Upgrading from a Previous Version

If you are upgrading from a previous version of the NAM, **MANUALLY MOVE YOUR OLD NAM INSTALLATION OUT FROM YOUR PLUGINS FOLDER, INTO A SAFE LOCATION (note that this has changed from previous NAM releases).**. The NAM installer can no longer detect your previous installation options by reading the existing folder structure. It is recommended that you check your existing installation, to determine which features you presently have installed.

Generally speaking, the NAM Team makes every effort to ensure that new versions at least retain some form of "legacy support", such that cities built with any previous NAM version will continue to function well with the latest version.

If you have consolidated your NAM files using a tool such as SC4DatPacker or JDatPacker, please read [here](#datpack).

### A Note About Drive Side (RHD vs. LHD)

While the NAM Installer, as noted above, has a series of checkboxes in Custom Installation relating to drive side, it is worth re-iterating that these boxes **only change the compatibility files installed with the NAM, and do NOT change drive side**. If you have an installation with Right-Hand Driving (RHD, vehicles driving on the right side of roads--this concept is **NOT** the same as the side one sits on when driving a vehicle) and wish to switch to Left-Hand Driving (LHD, vehicles driving on the left side of roads), this generally needs to be done either by adjusting the game's locale files, and then either editing the game's Windows registry entries, or by modifying the game's shortcut.

The new NAM Installer cannot determine default drive side of your installation, so make note of which side vehicles drive on in your game prior to installation. If you have changed your drive side by modifying the game's shortcut, instead of editing the Windows registry, then this would be the **one and only case when changing the box checked here would be needed**.

### A Note About the "4GB Patch"

Due to changes in computer systems, and continued expansions of the NAM's main Controller file, in 2013, it was determined that many newer systems, particularly those with more than 4GB of RAM, and running 64-bit versions of Windows, need additional accommodation. To that end, the NAM includes a "4GB Patch", also known as a "Large Address Aware (LAA) Patch", which allows the game to access the full 4GB of RAM that a 32-bit application can read, instead of the default 2GB. The NAM's patch was designed by NTCore, and built into the NAM with permission, and users with systems that need the patch will receive a prompt during NAM installation to install it. The original patch can be found [here](http://www.ntcore.com/4gb_patch.php).

The only thing this patch does is to switch the Large Address Aware switch, an accessible switch present in all Windows executables, from "off" to "on" for the game's executable. Patches like this are common in game modding communities, including those associated with Skyrim, Fallout, and Morrowind, and can be used to enhance any 32-bit application's performance on systems with 64-bit operating systems and a suitable amount of RAM.

The new installation starting point for Windows users-- **NetworkAddonMod_Setup_Version42.bat**--should ensure that your game is automatically patched as needed.

Note that the 4GB Patch is **NOT required for users on macOS**, as that version of the game is 64-bit and can access more RAM than the Windows version (even with the 4GB Patch!) by default.

The default directory for where SimCity 4.exe may be located depends on how and where you purchased your copy of the game.

* **GOG.com**: C:\GOG Games\SimCity 4 Deluxe Edition\Apps
* **Steam**: C:\Program Files (x86)\Steam\steamapps\common\SimCity 4 Deluxe\Apps
* **Original Disc**: C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps
* **Origin***: C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps

*Note that only Origin copies acquired through Free CD Key Redemption (Version 1.1.641) are compatible with the NAM. Copies purchased through the Origin Store or accessed via Origin Access (Version 1.1.610) ARE NOT COMPATIBLE. See [here](#origin) for more details.

#### Running the Controller Compiler

If you are an advanced user, and would like to trim down your installation of the NAM, it is still possible to run the NAM Controller Compiler (a cross-platform application) after installing the NAM. Extract/open the _"Controller Compiler"_ folder, and double-click the file _"NAMControllerCompiler.jar"_. Select the 'input' folder _"Network Addon Mod/Controller/"_ from the current "Controller Compiler" directory, and the 'output' folder _"~/Documents/SimCity 4/Plugins/Network Addon Mod/"_ inside your plugins. For the rest, follow the instructions of the compiler.

#### Regarding "DatPacking" and File Consolidation Post-Installation

Programs to consolidate folders worth of SimCity 4 .DAT files, such as SC4DatPacker (Windows) and JDatPacker (cross-platform), are popular options known to improve game performance, given SimCity 4's preference to read a smaller number of larger files, instead of a larger number of small files--a fact determined by the BSC Team's "Miramba Experiment" of 2006. The use of "DatPacking" programs on one's NAM installation, however, is a controversial topic. The NAM Team's general advice is for _Windows_ users to **avoid** DatPacking (unless one is _extremely careful_, while for _Mac_ users, the use of JDatPacker is virtually **required**.

In general, if one plans to DatPack one's NAM installation, they should also **save the pre-DatPacked NAM folder in a safe place, outside the Plugins folder beforehand**. The reason for this is to avoid potential conflicts and issues, such as the "dual icon bug" and Controller file conflicts between new and old installations, as well as to make it such that one knows which options they have installed when upgrading to a new version, or re-installing the same version with different options.

In the case of the Aspyr port for the Mac platform (both App Store and Steam versions), it possesses a strange quirk in which exceeding a certain number of files or folders (regardless of size) in the Plugins folder can cause game slowdowns or even crashing-to-desktop (CTD). To this end, using JDatPacker after installing the NAM on a Mac is a necessity, in order to ensure proper game performance. Again, however, one should save their pre-DatPacked NAM installation in a safe place, outside the Plugins folder, to make for easy upgrades.

### Uninstalling the NAM

To uninstall the files, simply bulldoze every NAM item from this download in your cities and remove the files from the Plugins folder afterwards, which will be contained in _Plugins\Network Addon Mod_ by default.

### Changing Options After Initial Installation

The NAM is a very expansive mod, with a substantial number of features, which may initially prove overwhelming to those not well-versed in its workings. The NAM Team anticipates that users, particularly those new to the NAM, may want to change the feature set they have installed, as they learn more about the mod's contents and capabilities.

To that end, we encourage users to keep the installer for the current version handy after initial installation. If you plan to change your particular set of options, you will need to remove your current installation. Moving it out of Plugins to a safe location is recommended, in case you want to keep your existing settings as a backup.

## Manual Installation - Advanced

Users who are unable or unwilling to install Java can perform a manual installation of the NAM, something which the new file architecture introduced in 2020 makes far more possible than the previous "Monolithic" releases.

This method requires a file decompression tool capable of opening .jar files, such as [7-zip](https://www.7-zip.org) (Windows) or [Keka](https://www.keka.io/en/) (macOS). To begin, open NetworkAddonMod_Setup_Version42.jar using your file decompression tool.

The NAM's contents are located in the "installation" subfolder. The current installer uses a series of character flags at the start of directory names, in order to instruct the installer how to order the options, whether they're mandatory or optional, etc.

Numbers preceded by the dollar sign ("$"), i.e. "$1", "$2", etc., are merely being ordered with this flag.

Any directory with the caret ("^") in front of the name (or behind a "$" ordering flag) is mandatory.

Any directory with the exclamation mark ("!") in front of the name (or behind a "$" ordering flag) is not installed by default.

Any options where the equal sign ("=") and the dash ("-") are present are mutually exclusive--only one should be installed (the "=" option is the default).

The "$1^Core" directory is required. All other folders have options within them. With "4_Automata Controller#", "7_Texture and Drive Side Support", and "8_Traffic Simulator#", simply select one of the options inside and discard the rest, as these are straight up mutually exclusive one another.

The Automata Controller basically affects the display of the visual traffic in-game--Standard is going to be the lightest, while Radical is going to be the heaviest, Persistent makes the automata visuals last longer, and the 24-Hour modifiers handle whether the display is constant, or follows the data for the 24-Hour clock in-game.

The Texture and Drive Side Support includes four options, depending on whether you want to use US/North American textures or Euro/International Textures, and the drive side of your game (RHD or LHD, which should match your selection for the NAM Controller).

With the Traffic Simulator, these are ordered by the "$1" and the like in order of lowest capacity option to highest. Medium is the default.

With 5_DataView Options#, there's two subfolders. Both are just straight up options, with nothing mutually exclusive. You can probably just leave this one as is, unless you really don't like the Data View changes.

With 6_Miscellaneous, the two mutually exclusive options to watch out for are Extended Station Queries (there's four options in there--very subtle differences between them), and Maxis Transit Lots\Airport Capacity Adjustment#, which has three options (Default, Medium, and Large). And the Hole Diggers and Raisers are very much recommended--they have lots of use outside regular NAM usage, too.

With 3_Additional Transit Stations, this depends on if you want more transit stations beyond the game's default, and what the NAM adds by default for certain additional override networks. There should be no harm in either adding this one in whole, or leaving it out altogether, and if there's certain added stations you like/don't like, you can go in and customize this later.

2_Additional Network Features is by far the biggest area of the installer. This contains all the actual network feature addons in the mod. Most networks/network groups will have a "Base Features" folder, which really ought to be mandatory, as it contains a lot of the NAM's basic additions to each network, along with any Wide Radius/Multi Radius Curves and Fractional Angles, as well as Roundabout options for the various road-type networks.

The main "mutually exclusive" option to look out for here is with the Maxis Highways (there's two options--$1=Default Style, which keeps the Maxis Highways' default look and adds the NAM's additions for it, or $2-Maxis Highway Override (RHW-Style), which completely reskins the Maxis Highways, removes access to the default interchanges, and replaces them with RHW-style modular interchange functionality and a few new ploppable interchanges. Using the RealHighway (RHW) option is pretty much mandatory if you're going this route).

The other ones to watch out for are in Water Transport, where the Canal Addon Mod (CAN-AM) has two mutually-exclusive styles ($1=Callagrafx Style and $2-SimGoober Style), and there's also quite a few "non-default" options in Roads, One-Way Roads, and Avenues.

Those three non-default options are !Legacy Auto Avenue Turn Lanes (these are the old auto-turn lanes that appear on Avenue x Avenue intersections--largely considered "deprecated" now, as they can interfere with some newer functionality), !Legacy Semi-Auto Road Turn Lanes (the "semi-auto" replacement for the old auto-turn lanes on Road x Road intersections, which now appear by clicking over Road x Road + and T-intersections with the One-Way Road tool, also somewhat "deprecated" now), and !One-Way Road Arrow Plugins. These Arrow Plugins are mostly just a matter of taste, and, despite the folder naming, actually supposed to be mutually exclusive. "Elimination" gets rid of the arrows entirely, "Reduction" hides some of them (and actually impacts the base functionality of the OWR network to some degree), while "Single Arrows" replaces the default double arrows with just a single arrow (which looks nicer on the NWM networks).

The rest of 2_Additional Network Features is pretty self-explanatory, though micromanagement of these options is not recommended, since it is possible to produce a broken installation this way. RealRailway is the only/default option for Rail now, it's best to go all or nothing on RealHighways (RHW) and the Road, One-Way Road, and Avenue folder's "Additional Widths and Turn Lanes" option (which contains the Network Widening Mod and FLEX Turn Lanes). And if something says "Legacy" but it's not prefixed with "!", it's probably safest to install it, as it pertains to being able to keep certain older, deprecated content working, if you've built it with previous versions.

## Information for Users on Lower-End Systems (32-Bit Windows/<4GB RAM)

Users attempting to run the NAM as installed by default with the full NAM Controller, on systems with 32-bit Windows and/or less than 4GB RAM, will not be able to make use of the required 4GB Patch, and will encounter Crash-to-Desktop (CTD) errors with that default Controller. The only solution to this is to either select one of the "Low RAM/No RHW" options in the installer, or use the NAM Controller Compiler to manually compile a smaller Controller file. Instructions on using the Controller Compiler may be found [here](#compilermac). Note that the "Low RAM/No RHW" options do not include ANY code for the RealHighway (RHW) plugin, so attempting to build RHW systems will result in everything reverting to the base RHW-2 network. The single biggest contributor to the Controller's size is the RealHighway (RHW) plugin, so unchecking (or strictly limiting) the RHW options in the Compiler will have the greatest impact in mitigating that file size. Note that the NAM Controller is one of the most critical files in the entire mod; without a NAM Controller, **none of the NAM's menu buttons will function, instead resulting in a "red arrow" when clicked.**

The NAM Team is currently evaluating the possibility of producing a further "NAM Lite" package, designed to support lower-end systems, novice users, and those seeking a thinner install right out of the gate, with all the other improvements present in the most recent version of the NAM.

Users wishing to run just the NAM's Traffic Simulator improvements should skip the NAM installer itself, and instead run the Traffic Simulator Configuration Tool (TSCT), which is located in the Traffic Simulator Configuration Tool folder of the download.

## Distribution and Old Versions

The NAM Team only provides support and allows distribution of the most recent NAM version. With the exception of older non-English language versions (which are supported by their respective sites, not the NAM Team), no technical support will be provided to users of prior versions of the NAM, nor will any past versions of the NAM be made available for download, by request or otherwise. The team does not keep an official archive of past releases, and does not have the resources to answer questions regarding them. Each release includes improvements across the board to features new and old, is designed to be as compatible with cities built with previous versions as is humanly possible, and is also intended to improve the end user experience. Old releases are inherently inferior, and not "simpler" or "easier" to use.

Users wanting a smaller feature set, due to technical limitations, or unfamiliarity with the NAM's vast options, should instead seek to install fewer options in the current NAM, potentially coupled with the "Low RAM/No RHW" option, [manually compiling a smaller NAM Controller](#compilermac), or wait for the proposed "NAM Lite" package to release.

Users wishing to hold onto old versions should back them up in their personal archives. Note again that no technical support will be provided for this, nor may any user or site redistribute any old versions.

## Network Addon Mod - Credits

The following named members of Simtropolis, SC4 Devotion, SimCityPlaza, and the SC4 Devotion Discord have, for whatever particular reason, been specifically included here for their special contributions during the NAM's history. Very special thanks goes towards them in the making, supplying, &/or supporting of this mod &/or its contents possible in one way shape or another:

**The NAM Team and Associates (Active Members as of NAM 44)**

* Bipin
* bladeberkman
* blaireric
* b22rian
* CaptCity
* compdude787
* Durfsurn
* eggman121
* EstGuy/Cheese
* Flann
* Girafe
* Haljackey
* IDS2
* Indiana Joe
* Jiwoahn
* KaenOkami
* Kitsune
* Lucario Boricua
* matias93
* McDuell
* metarvo
* mgb204
* Naomi57
* noahclem
* pierreh
* Ramona Brie
* rivit
* Ryan B.
* Tarkus
* TheCouncill0r/dicko6
* Tyberius06
* ulisse
* z

**NAM Founders**

* Redlotus
* the7trumpets
* Tropod

**NAM Team Lead**

* Tarkus

**NAM Technology Evangelist**

* Haljackey

**NAM Logo**

* MadSim (original design)
* Ramona Brie (updated design)

**Tool Programmers**

* cjmarshall
* CorinaMarie
* DarkMatter
* daeley
* fafalone
* GoaSkin
* Ilive
* jondor
* memo
* null45
* rivit
* simrolle
* Stefan79
* Tropod
* wouanagaine

**NAM Installer**

* Andreas Roth
* daeley
* frimi2
* Tarkus
* wouanagaine
* z

**NAM Controller Compiler**

* memo

**Contributors & Testers**

* 3ddz
* Alidonkey
* Andreas Roth
* andreharv
* Andy80586
* AngryMozart
* Anthracite
* APSMS
* ardecila
* ArkenbergeJoe
* BigSlark
* blahdy
* Blue Lightning
* brenda_xne
* buddybud
* CasperVg
* choco
* Chrisim
* Chrno
* Ciuu96
* Colyn
* CorinaMarie
* CryinG.FreeM4n
* daeley
* deathtopumpkins
* DebussyMan
* DuskTrooper
* dedgren
* Dexter
* Diggis
* DJPTiger
* Dragonshardz
* Droric
* ebina
* elgoalio_29
* Filasimo
* frimi2
* fukuda
* Ganaram Inukshuk
* Generalcamo
* gizmo28
* Glenni
* GoaSkin
* Ill Tonkso
* isii94
* J-dub
* jdenm8
* jeronij
* jmvl
* joelyboy911
* Jonathan
* jondor
* jplumbley
* Karybdis
* manchou
* MandelSoft
* memo
* Mero90
* michi_cc
* MIncroabl
* moonlinght
* morifari
* mott
* mtg
* Murakumon
* MushyMushy
* Nardo69
* nooneatall
* north country dude
* paulvmontfort
* plunderer
* praiodan
* Olasz
* qurlix
* rickmastfan67
* riiga
* Ripptide
* RogerRon91
* royal
* Sabretooth78
* samerton
* Schleicher68
* Seaman
* Shadow Assassin
* Simmer2
* sithlrd98
* smoncrie
* Spocky
* squidi
* Stefan79
* superhands
* swamp_ig
* Swamper77
* Swordmaster
* Teirusu
* The_Great_Chozo
* Thorvin
* threestooges
* titanicbuff
* toja
* Tropod
* vester
* vil
* vortext
* woodb3kmaster
* wouanagaine
* xannepan
* xxdita
* Xyloxadoria

### Special Thanks

Webmaster & administration staff at Simtropolis, SC4Devotion, ModDB, and SimCityPlaza.

All (other) members of original Simtropolis Modd Squad, especially the Modd Squad founders.

And possibly others who may not have been mentioned. If your name has been forgotten or you're not on the list, then drop us a line, as it has been difficult to keep track of anyone/everyone that may of helped somewhere along the lines.

And to the community itself, we would also like to thank you for your support, making mods such as this possible too. We're still at it after **18 years** thanks to you!

And last but not least, a thanks for the Maxis individuals too, for the [paid] work that they did. ;-)