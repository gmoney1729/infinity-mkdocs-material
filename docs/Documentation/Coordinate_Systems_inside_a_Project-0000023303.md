# Coordinate Systems inside a Project

### Coordinate Systems inside a Project

You can import one or more coordinate systems to your current project either together with SmartWorx DBX jobs or independently of raw data as transformation sets stored in TRFSET.dat files or from LandXML.

All imported coordinate systems are automatically:

**All imported coordinate systems are automatically:**

- Stored to the project.
- Available for selection in the job properties, the ASCII file properties, the project settings (Info & Settings) and the status bar.
- Listed in the **Coordinate Systems** tab of the Inspector.

Job Coordinate Systems and ASCII/SKI ASCII file Coordinate Systems

**Job Coordinate Systems and ASCII/SKI ASCII file Coordinate Systems**

In the job property grid you can choose a different coordinate system to be attached to the source data of a job.

In the ASCII/SKI ASCII file property grid, you can choose a coordinate system to be attached to the source data of an imported ASCII/SKI ASCII file.

All coordinate systems stored with the current project are available for selection.

| 1. | In the navigator, go to the Source section and select the job/ASCII or SKI ASCII file to which you want to attach a different coordinate system. |
| --- | --- |
| 2. | In the property grid, select a different coordinate system from the drop-down list. |

**Source**

![Image](./data/icons/note.gif)

If you select None no coordinate system is used with the selected job/ASCII/SKI ASCII file.

**None**

![Image](./data/icons/note.gif)

Directly after import ASCII/SKI ASCII files always have the coordinate system None. Attach a coordinate system to be able to use individual coordinate systems with each set of imported raw data, be that jobs or ASCII files, in your project.

If you want to make the coordinate system of the selected job globally available under File > Tools > Coordinate Systems:

**File**

**Tools**

**Coordinate Systems**

Select the    Export to global option.

![Image](graphics/00466037.jpg)

Inspecting Coordinate Systems

**Inspecting Coordinate Systems**

In the Coordinate Systems tab of the inspector all coordinate systems that are stored with the current project are listed.

**Coordinate Systems**

You can:

**You can:**

| Remove coordinate systems from the project.Select one or more than one coordinate system, right-click into the selection and select    Delete from the context menu.Alternatively, select the    option in the top left corner of the main window.You can only delete, for example coordinate systems which are not in use.Removed coordinate systems are still available in the global coordinate system management under File > Tools > Coordinate Systems. |
| --- |
| Export coordinate systems to the global coordinate system management under File > Tools > Coordinate Systems.Select one or more than one Coordinate System, right-click into the selection and select    Export to Global from the context menu.Inspect the properties for each coordinate system including geoid and CSCS models.See whether a coordinate system is In Use    and/or in use as a Master   .Coordinate systems are in use when they are attached to one of the jobs that have been imported to the project.A Coordinate system is the master when it is selected either in the info & settings or from the status bar to be used with all data in the project.The master coordinate system may not be in use with one of the jobs.If no master is selected (for example, None is chosen in the status bar) then the data of each job/ASCII file is displayed using its own coordinate system. |

- Remove coordinate systems from the project.Select one or more than one coordinate system, right-click into the selection and select    **Delete** from the context menu.Alternatively, select the    option in the top left corner of the main window.

![Image](graphics/00466559.jpg)

![Image](graphics/00466559.jpg)

![Image](./data/icons/note.gif)

You can only delete, for example coordinate systems which are not in use.

![Image](./data/icons/note.gif)

Removed coordinate systems are still available in the global coordinate system management under File > Tools > Coordinate Systems.

**File**

**Tools**

**Coordinate Systems**

- Export coordinate systems to the global coordinate system management under **File** > Tools > Coordinate Systems.Select one or more than one Coordinate System, right-click into the selection and select    Export to Global from the context menu.
- Inspect the properties for each coordinate system including geoid and CSCS models.
- See whether a coordinate system is **In Use**    and/or in use as a Master   .Coordinate systems are in use when they are attached to one of the jobs that have been imported to the project.A Coordinate system is the master when it is selected either in the info & settings or from the status bar to be used with all data in the project.

![Image](graphics/00466037.jpg)

![Image](graphics/00467785.jpg)

![Image](graphics/00467788.jpg)

![Image](./data/icons/note.gif)

The master coordinate system may not be in use with one of the jobs.

![Image](./data/icons/note.gif)

If no master is selected (for example, None is chosen in the status bar) then the data of each job/ASCII file is displayed using its own coordinate system.

**None**

Coordinate systems can be modified in the property grid.

Exporting Coordinate Systems:

**Exporting Coordinate Systems:**

If you export a project to DBX, LandXML or HeXML always the master coordinate system is exported with your data. If None is used then your data is exported without any coordinate system information.

**None**

To Export all Coordinate Systems from a Project:

**To Export all Coordinate Systems from a Project:**

Select to export coordinate systems in the data export dialog to export all coordinate systems that are available with the current project and save them to the same TRFSET.DAT file.

See also:

**See also:**

Data Export

