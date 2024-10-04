# Importing SKI ASCII Files

### Importing SKI ASCII Files

When you want to import post-processed GNSS baselines as observations into Infinity, for example as input to an adjustments computation, then you can do so though the SKI ASCII Import.

SKI ASCII files are written in a specific ASCII format to exchange information on baseline vectors.

| In the import dialog: |
| --- |
| 1. | Select SKI ASCII files (*.asc) as file type. |
| 2. | Browse to the location where the SKI ASCII file is stored and select the file to be imported. |
| 3. | Select the Import option. |
| In the Infinity project: |
| 4. | Select a coordinate system to be used for displaying the imported GNSS observations. |

**In the import dialog:**

**SKI ASCII files (*.asc)**

**Import**

**In the Infinity project:**

**coordinate system**

SKI ASCII files that have baseline vector information always hold this information in WGS84. But Leica Infinity only displays data that is either stored as local grid or can be converted to local grid. Thus a coordinate system is required to convert the GNSS observations to local grid and make them visible in the graphical view. On how to assign a coordinate system to a project, see Coordinate Systems.

