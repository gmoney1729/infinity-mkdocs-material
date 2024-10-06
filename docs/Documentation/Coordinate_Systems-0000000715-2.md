# Coordinate Systems

### Coordinate Systems

A coordinate system provides the information necessary to convert coordinates between different representations (cartesian, geodetic, grid) and to transform coordinates between the WGS84 and a local system.

Coordinate systems can be imported, exported and copied to project.

See also:

**See also:**

Coordinate System Manager

![Image](./data/icons/note.gif)

To be able to copy a coordinate system to a project, the project has to be open. You can only copy coordinate systems to the project which are not attached already.

![Image](./data/icons/note.gif)

Coordinate systems can always be deleted from the list of globally available coordinate systems.

Coordinate System Properties

**Coordinate System Properties**

The properties window is filled dynamically depending on the selected coordinate system. It shows you information on all the components which constitute a coordinate system.

Different constituting components can be chosen. Basically all transformations, ellipsoids, projections, geoid models and CSCS models that are available from within the global coordinate system management are available for selection, too. But which ones are available for a specific coordinate system, depends on validity.

The dependencies are as follows:

**The dependencies are as follows:**

- When you select a coordinate system with a projection type customised, then the connected ellipsoid is predefined and cannot be edited. You cannot choose another. Customised projections are country-specific, predefined projections.
- If you select a projection then an ellipsoid must be selected too.
- When you select a coordinate system with a transformation that does not have common points stored with it, then there are no residuals to be distributed. This is typically the case with manually entered classic 3D transformations. Residual Distribution are set to None and cannot be edited.
- When you select a coordinate system with a transformation type onestep, the Ellipsoid and Projection are set to None and cannot be edited. Knowledge of the local map projection and the local ellipsoid, are not needed with onestep transformations.
- When you select a coordinate system with a transformation type twostep, then Ellipsoid and Projection must be read from the transformation and cannot be edited.

Geoid and CSCS models can be selected or imported.

- To import a geoid or a CSCS model select the    option and then the    to select the model from within the fly-out.
- Only valid models are available for selection. For further information on validity, see topics:Geoid Models CSCS Models

![Image](graphics/00467046.jpg)

![Image](graphics/00466058.jpg)

![Image](./data/icons/note.gif)

The properties of a coordinate system can only be edited from within the properties window.

