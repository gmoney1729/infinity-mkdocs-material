# Reduce Point Clouds

### Reduce Point Clouds

General

**General**

The reduce point clouds tool allows you to reduce the number of points within selected point clouds. There are three different methods to choose from. They work differently, but result in a point cloud with less than the original number of points.

![Image](./data/icons/note.gif)

In order to run this feature, at least one point cloud or point cloud group must be selected.

![Image](./data/icons/note.gif)

When applied to multiple point clouds, each point cloud is treated individually. When applied to a point cloud group, the group as a whole is reduced to the specified value.

Short description of each method:

**Short description of each method:**

| Method | Description |
| --- | --- |
| By PercentageBy Count | You can decide what percentage or number (count) of points to keep after the reduction. Use one of these methods when the number of remaining points should be under control.The operation automatically tries to remove points in more dense areas first. There is no equal spacing between points after the reduction. |
| By Distance | An average distance between points is entered. That defines the size of an octree that is projected onto the point cloud. Within each of the cells, the point closest to the centre of gravity is kept.The result is a dense point cloud that is grid-like with an approximate spacing of the average distance setting.It does not create an exact grid out of the point cloud.Unlike the other methods, there is no control over the remaining number of points. |

**By Percentage**

**By Count**

**By Distance**

![Image](./data/icons/note.gif)

It does not create an exact grid out of the point cloud.

![Image](./data/icons/note.gif)

Unlike the other methods, there is no control over the remaining number of points.

![Image](./data/icons/note.gif)

Any reduce point cloud operation, removes the hidden points from the project and resets the hidden and visible subitem structure in the project library and in the project inspector. For more information, refer to Hide/Unhide.

