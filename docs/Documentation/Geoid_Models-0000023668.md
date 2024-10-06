# Geoid Models

### Geoid Models

A Geoid Model can be defined for geodetic or grid coordinates and refers to a particular ellipsoid. With a Geoid Model attached to a coordinate system, geoid separations can be computed for the points in your project.

If geoid separations are available you can switch between viewing ellipsoidal and orthometric heights.

![Image](./data/icons/note.gif)

Geoid Models are always an approximation of the actual geoid. In terms of accuracy, they may vary considerably and in particular global models should be used with care. If the accuracy of the Geoid Model is not known it might be safer to use local control points with orthometric heights and apply a transformation to approximate the local geoid. The classic 3D transformation can be used in areas where the geoid has a regular shape.

To import a Geoid Model:

**To import a Geoid Model:**

| 1. | In the Coordinate System Manager, select the Geoid Models tab and then    Import from the ribbon bar. |
| --- | --- |
| 2. | Browse for the *.gem file to be imported and open it. |

**Coordinate System Manager**

**Geoid Models**

![Image](graphics/00470356.jpg)

**Import**

Create a new Geoid Model:

**Create a new Geoid Model:**

| 1. | In the Coordinate System Manager, select the Geoid Models tab and then    New from the ribbon bar. |
| --- | --- |
| 2. | In the Properties window, give the Geoid Model a unique Name. |
| 3. | Select the    option to browse for and select a Geoid Model (*.gem). |
| 4. | Select Create to create the new Geoid Model or Cancel to exit the function. |

**Coordinate System Manager**

**Geoid Models**

![Image](graphics/00468041.jpg)

**New**

![Image](graphics/00466058.jpg)

**Create**

**Cancel**

See also:

**See also:**

Coordinate System Manager

Types of Geoid Models

**Types of Geoid Models**

WGS84 Geodetic Models

**WGS84 Geodetic Models**

Geoid Models of this type are of Coordinate Type Geodetic based on the WGS84 ellipsoid. To obtain local orthometric heights the geoid separations are applied to the ellipsoidal heights on the WGS84 coordinate side. Models of this type are never flagged to be applied on local side and they are only valid and can only be used with coordinate systems that either have transformation none or a transformation with height mode ellipsoidal. That is a transformation which flags the local heights as ellipsoidal.

Local Geodetic Models

**Local Geodetic Models**

Geoid Models of this type are of Coordinate Type Geodetic based on either a local ellipsoid or the WGS84 ellipsoid but flagged to be applied on local side. To obtain local orthometric heights the geoid separations are applied to the ellipsoidal heights on the local coordinate side. Models of this type are valid and can be used with coordinate systems that either have transformation none or classic 3D. The ellipsoid of the coordinate system must be the same as the ellipsoid used with the Geoid Model.

Local Grid Models

**Local Grid Models**

Geoid Models of this type are of Coordinate Type Grid based on Ellipsoid None. To obtain local orthometric heights the geoid separations are applied to the ellipsoidal heights on the local coordinate side. Models of this type are valid and can be used with coordinate systems which either have a projection defined or which are of transformation type onestep or twostep.

![Image](./data/icons/note.gif)

If a local grid model is imported that is based on an ellipsoid other than none, then the ellipsoid of the coordinate system with which the model shall be used, must match the ellipsoid of the Geoid Model.

Geoid Model Properties

**Geoid Model Properties**

The Properties window is filled dynamically depending on the selected Geoid Model. It shows you the Path to the imported *.gem file, the Ellipsoid upon which the model is based, its Extents and Spacing.

For geodetic Geoid Models which are based on the WGS84 ellipsoid you can see if they are flagged to be Applied on Local Side. Valid WGS84 geodetic models never have this flag set. They are always applied on the WGS84 coordinate side. Valid local geodetic models must have the flag set if they are based on the WGS84 ellipsoid. Local grid models are always applied on the local side.

The Name of a Geoid Model can always be modified even if it is in use with a coordinate system.

![Image](./data/icons/note.gif)

To be able to delete a Geoid Model it must not be in use with any coordinate system.

