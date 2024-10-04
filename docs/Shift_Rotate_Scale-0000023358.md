# Shift, Rotate, Scale

### Shift, Rotate, Scale

Shift, rotate, scale is a COGO function and can be used to match a set of preliminary points with a set of control points.

You can also shift, rotate, scale point clouds, CAD geometries, BIM objects and TPS setups.

![Image](./data/icons/note.gif)

All BIM entities in a file are transformed even if only a single element has been selected.

The BIM entities used as common points, must be copied to the Infinity library first. To do this use the New Point or Copy from CAD options.

See also:

**See also:**

How to Create New Points from CAD Entities?

How to Copy from CAD?

To start the shift, rotate, scale wizard:

**To start the shift, rotate, scale wizard:**

| 1. | Select the type and the method.You can enter the parameters for shift, rotate, scale manually or allow Infinity to compute them using common points. |
| --- | --- |

![Image](./data/icons/note.gif)

You can enter the parameters for shift, rotate, scale manually or allow Infinity to compute them using common points.

When you select the method: Enter manually or compute separately, you must:

**When you select the method: Enter manually or compute separately, you must:**

| 2. | Enter the Shift in Easting, Northing and Height. Select the    option to compute the shift:Under From, select a point in the preliminary system. Under To, select the control point in the target system. |
| --- | --- |
| 3. | Enter the Rotation Angle. Select the    option to compute the rotation angle.Under From, select a pair of points in the preliminary system. Under To, select the same pair of control points in the target system.Select the    to select a point in the preliminary system as the origin for the rotation. |
| 4. | Enter the Scale Factor. Select the    option to compute the scale using points or known distances.Under From, select a pair of points in the preliminary system. Under To, select the same pair of control points in the target system. |
| 5. | Select Next to inspect the results. |
| 6. | Select Finish to perform the operation. |

![Image](graphics/00466016.jpg)

![Image](graphics/00466016.jpg)

![Image](graphics/00467046.jpg)

![Image](graphics/00466016.jpg)

**Next**

**Finish**

When you select the method: Compute using common points, the transformation parameters are computed automatically in the background using the common points:

**When you select the method: Compute using common points, the transformation parameters are computed automatically in the background using the common points:**

| 2. | Select whether you want to compute a Rotation and a Scale using common points or None. |
| --- | --- |
| 3. | Select Next to match points. |
| 4. | Under System A, select the preliminary measured points.Under System B, select the corresponding control points. |
| 5. | Select    to match the pair of points.It is listed in the following view:If you match two pairs of points height residuals are calculated. If you match three or more pairs, residuals are calculated for position and height. Errors are distributed.To delete a mismatched pair select   . |
| 6. | Select Next to inspect the results. |
| 7. | Select Finish to perform the operation. |

**Next**

![Image](graphics/00465956.jpg)

![Image](./data/icons/note.gif)

If you match two pairs of points height residuals are calculated. If you match three or more pairs, residuals are calculated for position and height. Errors are distributed.

![Image](./data/icons/note.gif)

To delete a mismatched pair select   .

![Image](graphics/00466004.jpg)

**Next**

**Finish**

By default, a report is created and opened when you select Finish. You can Save and/or Print the report from within the report window.

**Finish**

Saved reports are written as PDF to the archive. You can reopen them from there.

![Image](./data/icons/note.gif)

Unsaved shift, rotate, scale reports are lost when you close them.

![Image](./data/icons/note.gif)

Only coordinates stored as local grid can be transformed.

![Image](./data/icons/note.gif)

The following two types of transformations are supported:

The 5 - Parameter transformation, is ideal for shifting, rotating and scaling TPS data to fit to GNSS data. The main assumption here is that the source and the target data have parallel height axes. The scale is applied in Easting and Northing.

The 7 - Parameter transformation is a 3D Helmert transformation. It can be used to shift, rotate and scale a BIM object to fit to a point cloud. The scale is uniform in all three dimensions. The additional parameters are the rotations around the East and North axes.

