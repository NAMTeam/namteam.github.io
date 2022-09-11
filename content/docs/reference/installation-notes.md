---
title : "Installation Notes"
description: "Important installation notes about the Network Addon Mod for SimCity 4."
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 2
draft: false
images: []
---

**Note to users of the EA App/Origin**: The EA App (and Origin) version of SimCity 4 Deluxe, also used by the EA Play and Xbox Game Pass subscription services, contains a Version 1.1.610 executable for the game. The Network Addon Mod has a minimum requirement of Version 1.1.638, as does the important SC4Fix.dll mod. Custom buildings made through EA's official Building Architect Tool (BAT) require Version 1.1.640 in order to show nightlighting. Due to checksum changes in the EA App Version, it is permanently locked to Version 1.1.610, and cannot be patched to Version 1.1.638 or 1.1.640. Thus, it is not compatible with the Network Addon Mod. For more details, see [here](#notice-to-users-who-purchased-a-digital-copy-from-origin-or-use-ea-play-or-xbox-game-pass).

## Installation Notes

First off, ensure that you have extracted the contents of this .zip file-- **attempting to run it within the .zip archive can cause parts of the installation to fail**. Also, make sure you have the following installed:

* **Java Runtime Environment (JRE) -[Available from Adoptium/AdoptOpenJDK](https://adoptium.net/temurin/releases), or, if you are on 64-bit Windows (and have extracted the .zip contents), you can utilize the enclosed copy of the JRE. This can be accessed directly [here](OpenJDK11U-jre_x64_windows_hotspot_11.0.8_10.msi).*

**Note: in order to ensure proper installation of NAM releases using the current installer, please remove the "Network Addon Mod" folder (and if still present, "z___NAM" folder) from the Plugins directory (usually My Documents\SimCity 4\Plugins on Windows) before installing a new NAM version. The Cleanup/Cleanitol functionality is not presently designed to remove full NAM installations.**

**NEW THIS RELEASE for users seeking a "minimal install" (i.e. just the Traffic Simulator and bugfixes)**: Included in the NAM 45 download is NAMLite 1, a separate, minimal package which includes the NAM's Traffic Simulator (which has just been updated to Simulator Z 3.0), Automata Controllers, bugfixes, the option to install Euro textures, and some of the most popular lightweight features, including Diagonal Streets, Roundabouts, One-Way Road Bridge Support, and Additional Highway Interchanges for the game's base (Maxis) Highway and Ground Highway networks, with any added menu buttons being optional, non-default items. To install NAMLite 1, simply run NetworkAddonMod_Lite_Setup_Version1.bat (Windows), NetworkAddonMod_Lite_Setup_Version1.jar (macOS or as an alternate option on Windows), or NetworkAddonMod_Lite_Setup_Version1.sh (Linux). Note that NAMLite still requires Java to run, but does not require the 4GB Patch. Note that the Traffic Simulator Configuration Tool (TSCT) has been discontinued--more details can be found in the New Features/Version Notes section below.

**For the full release**, use NetworkAddonMod_Setup_Version45.bat (Windows), NetworkAddonMod_Setup_Version45.jar (macOS, alternate option on Windows if the 4GB Patch has already been installed), or NetworkAddonMod_Setup_Version45.sh (Linux).

## Requirements and Compatibility

The requirements depend on which feature set you choose to install.

* **NAMLite**: Any system which can run SimCity 4, with 40MB available disk space.
* **NAM with a LowRAM/NoRHW Controller option**: Any system built within the last 15 years, with 750MB available disk space. (Users running this option cannot install the RealHighway (RHW) features.)
* **NAM with a Full 4GB Controller option**: Any system with a 64-bit operating system, at least 4GB RAM, and 1.2GB available disk space. If on Windows, _the 4GB Patch must be applied to the game's executable_.

**Note, however, that Windows users attempting to run the "Full/4GB" Controller options without the 4GB Patch, on a 32-bit version of Windows, and/or have less than 4GB RAM, that the game will crash to desktop (CTD) upon attempting to load a city.** Following the proper installation procedure and ensuring the contents of the download have been extracted from the .zip file will avoid this issue.

Additionally, the addition of any plugins to the game will have at least some effect on initial load times, when first booting the game or a city. The difference may be noticeable if you are going from an unmodded game to one with a large Plugins folder (a full NAM installation will exceed 1GB), especially on lower-end systems. Having at least 8GB RAM, running the game on a solid state drive (SSD), and/or having a CPU with a high clock speed (SimCity 4 was released in 2003, before multi-core CPUs were commonplace outside of servers) all help the game's performance.

**The Network Addon Mod is compatible with the following versions of the game:**

* A) Retail Windows digital copies of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion Pack (Version 1.1.641), from most digital retailers (i.e. GOG.com, Steam), _excluding copies from Origin, EA Play, and the EA app (which are perma-unpatched to Version 1.1.610)_.
* B) Retail Windows disc copies of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion Pack, updated to at least Version 1.1.638 (note that disc copies generally do not run on Windows 10).
* C) Digital Windows copies of SimCity 4 Deluxe obtained by redeeming an existing CD key (not purchasing) through Origin Customer Support (Version 1.1.641).
* D) Retail Mac digital copies of SimCity 4 Deluxe, purchased through Steam or the App Store. (Note: technical support availability from the NAM Team is limited for Steam version users, and _very limited_ for macOS Store version users.)
* E) Retail Mac disc copies of SimCity 4 Deluxe, running on macOS/OS X Version 10.6 (Snow Leopard) or earlier Note: technical support availability from the NAM Team _very limited_ for Mac disc version users, and the ability to run Full 4GB/RHW-inclusive installation options is an unknown.).

**The Network Addon Mod is NOT compatible with the following versions of the game:**

* F) Retail disc copies of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion Pack that have not been patched (Version 1.1.610 or 1.1.613).
* G) Retail Windows digital copies of SimCity 4 Deluxe purchased from the Origin Store or the EA app (these are perma-unpatched to Version 1.1.610).
* H) Copies provided through EA Play (formerly Origin Access) or Xbox Game Pass (these are perma-unpatched to Version 1.1.610).
* I) Retail disc copies of non-Deluxe SimCity 4 (sometimes marketed later as "SimCity 4 Classic"), without the Rush Hour Expansion Pack (Version 1.0.272 or earlier)
* J) Pirated or cracked copies of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion Pack.

**What should I do if the NAM does not support my copy of the game?**

The new NAM installer (introduced with the NAM 37 Release Candidate) no longer runs a version check. However, it is strongly recommended that users check the version they are running, as unpatched copies can be unstable. **Version 1.1.610 and Version 1.1.613 are NOT supported.**

In Case F, the solution is simply to install the EP1 Update 1 patch, which can be downloaded from EA (SKU 1-5), SimCity 4 Devotion (SKU 1-5), or Simtropolis (SKU 1 and 2 only). To determine the correct SKU version for your copy of SimCity 4, find the installation directory, and look in the subfolder named _sku_data_. Alternatively, one can simply try all the SKU versions of the patch, until one works.

For Case G and H, see the [section about Origin](#notice-to-users-who-purchased-a-digital-copy-from-origin-or-use-ea-play-or-xbox-game-pass) below.

For Cases D and E, again note that the NAM Team has little experience with the Mac version of the game, mostly restricted to the Steam version, and may be very limited in any ability to provide platform-specific technical support, including with the installation process (which is more complex on the App Store version). See the section about macOS [here](#mac).

For Cases G, H, I, and J, it is recommended that you purchase a digital copy of SimCity 4 Deluxe (NOT from Origin).

**What if my disc copy has simply stopped working with Windows Vista, 7, 8, 8.1, or 10?**

In 2015, Microsoft decided that secdrv.sys, the driver file used by the SafeDisc and other disc copy protection systems present in many PC games from the early 2000s, was a security threat. As a result, the driver was not included as part of Windows 10, and Microsoft issued Windows Update KB3086255, which disables secdrv.sys on Windows Vista, 7, 8, and 8.1. In the case of the older versions of Windows, secdrv.sys can be re-enabled when needed through the use of the command prompt or a batch file.

Aside from the advanced step of manually signing a device driver for Windows 10, the only viable courses of action are to either purchase a retail digital copy of the game, from a retailer who offers a fully-prepatched Version 1.1.641 copy of the game (i.e. GOG or Steam), or to get EA/Origin Customer Support to redeem your CD Key for a free digital copy of the game (unlike copies purchased via the Origin Store, the EA App, or EA Play subscriptions, CD Key Redemption copies are fully-prepatched to Version 1.1.641).

Note that cracked executables (i.e. a "No CD" .exe) are not eligible for tech support. The NAM Team does not support piracy, but understands the frustration with the game's original DRM system being blocked by Microsoft, forcing one to buy a new digital copy in order to continue playing. However, the reason why cracked executables are not eligible is for more practical reasons, namely the potential for version mismatches (i.e. a Version 1.1.638 crack with Version 1.1.610/613 .DAT files, or vice-versa), which can greatly complicate the team's efforts to provide useful technical support to users. The [Origin issues](#notice-to-users-who-purchased-a-digital-copy-from-origin-or-use-ea-play-or-xbox-game-pass) played a role in our keeping the version check in place, until the recent installer change in 2020.

Please note that if you are attempting to use an older, 32-bit version of Windows (i.e. Windows XP) in order to still run your disc game, this will substantially hamper the performance of the game with the full NAM installed, and it is highly recommended that you run the game on a 64-bit operating system if you intend to take advantage of the full feature set. If you must run on a 32-bit OS, you will need to either install the new NAMLite package, or, for a mid-sized installation, select one of the "LowRAM/NoRHW" NAM Controller options. (The RealHighway (RHW) system is by far the largest part of the NAM.)

## Various Important Notes

**Note that the NTCore 4GB Patch is REQUIRED** if you are running the Full NAM Controller ("4GB Full" options in the installer), which is required to use the RealHighway (RHW) system. If the installation procedure is begun via NetworkAddonMod_Setup_Version45.bat, as is the new recommended procedure, the 4GB Patch should be automatically applied to the game. Otherwise, the patch can be found inside the download, or downloaded directly from NTCore [here](https://ntcore.com/?page_id=371), where further instructions on use of the patch can be found. Also due to this installer change, the NAM Controller Compiler is no longer run as part of the installation process. Users will have an option to install one of two pre-built NAM Controller options, the Full "4GB" option, which has a substantial size and requires the 4GB Patch and a 64-bit operating system, or a "Low RAM/No RHW" version that does not require the 4GB Patch, and does not include the code for the RealHighway (RHW) system, the most expansive fetaure in the mod. The "Low RAM/No RHW" version should be used by those with 32-bit operating systems (i.e. Windows XP), less than 4GB RAM, and/or by those not using the RHW.

Users wishing to simply use the NAM's Traffic Simulator improvements should install the NAMLite package, which offers easy setup of various minimal options.

The NAM uses a Java-based installer, designed by **daeley**, which is cross-platform (meaning no more separate Mac versions, and Linux support without WINE). As such, the Java Runtime Environment (JRE) is **REQUIRED** to run the NAM installer. It was previous recommended for users wishing to utilize the NAM Traffic Simulator Configuration Tool (TSCT), which has since been discontinued. A Windows 64-bit copy of OpenJDK 11 is included in the download (_OpenJDK11U-jre_x64_windows_hotspot_11.0.8_10.msi_). Other open source distributions of Java can be downloaded from [here](https://adoptopenjdk.net/).

Users who fundamentally object to installing Java (or are unable to for other reasons) can perform a manual install, with patience. Details can be found [here](#manual-installation---advanced)

With the new installer, the old NAM installation is **no longer removed automatically**, so users should manually remove any "a_Network Addon Mod Lite", "Network Addon Mod" and/or "z___NAM" folders from their Plugins directory. If you use the "Cleanup" option under the "Setup" tab, it is highly recommended that you select the "Backup" option upon completion, and "Delete" will in fact delete all those files, making them unrecoverable. **It is recommended that you back those folders up in a location that is not in your Plugins folder**. Presently, all files are now installed to the "Network Addon Mod" directory, or in the case of a NAMLite install, the "a_Network Addon Mod Lite" directory.

The RealRailway (RRW) standard for Rail is now the **default and only option**, unless using NAMLite. One may choose to disable the RRW's more restrictive default slope settings by unselecting the "RRW Tunnel and Slope Parameters" box in the installer, or selecting the more moderate option. The original Maxis Rail specification is available in NAMLite, and may be available to larger installs via a future Legacy Plugin, downloaded separately, at a later date. Also note that a number of cosmetic-oriented NAM plugins, such as the El-Rail Alternate Implementation, the Bullet Train Mod, and some advanced texture options (largely deprecated) have been removed from the installer since NAM 37. The Alternate El-Rail and BTM will be made available separately at a later date. Please note that, much like Maxis Rail, these Plugins are effectively in "Legacy" status, and may not be actively maintained or supported by the NAM Team going forward, though you may choose to retrieve them from a past NAM installation's "z___NAM" folder. Both the original Maxis Highways (MHW) and the "Maxis Highway Override/Project Symphony" (MHO) remain available.

The Station Locator, Updater, and Reconstruction Project (SLURP) is also no longer handled by the new installer. There is ongoing internal discussion about reimplementing SLURP. Users wishing to retain SLURPed stations should retrieve them from the "z___NAM\Mass Transit Lots\Station Overrides" folder in their existing NAM installation, where they will be found in the "Mass Transit Lots" subfolder. **Note that users running the 64-bit version of SimCity 4 on macOS may wish to refrain from retrieving SLURP stations**, as there have been some encoding issues with stations that cause that version of the game to CTD.

The new installer also no longer performs a version check. **Please note, however, that for Windows users, Version 1.1.638 and above are still required**, as Versions 1.1.610 and 1.1.613 have notable instabilities that may have a significant negative impact on the use of this mod. Copies purchased from the Origin Store, the EA App, or accessed via EA Play may still not meet this requirement, and support will not be offered to users with "unofficial" copies of the game.

## Notice to Users Who Purchased a Digital Copy from Origin, or Use EA Play or Xbox Game Pass

Aside from a brief period in 2014-2015, Origin and the EA App, the digital retail platforms run by Electronic Arts (EA), have been selling copies of SimCity 4 Deluxe featuring an unpatched and unpatchable version of the game's executable file to retail customers. As of the release of NAM 45, this is still the case. Unlike the retail versions sold by GOG.com and Steam (and previously Amazon's "Thin Game Download" version), which come prepatched to Version 1.1.641, the edition sold on the Origin Store and the EA App (also used by the EA Play subscription service), features a Version 1.1.610 executable, mixed with Version 1.1.641 versions of the SimCity_1-5.dat files. By virtue of switching out the original SafeDisc copy protection for their own DRM, EA/Origin altered the checksum of the game's executable, thereby preventing EA's own EP1 Update 1 (Version 1.1.638) and BAT Nightlighting/EP1 Update 2 (Version 1.1.640) patchers from properly updating the executable. It also appears to be more difficult to apply the 4GB Patch with the EA App version, which is needed in order to run a full NAM installation.

This not only fails to meet the NAM's minimum requirements, but leaves EA App/Origin retail copies with many stability issues developers fixed in 2003, and without working nightlighting on any custom buildings. It also prevents first-party content creation tools like the Building Architect Tool (BAT) from being installed, which look for a properly-patched executable. Note that this is in spite of the curious fact that EA uses images of the NAM and other pieces of custom content to advertise SimCity 4, both on EA.com and in the EA App.

Furthermore, the EA App and Origin client are capable of actually unpatching other versions of SimCity 4 Deluxe that a user may have installed on their system, including the Steam and GOG versions, via the "Repair" process. Even if you are not playing an EA App/Origin version of the game, be aware that the EA App and Origin client can still unpatch your game.

For those who have purchased the game via EA.com, the EA App, or the Origin Store, the NAM Team recommends you contact EA/Origin Support about obtaining a refund, even after the return period has expired, as users have had success in this case. If you are among the users who are saddled with the unpatched and unpatchable EA App/Origin retail version. The team would also appreciate hearing from you, as we have a strong desire to see EA give their customers a properly-patched copy of the game, and are trying to document just how many users are affected. Those playing via EA Play/Xbox Game Pass should also let EA Play know that they are serving up an outdated executable for the game, missing key stability fixes.

Strangely, copies obtained by redeeming an existing CD key at no cost with Origin Customer Support (Case C) _are_ properly patched, despite what the same support team routinely tells those who bought copies and received defective Version 1.1.610 digital copies.

In short:

* **Free copy from EA/Origin Support for CD Key Redemption**: Properly patched executable (1.1.641)
* **Purchased copy from EA.com, the EA App, the Origin Store, or playing via EA Play/Xbox Game Pass**: Unpatched and unpatchable executable (permanently locked to Version 1.1.610)

For a more detailed assessment of the Origin situation, NAM developer Tarkus has written extensively on the subject at his blog, [SimTarkus](https://simtarkus.wordpress.com/category/origin/).

## Note to Mac Users

Aspyr issued an update to their port of SimCity 4 Deluxe for macOS, updating it from a 32-bit app to a 64-bit one on both Steam and the App Store, allowing it to be compatible with macOS Catalina (10.15) and later. This change has introduced a number of quirks, however.

Most notably, it has changed the key combination for cycling through TAB Loops under the NAM's various buttons. Instead of using TAB to move forward, and Shift-TAB to move in reverse, Mac users must now use Ctrl-TAB to move forward, and Ctrl-Shift-TAB to move in reverse. While TAB and Shift-TAB will allow one to move through the TAB Loop, these keys/combinations will cause some pieces under the buttons to be skipped.

Furthermore, the changes have also broken simmaster07's SC4MacInjector, which allowed DLL plugins--including SC4Fix.dll (which addressed the puzzle piece/TE Lot CTDs)--to run on macOS. As such, these fixes no longer work on Mac, and users should exercise caution when placing stations in the vicinity of static puzzle pieces.

Additionally, the installation procedure for the NAM varies depending on if one is using the Steam version or the App Store version.

With the Steam version, the NAM will install into the correct location by default: **/Users/{username}/Documents/SimCity 4/Plugins/**.

The NAM Team is not familiar enough with the App Store version to give reliable installation instructions, and we would instead refer users to the [SC4 Mac Users board at Simtropolis](https://community.simtropolis.com/forums/forum/20-sc4-mac-users/) for assistance.

## Preparing to Install The NAM

When one initially extracts the NAM package from the .zip after downloading and opens it, there will be several items present, besides the document you are now reading: several files with different extensions, named "NetworkAddonMod_Setup_Version45" and "NetworkAddonMod_Lite_Setup_Version1", all of which are part of the installation process (depending on your operating system), _4gb_patch.exe_ is the NTCore 4GB Patch, the _Controller Compiler_ folder contains the NAM Controller Compiler, and the Documentation is loose in the folder (and in the "feature-guides", "images", and "old" folders). Note that the Traffic Simulator Configuration Tool (TSCT) has been discontinued, due to the changes in the Traffic Simulator this release.

Before beginning installation, regardless of operating system, **remove your existing NAM installation**, which will be located in the "Network Addon Mod" folder (and if installed pre-2020, may also include a "z___NAM" folder) inside your main Plugins directory. The Cleanup/Cleanitol tab in the installer is not presently set up to remove a full NAM installation, and cannot be relied upon to do so for you.

To begin installation, follow the directions for your operating system:

* On Windows, open **NetworkAddonMod_Setup_Version45.bat** for the full NAM, or **NetworkAddonMod_Lite_Setup_Version1.bat** for NAMLite.
* On Mac, open **NetworkAddonMod_Setup_Version45.jar** for the full NAM, or **NetworkAddonMod_Lite_Setup_Version1.jar** for NAMLite.
* On Linux, open **NetworkAddonMod_Setup_Version45.sh** for the full NAM, or **NetworkAddonMod_Lite_Setup_Version1.sh** for NAMLite.

**Simply dumping the files into your Plugins folder WILL NOT install the NAM--you will get no new menu buttons, and will just slow down the game. The installer MUST be run, or the [manual installation procedure](#manual-install---advanced) must be followed.** If you are on Windows, it is recommended that you If User Access Control (UAC) is enabled on your system, Windows may ask you to approve running the file with a simple "Yes"/"No" prompt. Click "Yes" to allow the installer to run.

In order to progress through the installer, simply click on each tab. Note that the license agreement must be agreed to before subsequent tabs can be accessed. The "Cleanup" tab allows one to remove some residual files from old NAM releases, and pre-NAM transit mods that might cause conflicts, and is loaded with the old Cleanitol list that shipped with NAM 36. It is **highly recommended** that you choose the "Backup" option instead of "Delete" after doing so, as "Delete" will completely wipe out the files, as the label implies. Note that it presently is not capable of removing an entire NAM installation, which should be done manually prior to installing a new release.

For more details on the installation process and options, see [the installation section of the NAM documentation](#installer-options).

## Upgrading from a Previous Version

If you are upgrading from a previous version of the NAM, **MANUALLY MOVE YOUR OLD NAM INSTALLATION OUT FROM YOUR PLUGINS FOLDER, INTO A SAFE LOCATION (note that this has changed from previous NAM releases).**. The NAM installer can no longer detect your previous installation options by reading the existing folder structure. It is recommended that you check your existing installation, to determine which features you presently have installed.

Generally speaking, the NAM Team makes every effort to ensure that new versions at least retain some form of "legacy support", such that cities built with any previous NAM version will continue to function well with the latest version.

If you have consolidated your NAM files using a tool such as SC4DatPacker or JDatPacker, please read [here](#regarding-datpacking-and-file-consolidation-post-installation).

### A Note About Drive Side (RHD vs. LHD)

While the NAM Installer, as noted above, has a series of checkboxes in Custom Installation relating to drive side, it is worth re-iterating that these boxes **only change the compatibility files installed with the NAM, and do NOT change drive side**. If you have an installation with Right-Hand Driving (RHD, vehicles driving on the right side of roads--this concept is **NOT** the same as the side one sits on when driving a vehicle) and wish to switch to Left-Hand Driving (LHD, vehicles driving on the left side of roads), this generally needs to be done either by adjusting the game's locale files, and then either editing the game's Windows registry entries, or by modifying the game's shortcut.

The new NAM Installer cannot determine default drive side of your installation, so make note of which side vehicles drive on in your game prior to installation. If you have changed your drive side by modifying the game's shortcut, instead of editing the Windows registry, then this would be the **one and only case when changing the box checked here would be needed**.

### A Note About the "4GB Patch"

Due to changes in computer systems, and continued expansions of the NAM's main Controller file, in 2013, it was determined that many newer systems, particularly those with more than 4GB of RAM, and running 64-bit versions of Windows, need additional accommodation. To that end, the NAM includes a "4GB Patch", also known as a "Large Address Aware (LAA) Patch", which allows the game to access the full 4GB of RAM that a 32-bit application can read, instead of the default 2GB. The NAM's patch was designed by NTCore, and built into the NAM with permission, and users with systems that need the patch will receive a prompt during NAM installation to install it. The original patch can be found [here](http://www.ntcore.com/4gb_patch.php).

The only thing this patch does is to switch the Large Address Aware switch, an accessible switch present in all Windows executables, from "off" to "on" for the game's executable. Patches like this are common in game modding communities, including those associated with The Elder Scrolls series (i.e. Skyrim), and Fallout, and can be used to enhance any 32-bit application's performance on systems with 64-bit operating systems and a suitable amount of RAM.

The new installation starting point for Windows users-- **NetworkAddonMod_Setup_Version45.bat**--should ensure that your game is automatically patched as needed.

Note that the 4GB Patch is **NOT required for users on macOS**, as that version of the game is 64-bit and can access more RAM than the Windows version (even with the 4GB Patch!) by default.

The default directory for where SimCity 4.exe may be located depends on how and where you purchased your copy of the game.

* **GOG.com**: `C:\GOG Games\SimCity 4 Deluxe Edition\Apps`
* **Steam**: `C:\Program Files (x86)\Steam\steamapps\common\SimCity 4 Deluxe\Apps`
* **Original Disc**: `C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps`
* **Origin***: `C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps`

**Note that only Origin copies acquired through Free CD Key Redemption (Version 1.1.641) are compatible with the NAM. Copies purchased through the Origin Store or accessed via Origin Access (Version 1.1.610) ARE NOT COMPATIBLE. See [here](#notice-to-users-who-purchased-a-digital-copy-from-origin-or-use-ea-play-or-xbox-game-pass) for more details**.

## Uninstalling the NAM

To uninstall the files, simply bulldoze every NAM item from this download in your cities and remove the files from the Plugins folder afterwards, which will be contained in _`Plugins\Network Addon Mod`_ by default.

## Changing Options After Initial Installation

The NAM is a very expansive mod, with a substantial number of features, which may initially prove overwhelming to those not well-versed in its workings. The NAM Team anticipates that users, particularly those new to the NAM, may want to change the feature set they have installed, as they learn more about the mod's contents and capabilities.

To that end, we encourage users to keep the installer for the current version handy after initial installation. If you plan to change your particular set of options, you will need to remove your current installation. Moving it out of Plugins to a safe location is recommended, in case you want to keep your existing settings as a backup.

## Manual Installation - Advanced

Users who are unable or unwilling to install Java can perform a manual installation of the NAM, something which the new file architecture introduced in 2020 makes far more possible than the previous "Monolithic" releases.

This method requires a file decompression tool capable of opening .jar files, such as [7-zip](https://www.7-zip.org) (Windows) or [Keka](https://www.keka.io/en/) (macOS). To begin, open NetworkAddonMod_Setup_Version45.jar using your file decompression tool.

The NAM's contents are located in the "installation" subfolder. The current installer uses a series of character flags at the start of directory names, in order to instruct the installer how to order the options, whether they're mandatory or optional, etc.

Numbers preceded by the at sign ("@"), i.e. "@1", "@2", etc., are merely being ordered with this flag.

Any directory with the caret ("^") in front of the name (or behind a "@" ordering flag) is mandatory.

Any directory with the exclamation mark ("!") in front of the name (or behind a "@" ordering flag) is not installed by default.

Any options where the equal sign ("=") and the dash ("-") are present are mutually exclusive--only one should be installed (the "=" option is the default).

The "@1^Core" directory is required. All other folders have options within them. At least one of the folders starting with "0 NAM Controller" must be installed. With "4 Automata Controller#", and "9 Traffic Simulator#", simply select one of the options inside and discard the rest, as these are straight up mutually exclusive one another. Within "8 Texture and Drive Side Support", keep "z_Common Files", then select either "-EU" (for EU textures) or "=US" (for US textures), and within "-EU" or "=US", get rid of the "_RightSide" or "_LeftSide" (whichever does not coincide with the side the vehicles in your game drive), and decide if you want any (or none) of the other subfolder options (i.e. Cul-De-Sacs).

The Automata Controller basically affects the display of the visual traffic in-game--Standard is going to be the lightest, while Radical is going to be the heaviest, Persistent makes the automata visuals last longer, and the 24-Hour modifiers handle whether the display is constant, or follows the data for the 24-Hour clock in-game.

The Texture and Drive Side Support includes four options, depending on whether you want to use US/North American textures or Euro/International Textures, and the drive side of your game (RHD or LHD, which should match your selection for the NAM Controller).

With the Traffic Simulator, these are ordered by the "@1" and the like in order of lowest capacity option to highest. Medium is the default.

With 5 DataView Options#, there's two subfolders. Both are just straight up options, with nothing mutually exclusive. You can probably just leave this one as is, unless you really don't like the Data View changes.

With 6 Miscellaneous, the two mutually exclusive options to watch out for are Extended Station Queries (there's four options in there--very subtle differences between them), and Maxis Transit Lots\Airport Capacity Adjustment#, which has three options (Default, Medium, and Large). And the Hole Diggers and Raisers are very much recommended--they have lots of use outside regular NAM usage, too.

With 3 Additional Transit Stations, this depends on if you want more transit stations beyond the game's default, and what the NAM adds by default for certain additional override networks. There should be no harm in either adding this one in whole, or leaving it out altogether, and if there's certain added stations you like/don't like, you can go in and customize this later.

2 Additional Network Features is by far the biggest area of the installer. This contains all the actual network feature addons in the mod. Most networks/network groups will have a "Base Features" folder, which really ought to be mandatory, as it contains a lot of the NAM's basic additions to each network, along with any Wide Radius/Multi Radius Curves and Fractional Angles, as well as Roundabout options for the various road-type networks.

The main "mutually exclusive" option to look out for here is with the Maxis Highways (there's two options--@1=Default Style, which keeps the Maxis Highways' default look and adds the NAM's additions for it, or @2-Maxis Highway Override (RHW-Style), which completely reskins the Maxis Highways, removes access to the default interchanges, and replaces them with RHW-style modular interchange functionality and a few new ploppable interchanges. Using the RealHighway (RHW) option is pretty much mandatory if you're going this route).

The other ones to watch out for are in Water Transport, where the Canal Addon Mod (CAN-AM) has two mutually-exclusive styles (@1=Callagrafx Style and @2-SimGoober Style), and there's also quite a few "non-default" options in Roads, One-Way Roads, and Avenues.

Those three non-default options are !Legacy Auto Avenue Turn Lanes (these are the old auto-turn lanes that appear on Avenue x Avenue intersections--largely considered "deprecated" now, as they can interfere with some newer functionality), !Legacy Semi-Auto Road Turn Lanes (the "semi-auto" replacement for the old auto-turn lanes on Road x Road intersections, which now appear by clicking over Road x Road + and T-intersections with the One-Way Road tool, also somewhat "deprecated" now), and !One-Way Road Arrow Plugins. These Arrow Plugins are mostly just a matter of taste, and, despite the folder naming, actually supposed to be mutually exclusive. "Elimination" gets rid of the arrows entirely, "Reduction" hides some of them (and actually impacts the base functionality of the OWR network to some degree), while "Single Arrows" replaces the default double arrows with just a single arrow (which looks nicer on the NWM networks).

The rest of 2 Additional Network Features is pretty self-explanatory, though micromanagement of these options is not recommended, since it is possible to produce a broken installation this way. RealRailway is the only/default option for Rail now, it's best to go all or nothing on RealHighways (RHW) and the Road, One-Way Road, and Avenue folder's "Additional Widths and Turn Lanes" option (which contains the Network Widening Mod and FLEX Turn Lanes). And if something says "Legacy" but it's not prefixed with "!", it's probably safest to install it, as it pertains to being able to keep certain older, deprecated content working, if you've built it with previous versions.

## Information for Users on Lower-End Systems (32-Bit Windows/<4GB RAM)

Users attempting to run the NAM as installed by default with the full NAM Controller, on systems with 32-bit Windows and/or less than 4GB RAM, will not be able to make use of the required 4GB Patch, and will encounter Crash-to-Desktop (CTD) errors with that default Controller. The only solution to this is to either install NAMLite, or select one of the "Low RAM/No RHW" options in the installer. Note that the "Low RAM/No RHW" options do not include ANY code for the RealHighway (RHW) plugin, so attempting to build RHW systems will result in everything reverting to the base RHW-2 network. The single biggest contributor to the Controller's size is the RealHighway (RHW) plugin, so not having it installed helps keep things under control on lower-end systems. Note that the NAM Controller is one of the most critical files in the entire mod; without a NAM Controller, **none of the NAM's menu buttons will function, instead resulting in a "red arrow" when clicked.**

Users wishing to run just the NAM's Traffic Simulator improvements should install NAMLite.

## Distribution and Old Versions

The NAM Team only provides support and allows distribution of the most recent NAM version. With the exception of older non-English language versions (which are supported by their respective sites, not the NAM Team), no technical support will be provided to users of prior versions of the NAM, nor will any past versions of the NAM be made available for download, by request or otherwise. The team does not keep an official archive of past releases, and does not have the resources to answer questions regarding them. Each release includes improvements across the board to features new and old, is designed to be as compatible with cities built with previous versions as is humanly possible, and is also intended to improve the end user experience. Old releases are inherently inferior, and not "simpler" or "easier" to use.

Users wanting a smaller feature set, due to technical limitations, or unfamiliarity with the NAM's vast options, should instead seek to install NAMLite, or fewer options in the current NAM, potentially coupled with the "Low RAM/No RHW" option, .

Users wishing to hold onto old versions should back them up in their personal archives. Note again that no technical support will be provided for this, nor may any user or site redistribute any old versions.