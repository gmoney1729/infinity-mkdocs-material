# Material Layers

### Material Layers

Within Infinity the material layers represent the different layers of a road and are used to group sets of stringlines that belong to the same level, material or phase of construction.

![Image](./data/icons/note.gif)

It is not possible to combine imported stringlines and cross section nodes in the same material layer.

Layers defined for infrastructure or road objects are imported and stored to the road object as material layers. Material surfaces that are created from material layers can have their own code or style attributes.

Stringlines imported or created from cross sections are stored to the layer stringlines and can have their own code and style attributes.

See also:

**See also:**

Layer Manager

To create a new material layer:

**To create a new material layer:**

| 1. | Select the Road to which you want to add a new Material Layer. |
| --- | --- |
| 2. | Select Road Design > Material Layer in the Infrastructure ribbon bar.Next to the Property Grid the New Material Layer tab opens up. |
| 3. | Give the new Material Layer a name. |
| 4. | Optionally, select    Edit next to Centreline to select a centreline. |
| 5. | Select Create. |

**Road Design**

**Material Layer**

![Image](graphics/00467046.jpg)

**Edit**

**Create**

All material layers are visible from the navigator. When used with a cross section based-road, the material layers are also visible in the Infrastructure Manager > Cross Sections tab.

**Infrastructure Manager**

**Cross Sections**

A material layer applies to all cross sections.

With stringline-based roads, the new material layer can be used to add stringlines to it. Which can be either existing stringlines on other layers or library lines (for example, imported from DBX or created in Infinity).

| 1. | Select the stringlines or library lines that shall be assigned to another or a new Material Layer. |
| --- | --- |
| 2. | Right-click and select Add to Material Layer from the context menu or select Add to in the Infrastructure > Road Design ribbon bar.Choose the target Material Layer from the list. |

**Add to Material Layer**

**Add to**

**Infrastructure**

**Road Design**

![Image](./data/icons/note.gif)

Reassigning a stringline to a different material layer does only work for stringline-based roads.

