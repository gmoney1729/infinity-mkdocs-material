# Compute Project Coordinates

### Compute Project Coordinates

Allows you to apply a combined scale factor and additional shifts in Easting and Northing in order to compute project coordinates from existing grid coordinates.

In the Home tab, select the    Compute Project Coordinates option.

![Image](graphics/00467819.jpg)

**Compute Project Coordinates**

The Project Coordinates tool opens up next to the Property Grid.

| 1. | Select a method.The following methods are available:User enteredEnter the required combined scale factor manually, and optionally a shift in Easting and Northing.Base PointSelect the    Edit icon and select a base point from the flyout.The grid scale, the height scale and the combined scale factors are computed based on the selected point.Additional shifts in Easting and Northing can be entered manually.If the option Hold Base Point Coordinates is selected and no additional shifts are applied, the grid coordinates of the selected Base Point are equal to its project coordinates.SelectionThe average grid scale, height scale and combined scale factors are computed based on the values that are computed for each of the selected points individually.Additional shifts in Easting and Northing can be entered manually. |
| --- | --- |
| 2. | Select Apply at the bottom of the tool window. |

**User entered**

**Base Point**

![Image](graphics/00467046.jpg)

**Hold Base Point Coordinates**

**Selection**

**Apply**

Project coordinates are computed for all points that are either stored as local grid or can be converted to local grid using the attached coordinate system.

![Image](./data/icons/note.gif)

The project coordinate system must have a map projection of type transverse mercator, UTM, Lambert two or double stereographic.

Check the attached coordinate system in the coordinate system manager.

Inspect the results in the Inspector > Features tab under    Points. If not switched on already right-click on the column headers and select the columns Project Easting and Project Northing to be displayed in addition to the regular Easting and Northing columns. There are also columns for the three scale factors for each point.

**Inspector**

**Features**

![Image](graphics/00466334.jpg)

**Points**

**Project Easting**

**Project Northing**

![Image](./data/icons/note.gif)

The project coordinates including scale factors can be exported to an ASCII file using the ASCII export.

