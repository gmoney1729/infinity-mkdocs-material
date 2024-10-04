# Project Code Manager

### Project Code Manager

The project code manager allows you to manage all the thematic codes and layers attached to your current project. Including the structured code table that you may have attached to your project and unassigned field codes that have been imported with your data.

When importing data into the project codes that are related to data are checked against the projects code table. If an imported code is not included in the projects code table or it has more attributes than the same code in the code table then the imported code is shown in the field codes part of the navigator.

To launch the project code manager:

**To launch the project code manager:**

In the Features module, select    Code Manager from within the ribbon bar.

**Features**

![Image](graphics/00470222.jpg)

**Code Manager**

The Project Code Manager opens in a separate window.

The assigned Code Table and the Field Codes are shown even if they are empty.

To manage coding and coding style information:

**To manage coding and coding style information:**

In the Project Code Manager, select the project Code Table and go to the    Code Table tab.

![Image](graphics/00470222.jpg)

**Code Table**

Choose from the following possibilities:

- Add a new code group/code/attribute.
- Edit a code group/code/attribute.
- Delete a code group/code/attribute.

![Image](./data/icons/note.gif)

Field codes cannot be edited within the project. To manage field codes within the project add them to the project code table.

To add imported field codes to the project code table:

**To add imported field codes to the project code table:**

| 1. | Under Field Codes, navigate to the Code Group that has the code that you want to add to the project Code Table. |
| --- | --- |
| 2. | Select the code in the Content View and cut it off from Field Codes by pressing Ctrl+X on the keyboard. |
| 3. | Navigate to the Code Group where you want to insert the code in your Code Table and press Ctrl+V. |
| 4. | Edit the code properties if needed. |
| 5. | To save your changes select Apply and OK. |

**Field Codes**

**Content View**

**Ctrl+X**

**Ctrl+V**

**Apply**

**OK**

![Image](./data/icons/note.gif)

You can select and move not only one code but more codes, a whole code group or a single attribute from field codes to the code table.

![Image](./data/icons/note.gif)

Conflicts between the project code table content and the newly dropped in content is highlighted. Resolve conflicts before applying changes.

To manage thematic layers:

**To manage thematic layers:**

In the Project Code Manager, select the Code Table and go to the    Layers tab.

![Image](graphics/00466184.jpg)

**Layers**

Choose from the following possibilities:

- Add a new Layer to extend thematic grouping for the project features.
- Edit a layer to edit the style of all features on this layer.
- Delete a layer to remove the thematic grouping and style from the project.

To manage blocks:

**To manage blocks:**

In the Project Code Manager, select the Code Table and go to the    Blocks tab.

![Image](graphics/00465971.jpg)

**Blocks**

Choose from the following possibilities:

- Edit a Block Name.
- Delete a Block to remove it from the project.

Export a project Code Table:

**Export a project Code Table:**

The project Code Table can be exported to:

- A **Infinity Code Table file** for use by another Infinity user.
- A **SmartWorx DBX** to be used on an instrument.

