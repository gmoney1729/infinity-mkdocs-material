# Coordinate System Settings

### Coordinate System Settings

![Image](./data/icons/note.gif)

The parameters for adjustment computations can either be set in the File tab under Info and Settings or from inside the Adjustment ribbon bar.

**File**

**Adjustment**

Changes are stored with the project and applied to all future adjustment runs.

To set the adjustment parameters back to the default values:

Go to the File tab and select the Defaults option in the    Adjustment Parameters section under Info & Settings.

**File**

**Defaults**

![Image](graphics/00467453.jpg)

**Adjustment Parameters**

**Info & Settings**

Coordinate System

**Coordinate System**

- Select **WGS84** if you want to adjust your observations in the **WGS84** system.
- Select **Local Geodetic** if you have a local coordinate system attached to your project and you want to adjust the observations in the local system of your Control points.

![Image](./data/icons/note.gif)

The transformation used with your local coordinate system has to be either a Classic 3D or None for this option to become active.

**Classic 3D**

**None**

Read more in the topic "Status Bar" on how to attach a local coordinate system to a project.

- Select **Local Grid** if you want to adjust pure TPS observations in a local grid system. In this case, no information on the local ellipsoid is necessary.

![Image](./data/icons/note.gif)

**Local Geodetic**

**combined**

Height Mode

**Height Mode**

Depending on the selected height mode, the adjusted coordinates have ellipsoidal or orthometric heights:

- Select **Ellipsoidal** if you want to adjust your observations with ellipsoidal heights.
- Select **Orthometric** if you want to adjust your observations with orthometric heights.

If for your Control points orthometric heights are available and a geoid model is included in the coordinate system to be used with the project then:

**Control**

Run the adjustment with setting the height mode to ellipsoidal.

**ellipsoidal**

After the adjustment, the geoid separations are applied again to get the orthometric heights of the adjusted coordinates.

Parameters

**Parameters**

In order transform observations four parameters are required: three rotations about each axis and a scale factor. These parameters can either be pre-defined and used as such in the adjustment or you can make the adjustment compute the parameters.

**four**

- Select **Compute** if you want the adjustment to compute the parameters independent of the parameters given by the attached coordinate system.
- Select **Use** if you want your observations to be adjusted using the parameters as defined here. This does not have any influence on the parameters given by the attached coordinate system.

![Image](./data/icons/note.gif)

**compute**

