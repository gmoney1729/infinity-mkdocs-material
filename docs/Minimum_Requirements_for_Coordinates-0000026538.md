# Minimum Requirements for Coordinates

### Minimum Requirements for Coordinates

The following list provides you with the minimum requirements for coordinate system A and B, necessary to calculate transformation parameters using the different transformation types. The coordinates either have to comply with the minimum requirements or the coordinate system attached must allow the conversion of the coordinates to the type required. For example, if coordinates are required in cartesian format but are available in geodetic format only, an ellipsoid must be defined allowing the system to convert to the appropriate format.

| System | Classic 3D | Onestep | Twostep |
| --- | --- | --- | --- |
| System A | Cartesian + Ellipsoid | Cartesian | Cartesian |
| System B | Cartesian | Grid | Grid + Ellipsoid + Projection |

![Image](./data/icons/note.gif)

Cartesian + Ellipsoid means that the coordinates have to be available in cartesian or geodetic format plus an ellipsoid must be defined in the attached coordinate system.

The onestep and the twostep transformations require that the geoid model is of type grid. This means that geoids of type geodetic or geoids created from WGS84 or another ellipsoid cannot be used.

Additionally, when a transformation is determined it is important to state whether ellipsoidal or orthometric heights are intended to be used in the target system B. With this information being stored as part of the transformation definition (Height mode), the system knows in which direction the geoid separations have to be applied.

| Type | Minimum requirements |
| --- | --- |
| Classic 3D7 parameters | 3 points with position + height |
| Classic 3D3 shifts | 1 point with position + height |
| Classic 3D3 shifts + scale factor | 2 points with position + height |
| Classic 3D3 shifts + rotation about Z | 2 points with position + height |
| Classic 3D3 shifts + scale factor + rotation about Z | 2 points with position + height |
| Classic 3DOther combinations | If 3 unknowns or less1 point with position + heightIf 4,5 or 6 unknowns2 points with position + height |
| Onestep | 1 point with position only1 point with height is required for the height part of the transformation to be determined. |
| Twostep | 1 point with position only1 point with height is required for the height part of the transformation to be determined. |

Only if these requirements are met it is possible to see the points loaded in the lists and to move to the Result page with the Next option of the Match Points.

![Image](./data/icons/note.gif)

Since a onestep transformation may be calculated without any given height information on the local side, the system takes the WGS84 ellipsoidal height as the local height in that case. This height is also displayed as ellipsoidal then.

![Image](./data/icons/note.gif)

If a twostep transformation is calculated without any given height information on the local side, the system displays the height after applying only the pre-transformation as a local height.

